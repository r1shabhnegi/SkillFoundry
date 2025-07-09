"use client";
// import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { verifyEmailMutationFn } from "@/lib/api/auth.apis";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { BriefcaseIcon } from "@phosphor-icons/react";
import { Suspense } from "react";
import Link from "next/link";

const ConfirmAccountContent = () => {
  const router = useRouter();

  const params = useSearchParams();
  const code = params.get("code");

  const { mutate, isPending } = useMutation({
    mutationFn: verifyEmailMutationFn,
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!code) {
      toast.error("Confirmation token not found");
      return;
    }
    mutate(
      { code },
      {
        onSuccess: () => {
          toast.success("Account confirmed successfully");
          router.replace("/login");
        },
        onError: (error) => {
          toast.error(error.message || "Something went wrong");
        },
      }
    );
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
            Account Confirmation
          </h2>
          <p className='text-gray-600'>
            Confirm your account to start your job search journey
          </p>
        </div>

        {/* Confirmation Card */}
        <div className='bg-white rounded-2xl shadow-xl p-8 space-y-6'>
          <div className='text-center space-y-4'>
            <p className='text-gray-600'>
              To confirm your account, please click the button below.
            </p>

            <form onSubmit={handleSubmit}>
              <Button
                disabled={isPending}
                type='submit'
                className='w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                {isPending && <Loader className='animate-spin mr-2 h-4 w-4' />}
                Confirm Account
              </Button>
            </form>
          </div>

          {/* Support Information */}
          <div className='border-t border-gray-200 pt-6'>
            <p className='text-sm text-gray-600 text-center'>
              If you have any issue confirming your account, please contact{" "}
              <a
                className='text-blue-600 hover:text-blue-500 font-medium transition-colors'
                href='mailto:support@squeezy.com'>
                support@squeezy.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center text-xs text-gray-500'>
          Welcome to JobPortal - where professionals find their dream careers
        </div>
      </div>
    </div>
  );
};

const ConfirmAccount = () => {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center'>
          <div className='text-gray-600'>Loading...</div>
        </div>
      }>
      <ConfirmAccountContent />
    </Suspense>
  );
};

export default ConfirmAccount;
