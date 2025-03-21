import { createContext } from "react";

export interface FormDataType {
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessCategory: string;
  accountNo: string;
  businessLogo?: File | string | null;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  password: string;
  confirmPassword: string;
}

export interface FormContextType {
  step: number;
  setStep: (step: number) => void;
  formData: FormDataType;
  setFormData: (data: Partial<FormDataType>) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);
