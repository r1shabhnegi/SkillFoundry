import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const AuthSubmitBtn = ({
  form,
  isLoading,
  btnText,
}: {
  form: any;
  isLoading: boolean;
  btnText: string;
}) => {
  return (
    <Button
      type='submit'
      disabled={!form.formState.isValid || isLoading}
      className={`w-full flex items-center justify-center transition-all cursor-pointer duration-300 h-12 py-3 px-4 rounded-lg text-base ${
        form.formState.isValid && !isLoading
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}>
      {isLoading ? (
        <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
      ) : (
        <>
          {btnText}
          <ArrowRight className='ml-2 h-5 w-5' />
        </>
      )}
    </Button>
  );
};

export default AuthSubmitBtn;
