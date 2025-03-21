import { FC, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="mt-3 relative">
      <label htmlFor={id} className="block text-secondary font-medium text-[14px]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          {...register}
          aria-invalid={!!error}  
          aria-describedby={error ? `${id}-error` : undefined}
          className={`input focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary w-full pr-10 ${className} ${error ? "border-red-500" : ""}`}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
