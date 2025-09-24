"use client"
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

// Mock AuthForm component since we don't have the original
const AuthForm = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300 w-5 h-5" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-pink-100 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all duration-200 bg-white/70 backdrop-blur-sm placeholder-pink-300"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300 w-5 h-5" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-12 py-3 border border-pink-100 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all duration-200 bg-white/70 backdrop-blur-sm placeholder-pink-300"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600 transition-colors duration-200"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-pink-400 bg-pink-50 border-pink-200 rounded focus:ring-pink-200 focus:ring-2"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-sm text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:ring-4 focus:ring-pink-200"
      >
        Sign In
      </button>

      <div className="text-center">
        <span className="text-gray-600">Don't have an account? </span>
        <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-200">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-rose-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl p-8 relative overflow-hidden mx-4">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-pink-50/40 rounded-3xl"></div>
          
          <div className="relative z-10">
            {/* Logo/Brand area */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl mb-4 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-400 rounded-sm"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-500 font-medium">
                Sign in to your account
              </p>
            </div>

            {/* Auth Form */}
            <AuthForm type="login" />
            
            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-pink-100"></div>
              <span className="px-4 text-sm text-gray-400 font-medium">or continue with</span>
              <div className="flex-1 border-t border-pink-100"></div>
            </div>

            {/* Social login options */}
            <div className="flex justify-center">
              <button className="flex items-center justify-center px-6 py-3 border border-pink-100 rounded-xl hover:bg-pink-50 transition-all duration-200 group w-full max-w-xs">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-pink-500 transition-colors duration-200" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-pink-600 transition-colors duration-200">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}