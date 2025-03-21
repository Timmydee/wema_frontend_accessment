import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";

export const SignUpForm = () => {
    const [step, setStep] = useState(1);
  
    return (
      <div className="lg:w-[522px] w-full mx-auto mt-16 bg-white md:p-8 p-4 rounded-md shadow-lg">
        <h1 className="font-medium text-[24px] text-primary">Welcome to Xpress Rewards</h1>
        <p className="font-normal text-tetiary text-[12px]">
          Complete the form below to get started
        </p>
        <div className="w-full h-[2px] bg-[#F5F6F8] mt-3 mb-3"></div>
  
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2 />}
      </div>
    );
  };