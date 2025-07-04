"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Eye,
  EyeOff,
  Mail,
  User,
  Lock,
  Briefcase,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Registration data:", data);
    setIsLoading(false);
    // Handle registration logic here
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    // Handle Google OAuth here
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        {/* Header */}
        <div className='text-center'>
          <Link
            href='/'
            className='flex items-center justify-center mb-8'>
            <Briefcase className='h-10 w-10 text-blue-600' />
            <span className='ml-2 text-3xl font-bold text-gray-900'>
              JobPortal
            </span>
          </Link>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Create your account
          </h2>
          <p className='text-gray-600'>
            Join thousands of job seekers and find your dream job today
          </p>
        </div>

        {/* Registration Form */}
        <div className='bg-white rounded-2xl shadow-xl p-8 space-y-6'>
          {/* Google Sign In */}
          <button
            type='button'
            onClick={handleGoogleSignIn}
            className='w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-medium'>
            <svg
              className='w-5 h-5 mr-3'
              viewBox='0 0 24 24'>
              <path
                fill='#4285F4'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='#34A853'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='#FBBC05'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              />
              <path
                fill='#EA4335'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6'>
            {/* Full Name Field */}
            <div>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Full Name
              </label>
              <div className='relative'>
                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Full name must be at least 2 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Full name can only contain letters and spaces",
                    },
                  })}
                  type='text'
                  placeholder='Enter your full name'
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                    errors.fullName ? "border-red-300" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className='mt-1 text-sm text-red-600 flex items-center'>
                  <AlertCircle className='h-4 w-4 mr-1' />
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type='email'
                  placeholder='Enter your email address'
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.email && (
                <p className='mt-1 text-sm text-red-600 flex items-center'>
                  <AlertCircle className='h-4 w-4 mr-1' />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                      message:
                        "Password must contain uppercase, lowercase, number and special character",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder='Create a strong password'
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'>
                  {showPassword ? (
                    <EyeOff className='h-5 w-5' />
                  ) : (
                    <Eye className='h-5 w-5' />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className='mt-1 text-sm text-red-600 flex items-center'>
                  <AlertCircle className='h-4 w-4 mr-1' />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Confirm Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='Confirm your password'
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                    errors.confirmPassword
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'>
                  {showConfirmPassword ? (
                    <EyeOff className='h-5 w-5' />
                  ) : (
                    <Eye className='h-5 w-5' />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className='mt-1 text-sm text-red-600 flex items-center'>
                  <AlertCircle className='h-4 w-4 mr-1' />
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className='flex items-start'>
              <input
                {...register("acceptTerms", {
                  required: "You must accept the terms and conditions",
                })}
                type='checkbox'
                className='mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
              />
              <label className='ml-3 text-sm text-gray-600'>
                I agree to the{" "}
                <Link
                  href='/terms'
                  className='text-blue-600 hover:text-blue-500'>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href='/privacy'
                  className='text-blue-600 hover:text-blue-500'>
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.acceptTerms && (
              <p className='text-sm text-red-600 flex items-center'>
                <AlertCircle className='h-4 w-4 mr-1' />
                {errors.acceptTerms.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type='submit'
              disabled={!isValid || isLoading}
              className={`w-full flex items-center justify-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                isValid && !isLoading
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}>
              {isLoading ? (
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
              ) : (
                <>
                  Create Account
                  <ArrowRight className='ml-2 h-5 w-5' />
                </>
              )}
            </button>
          </form>

          {/* Password Requirements */}
          <div className='bg-gray-50 rounded-lg p-4'>
            <h4 className='text-sm font-medium text-gray-700 mb-2'>
              Password Requirements:
            </h4>
            <ul className='text-xs text-gray-600 space-y-1'>
              <li className='flex items-center'>
                <CheckCircle className='h-3 w-3 mr-2 text-green-500' />
                At least 8 characters long
              </li>
              <li className='flex items-center'>
                <CheckCircle className='h-3 w-3 mr-2 text-green-500' />
                Contains uppercase and lowercase letters
              </li>
              <li className='flex items-center'>
                <CheckCircle className='h-3 w-3 mr-2 text-green-500' />
                Contains at least one number
              </li>
              <li className='flex items-center'>
                <CheckCircle className='h-3 w-3 mr-2 text-green-500' />
                Contains at least one special character
              </li>
            </ul>
          </div>

          {/* Sign In Link */}
          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              Already have an account?{" "}
              <Link
                href='/login'
                className='font-medium text-blue-600 hover:text-blue-500'>
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center text-xs text-gray-500'>
          By signing up, you're joining thousands of professionals who found
          their dream jobs on JobPortal
        </div>
      </div>
    </div>
  );
};

export default Register;
