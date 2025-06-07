// app/api/auth/login/route.js
import { getDB } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

// Debugging utility
const debugLog = (message, data = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[DEBUG] ${message}`, JSON.stringify(data, null, 2));
  }
};

export async function POST(request) {
  try {
    // Debug: Verify environment variables
    debugLog('Environment check', {
      nodeEnv: process.env.NODE_ENV,
      hasJwtSecret: !!process.env.JWT_SECRET,
      dbUriPresent: !!process.env.MONGODB_URI
    });

    // Validate JWT secret before proceeding
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined in environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Connect to database
    let db;
    try {
      db = await getDB();
      debugLog('Database connection successful');
    } catch (dbError) {
      console.error('Database connection failed:', dbError);
      return NextResponse.json(
        { message: 'Database connection failed' },
        { status: 503 }
      );
    }

    const users = db.collection('users');

    // Parse and validate request body
    let requestBody;
    try {
      requestBody = await request.json();
      debugLog('Request body received', requestBody);
    } catch (parseError) {
      console.error('Request parsing failed:', parseError);
      return NextResponse.json(
        { message: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { email, password } = requestBody;

    // Enhanced input validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { message: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Find user with case-insensitive email search
    const user = await users.findOne({ 
      email: { $regex: new RegExp(`^${email}$`, 'i') } 
    });

    if (!user) {
      debugLog('User not found attempt', { email });
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      debugLog('Invalid password attempt', { email });
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token with enhanced security
    const tokenPayload = {
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
      iat: Math.floor(Date.now() / 1000)
    };

    const token = jwt.sign(
      tokenPayload,
      process.env.JWT_SECRET,
      { 
        expiresIn: '1d',
        algorithm: 'HS256'
      }
    );

    // Prepare user data response (excluding sensitive fields)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt
    };

    // Create response
    const response = NextResponse.json(
      { 
        message: 'Login successful',
        user: userData,
        token 
      },
      { status: 200 }
    );

    // Set secure cookie
    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // More flexible than 'strict' for modern apps
      maxAge: 86400, // 1 day in seconds
      path: '/',
      domain: process.env.NODE_ENV === 'production' 
        ? '.yourdomain.com' // Set your production domain
        : undefined
    });

    debugLog('Login successful', { email: user.email, userId: user._id });
    return response;

  } catch (error) {
    console.error('Login endpoint error:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        message: process.env.NODE_ENV === 'development'
          ? `Server error: ${error.message}`
          : 'Internal server error' 
      },
      { status: 500 }
    );
  }
}