// app/api/auth/signup/route.js
import { getDB } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import validator from 'validator';

// Debugging utility (can be moved to a shared lib)
const debugLog = (message, data = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[SIGNUP_DEBUG] ${message}`, JSON.stringify(data, null, 2));
  }
};

// Password requirements checker
const isPasswordValid = (password) => {
  return password.length >= 8 && 
         /[A-Z]/.test(password) && 
         /[0-9]/.test(password) &&
         /[^A-Za-z0-9]/.test(password);
};

export async function POST(request) {
  try {
    // Debug: Verify environment variables
    debugLog('Environment check', {
      nodeEnv: process.env.NODE_ENV,
      dbUriPresent: !!process.env.MONGODB_URI
    });

    // Connect to database
    let db;
    try {
      db = await getDB();
      debugLog('Database connection successful');
    } catch (dbError) {
      console.error('Database connection failed:', dbError);
      return NextResponse.json(
        { message: 'Service temporarily unavailable' },
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

    const { name, email, password } = requestBody;

    // Enhanced input validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { message: 'Valid name (min 2 characters) is required' },
        { status: 400 }
      );
    }

    if (!email || !validator.isEmail(email)) {
      return NextResponse.json(
        { message: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (!isPasswordValid(password)) {
      return NextResponse.json(
        { 
          message: 'Password must be at least 8 characters with uppercase, number, and special character',
          requirements: {
            minLength: 8,
            needsUppercase: true,
            needsNumber: true,
            needsSpecialChar: true
          }
        },
        { status: 400 }
      );
    }

    // Check if user exists (case-insensitive)
    const existingUser = await users.findOne({ 
      email: { $regex: new RegExp(`^${email}$`, 'i') } 
    });

    if (existingUser) {
      debugLog('Duplicate registration attempt', { email });
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password with salt
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user document
    const userDoc = {
      name: validator.escape(name.trim()),
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      verified: false,
      role: 'user',
      loginAttempts: 0,
      lastLogin: null
    };

    // Insert new user
    const result = await users.insertOne(userDoc);
    debugLog('User created successfully', { userId: result.insertedId });

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Account created successfully',
        userId: result.insertedId,
        nextSteps: [
          { action: 'verify-email', url: '/verify-email' },
          { action: 'login', url: '/login' }
        ]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup endpoint error:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        message: process.env.NODE_ENV === 'development'
          ? `Registration failed: ${error.message}`
          : 'Registration failed. Please try again later.'
      },
      { status: 500 }
    );
  }
}