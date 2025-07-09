import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { EyeIcon } from "@phosphor-icons/react";

const AuthInput = ({
  field,
  label,
  placeholder,
  type,
  error,
  fieldIcon,
  showPasswordIcon,
  showConfirmPassword,
  setShowConfirmPassword,
}: {
  field: any;
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
  fieldIcon?: React.ElementType;
  showPasswordIcon?: boolean;
  showConfirmPassword?: boolean;
  setShowConfirmPassword?: (value: boolean) => void;
}) => {
  return (
    <FormItem>
      <FormLabel className='block text-sm font-medium text-gray-900'>
        {label}
      </FormLabel>
      <FormControl>
        <div className='relative'>
          {fieldIcon &&
            React.createElement(fieldIcon, {
              className:
                "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5",
            })}
          <Input
            type={type}
            placeholder={placeholder}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg h-12 text-gray-700 focus:border-transparent outline-none transition-colors focus-visible:border-blue-500 placeholder:font-semibold ${
              false ? "border-red-300" : "border-gray-300"
            }`}
            {...field}
          />
          {showPasswordIcon && (
            <EyeIcon
              className='absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5'
              onClick={() => setShowConfirmPassword?.(!showConfirmPassword)}
            />
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default AuthInput;
