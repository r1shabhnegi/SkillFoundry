import { Card, CardContent } from "@/components/ui/card";
import { EnvelopeIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

interface Props {
  setIsSubmitted: (isSubmitted: boolean) => void;
}

const CheckEmail = ({ setIsSubmitted }: Props) => {
  return (
    <Card className='bg-white rounded-2xl shadow-xl overflow-hidden'>
      <CardContent className='p-8 text-center space-y-6'>
        {/* Success Icon */}
        <div className='mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center'>
          <svg
            className='w-10 h-10 text-green-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>

        {/* Success Message */}
        <div className='space-y-3'>
          <h3 className='text-2xl font-bold text-gray-900'>
            Account Created Successfully!
          </h3>
          <p className='text-gray-600 leading-relaxed'>
            We've sent a verification email to your inbox. Please check your
            email and click the verification link to activate your account.
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
            Back to Registration
          </button>
          <Link
            href='/login'
            className='block w-full text-center text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors'>
            Go to Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckEmail;
