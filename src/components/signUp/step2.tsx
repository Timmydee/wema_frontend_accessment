import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { step2Schema } from "../../utils/schemas";
import { useFormContext } from "../../hooks/useFormContext";
import InputField from "../global/InputField";
import Button from "../global/Button";
import SelectField from "../global/SelectField";
import { addUser, getUsers } from "../../mockDb/mockDb";
import PendingModal from "./pendingModal";
import { statesInNigeria } from "../../utils/statesData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type Step2FormType = z.infer<typeof step2Schema>;


const stateOptions = statesInNigeria.map((state) => ({
  value: state,
  label: state,
}));

const Step2 = () => {
  const { formData } = useFormContext();
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)


  const closeModal = () => {
    setModal(false)
    navigate("/signin")
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormType>({
    resolver: zodResolver(step2Schema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<Step2FormType> = (data) => {
    setLoading(true)
    setTimeout(() => {
      const finalData = { ...formData, ...data };
      const success = addUser(finalData);
  
      if (success) {
        setModal(true);
      } else {
        toast.error("Something went wrong!");
      }
  
      setLoading(false); 
      console.log("Updated Mock Database:", getUsers());
    }, 2000);
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div>
        <p className="font-medium text-primary text-[14px]">Business Address</p>
        <div className="flex md:flex-row flex-col w-full justify-between">
          <div className="md:w-[30%] w-full">
            <InputField
              label="House Number"
              id="houseNumber"
              register={register("houseNumber", {
                required: "House Number is required",
              })}
              error={errors.houseNumber?.message}
            />
          </div>
          <div className="md:w-[65%] w-full">
            <InputField
              className="w-[70%]"
              label="Street"
              id="street"
              register={register("street", { required: "Street is required" })}
              error={errors.street?.message}
            />
          </div>
        </div>

        <div className="flex justify-between w-full md:flex-row flex-col">
          <div className="md:w-[47%] w-full">
            <InputField
              label="City"
              id="city"
              register={register("city", { required: "City is required" })}
              error={errors.city?.message}
            />
          </div>
          <div className="md:w-[47%] w-full">
            <SelectField
              label="State"
              id="state"
              register={register("state", { required: "State is required" })}
              error={errors.state?.message}
              options={stateOptions}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="font-medium text-primary text-[14px]">
          Contact Person Information
        </p>

        <InputField
          label="Contact Name"
          id="contactName"
          register={register("contactName", {
            required: "Contact Name is required",
          })}
          error={errors.contactName?.message}
        />

        <InputField
          label="Contact Phone"
          id="contactPhone"
          register={register("contactPhone", {
            required: "Contact Phone is required",
          })}
          error={errors.contactPhone?.message}
        />

        <InputField
          label="Contact Email"
          id="contactEmail"
          register={register("contactEmail", {
            required: "Contact Email is required",
          })}
          error={errors.contactEmail?.message}
        />
      </div>

      <div className="mt-8">
        <p className="font-medium text-primary text-[14px]">
          Password
        </p>
        <InputField
          label="Password"
          id="password"
          type="password"
          register={register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />

        <InputField
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          register={register("confirmPassword", {
            required: "Confirm Password is required",
          })}
          error={errors.confirmPassword?.message}
        />
      </div>
      <div className="flex- items-center justify-center space-x-2.5">
        <Button type="submit" disabled={loading} className={`w-[185px]`}>{loading ? "Submitting" : 'Submit'}</Button>
        <span className="text-[14px] font-medium text-[#808080]">
          Step 2 of 2
        </span>
      </div>
    </form>

    {modal && (
      <PendingModal closeModal={closeModal} />
    )}
    </div>
  );
};

export default Step2;

