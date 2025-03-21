import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectFieldProps {
  label?: string;
  id?: string;
  options: { value: string; label: string }[];
  register?: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

const SelectField: FC<SelectFieldProps> = ({ label, id, options, register, error, className = "" }) => {
  return (
    <div className="mt-3">
      {label && (
        <label htmlFor={id} className="block text-[#1A141F] font-medium text-sm md:text-[14px] mb-1">
          {label}
        </label>
      )}
      <select
        id={id}
        {...register}
        className={`select ${className}`}
        aria-invalid={error ? "true" : "false"}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;