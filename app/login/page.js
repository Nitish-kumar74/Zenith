"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.password) newErrors.password = "Password is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Redirect to menu page after successful login
      router.push('/menu');
    } catch (error) {
      setErrors({ ...errors, submit: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black/60">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/logo2.jpg')" }}
        aria-hidden="true"
      />

      {/* Login Form Card */}
      <div className="w-full max-w-md bg-gray-900 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-gray-700">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-amber-400 uppercase tracking-wider">
            𝓩𝓔𝓝𝓘𝓣𝓗 Login
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Welcome back! Please enter your credentials.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:outline-none`}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className={`w-full px-4 py-3 bg-gray-800 border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:outline-none`}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm text-center">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg shadow transition duration-300 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">↻</span>
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-amber-400 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}