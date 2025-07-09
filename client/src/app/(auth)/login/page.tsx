"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import AuthInput from "@/components/shared/AuthInput";
import AuthSubmitBtn from "@/components/shared/AuthSubmitBtn";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  LockKeyIcon,
} from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: login, isPending } = useMutation({
    mutationFn: 
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Login data:", data);
    setIsLoading(false);
    // Handle login logic here
  }

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
            <BriefcaseIcon className='h-10 w-10 text-blue-600' />
            <span className='ml-2 text-3xl font-bold text-gray-900'>
              JobPortal
            </span>
          </Link>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            Welcome back
          </h2>
          <p className='text-gray-600'>
            Sign in to your account to continue your job search
          </p>
        </div>

        {/* Login Form */}
        <div className='bg-white rounded-2xl shadow-xl p-8 space-y-6'>
          {/* Google Sign In */}
          <button
            type='button'
            // onClick={handleGoogleSignIn}
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
                Or sign in with email
              </span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <AuthInput
                    field={field}
                    label='Email Address'
                    placeholder='Enter your email address'
                    type='email'
                    error={form.formState.errors.email?.message}
                    fieldIcon={EnvelopeIcon}
                  />
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <AuthInput
                    field={field}
                    label='Password'
                    placeholder='Enter your password'
                    type={showPassword ? "text" : "password"}
                    error={form.formState.errors.password?.message}
                    fieldIcon={LockKeyIcon}
                    showPasswordIcon={true}
                    showConfirmPassword={showPassword}
                    setShowConfirmPassword={setShowPassword}
                  />
                )}
              />

              {/* Remember Me and Forgot Password */}
              <div className='flex items-center justify-between'>
                <FormField
                  control={form.control}
                  name='rememberMe'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='border-gray-400 text-blue-600 focus-visible:ring-blue-500 [&_[data-slot=checkbox-indicator]_svg]:text-white'
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel className='text-sm text-gray-600'>
                          Remember me
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Link
                  href='/forgot-password'
                  className='text-sm text-blue-600 hover:text-blue-500 font-medium'>
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <AuthSubmitBtn
                form={form}
                isLoading={isLoading}
                btnText='Sign In'
              />
            </form>
          </Form>

          {/* Sign Up Link */}
          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              Don't have an account?{" "}
              <Link
                href='/register'
                className='font-medium text-blue-600 hover:text-blue-500'>
                Create one now
              </Link>
            </p>
          </div>
        </div>

        {/* Alternative Actions */}
        <div className='text-center space-y-4'>
          <div className='text-xs text-gray-500'>
            Looking to hire talent?{" "}
            <Link
              href='/employer-signup'
              className='text-blue-600 hover:text-blue-500 font-medium'>
              Sign up as an employer
            </Link>
          </div>

          <div className='flex items-center justify-center space-x-6 text-xs text-gray-400'>
            <Link
              href='/privacy'
              className='hover:text-gray-600'>
              Privacy
            </Link>
            <span>•</span>
            <Link
              href='/terms'
              className='hover:text-gray-600'>
              Terms
            </Link>
            <span>•</span>
            <Link
              href='/help'
              className='hover:text-gray-600'>
              Help
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className='bg-white rounded-xl p-6 shadow-lg'>
          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              Join 2M+ Professionals
            </h3>
            <p className='text-gray-600 text-sm mb-4'>
              Who found their dream jobs through JobPortal
            </p>
            <div className='flex items-center justify-center space-x-8'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>95%</div>
                <div className='text-xs text-gray-500'>Success Rate</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-green-600'>14</div>
                <div className='text-xs text-gray-500'>Days Avg.</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-purple-600'>50k+</div>
                <div className='text-xs text-gray-500'>Active Jobs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
