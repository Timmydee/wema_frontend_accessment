import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  id?: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

const InputField: FC<InputFieldProps> = ({ 
  label, 
  id, 
  type = "text", 
  placeholder, 
  register, 
  error, 
  className = "" 
}) => {
  return (
    <div className="mt-3">
      <label 
        htmlFor={id} 
        className="block text-secondary font-medium text-[14px]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        aria-invalid={!!error}  
        aria-describedby={error ? `${id}-error` : undefined}
        className={`input focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary ${className} ${error ? "border-red-500" : ""}`}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
