"use client";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  LockKeyIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { registerMutationFn } from "@/lib/api/auth.apis";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema, { RegisterFormTypes } from "./registerVald";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AuthInput from "@/components/shared/AuthInput";
import AuthSubmitBtn from "@/components/shared/AuthSubmitBtn";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import CheckEmail from "./components/CheckEmail";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: registerMutationFn,
  });

  const form = useForm<RegisterFormTypes>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormTypes) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password and confirm password do not match");
      return;
    }
    registerUser({ email: data.email, password: data.password } as any, {
      onSuccess: () => {
        toast.success(
          "Registration successful! Please check your email to verify your account."
        );
        setIsSubmitted(true);
        form.reset();
      },
      onError: (error: any) => {
        toast.error(error?.message || "Registration failed. Please try again.");
      },
    });
  };

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          {isSubmitted ? (
            <CheckEmail setIsSubmitted={setIsSubmitted} />
          ) : (
            <>
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
                  Create your account
                </h2>
                <p className='text-gray-600'>
                  Join thousands of job seekers and find your dream job today
                </p>
              </div>

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
                      Or continue with email
                    </span>
                  </div>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4'>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <AuthInput
                          field={field}
                          label='Email'
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
                          type='password'
                          error={form.formState.errors.password?.message}
                          fieldIcon={LockKeyIcon}
                        />
                      )}
                    />

                    {/* Confirm Password Field */}
                    <FormField
                      control={form.control}
                      name='confirmPassword'
                      render={({ field }) => (
                        <AuthInput
                          field={field}
                          label='Confirm Password'
                          placeholder='Confirm your password'
                          type={showConfirmPassword ? "text" : "password"}
                          error={form.formState.errors.confirmPassword?.message}
                          fieldIcon={LockKeyIcon}
                          showPasswordIcon={true}
                          showConfirmPassword={showConfirmPassword}
                          setShowConfirmPassword={setShowConfirmPassword}
                        />
                      )}
                    />

                    {/* Terms and Conditions */}
                    <FormField
                      control={form.control}
                      name='acceptTerms'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center'>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className='border-gray-400 text-blue-600 focus-visible:ring-blue-500 [&_[data-slot=checkbox-indicator]_svg]:text-white'
                              />
                            </FormControl>
                            <FormLabel className='ml-3 text-sm text-gray-600'>
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
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <AuthSubmitBtn
                      form={form}
                      isLoading={isPending}
                      btnText='Create Account'
                    />
                  </form>
                </Form>

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
            </>
          )}
          {/* Footer */}
          <div className='text-center text-xs text-gray-500'>
            By signing up, you're joining thousands of professionals who found
            their dream jobs on JobPortal
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
