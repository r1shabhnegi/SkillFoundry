"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MailCheckIcon, Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { BriefcaseIcon, EnvelopeIcon } from "@phosphor-icons/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthInput from "@/components/shared/AuthInput";
// import { forgotPasswordMutationFn } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

import Link from "next/link";
import { toast } from "sonner";
import { forgotPasswordMutationFn } from "@/lib/api/auth.apis";

export default function ForgotPassword() {
  const params = useSearchParams();

  const email = params.get("email");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPasswordMutationFn,
  });

  const formSchema = z.object({
    email: z.string().trim().email().min(1, {
      message: "Email is required",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values, {
      onSuccess: (response: any) => {
        setIsSubmitted(true);
        toast.success("Email sent successfully");
      },
      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
    });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        {!isSubmitted ? (
          <>
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
                Reset Password
              </h2>
              <p className='text-gray-600'>
                Enter your email address and we'll send you instructions to
                reset your password
              </p>
            </div>

            {/* Reset Password Card */}
            <div className='bg-white rounded-2xl shadow-xl p-8 space-y-6'>
              <Form {...form}>
                <form
                  className='space-y-6'
                  onSubmit={form.handleSubmit(onSubmit)}>
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
                  <Button
                    disabled={isPending}
                    type='submit'
                    className='w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed h-12'>
                    {isPending && (
                      <Loader className='animate-spin mr-2 h-4 w-4' />
                    )}
                    Send Reset Instructions
                  </Button>
                </form>
              </Form>

              {/* Back to Login */}
              <div className='text-center pt-4 border-t border-gray-200'>
                <Link
                  href='/login'
                  className='text-blue-600 hover:text-blue-500 font-medium transition-colors text-sm'>
                  ← Back to Login
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className='text-center text-xs text-gray-500'>
              Welcome to JobPortal - where professionals find their dream
              careers
            </div>
          </>
        ) : (
          <>
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
                Check Your Email
              </h2>
              <p className='text-gray-600'>
                We've sent password reset instructions to your email
              </p>
            </div>

            {/* Email Sent Card */}
            <div className='bg-white rounded-2xl shadow-xl p-8 text-center space-y-6'>
              {/* Success Icon */}
              <div className='mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center'>
                <MailCheckIcon className='w-10 h-10 text-green-600' />
              </div>

              {/* Success Message */}
              <div className='space-y-3'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Email Sent Successfully!
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  We've sent password reset instructions to{" "}
                  <span className='font-medium text-gray-900'>
                    {form.getValues().email}
                  </span>
                  . Please check your email and follow the instructions to reset
                  your password.
                </p>
              </div>

              {/* Email Icon and Info */}
              <div className='bg-blue-50 rounded-lg p-4 flex items-center space-x-3'>
                <div className='flex-shrink-0'>
                  <EnvelopeIcon className='h-6 w-6 text-blue-600' />
                </div>
                <div className='text-left'>
                  <p className='text-sm font-medium text-blue-900'>
                    Check your email
                  </p>
                  <p className='text-xs text-blue-700'>
                    Don't forget to check your spam folder
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='space-y-3 pt-4'>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                  Send Another Email
                </button>
                <Link
                  href='/login'
                  className='block w-full text-center text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors'>
                  Back to Login
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className='text-center text-xs text-gray-500'>
              Welcome to JobPortal - where professionals find their dream
              careers
            </div>
          </>
        )}
      </div>
    </div>
  );
}
