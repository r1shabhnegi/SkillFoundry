"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { BriefcaseIcon, LockKeyIcon } from "@phosphor-icons/react";

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
// import Logo from "@/components/logo";
import { ArrowLeft, Frown, Loader } from "lucide-react";
import Link from "next/link";
import { resetPasswordMutationFn } from "@/lib/api/auth.apis";
import { toast } from "sonner";
// import { resetPasswordMutationFn } from "@/lib/api";
// import { toast } from "@/hooks/use-toast";

export default function ResetPassword() {
  const router = useRouter();

  const params = useSearchParams();
  const code = params.get("code");
  const exp = Number(params.get("exp"));
  const now = Date.now();

  const isValid = code && exp && exp > now;

  const { mutate, isPending } = useMutation({
    mutationFn: resetPasswordMutationFn,
  });

  const formSchema = z
    .object({
      password: z.string().trim().min(1, {
        message: "Password is required",
      }),
      confirmPassword: z.string().trim().min(1, {
        message: "Confirm password is required",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password does not match",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!code) {
      router.replace("/forgot-password?email=");
      return;
    }
    const data = {
      password: values.password,
      verificationCode: code,
    };
    mutate(data, {
      onSuccess: () => {
        toast.success("Password reset successfully");
        router.replace("/");
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
        {isValid ? (
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
                Set New Password
              </h2>
              <p className='text-gray-600'>
                Your password must be different from your previous one
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
                    name='password'
                    render={({ field }) => (
                      <AuthInput
                        field={field}
                        label='New Password'
                        placeholder='Enter your new password'
                        type='password'
                        error={form.formState.errors.password?.message}
                        fieldIcon={LockKeyIcon}
                      />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <AuthInput
                        field={field}
                        label='Confirm New Password'
                        placeholder='Confirm your new password'
                        type='password'
                        error={form.formState.errors.confirmPassword?.message}
                        fieldIcon={LockKeyIcon}
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
                    Update Password
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
                Invalid Reset Link
              </h2>
              <p className='text-gray-600'>
                This password reset link is invalid or has expired
              </p>
            </div>

            {/* Error Card */}
            <div className='bg-white rounded-2xl shadow-xl p-8 text-center space-y-6'>
              {/* Error Icon */}
              <div className='mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center'>
                <Frown className='w-10 h-10 text-red-600' />
              </div>

              {/* Error Message */}
              <div className='space-y-3'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Link Expired or Invalid
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  This password reset link is no longer valid. Please request a
                  new password reset link to continue.
                </p>
              </div>

              {/* Action Buttons */}
              <div className='space-y-3 pt-4'>
                <Link
                  href='/forgot-password'
                  className='block w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center'>
                  Request New Reset Link
                </Link>
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
