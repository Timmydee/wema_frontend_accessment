import React, { useState } from "react";
import { FormContext, FormDataType } from "./FormContext";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessCategory: "",
    accountNo: "",
    businessLogo: null,
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    password: "",
    confirmPassword: "",
  });

  const updateFormData = (data: Partial<FormDataType>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <FormContext.Provider value={{ step, setStep, formData, setFormData: updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
