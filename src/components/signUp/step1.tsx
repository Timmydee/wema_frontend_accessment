import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../../utils/schemas";
import { useFormContext } from "../../hooks/useFormContext";
import InputField from "../global/InputField";
import Button from "../global/Button";
import SelectField from "../global/SelectField";
import FileUpload from "../global/FileUpload";
import { z } from "zod";

type Step1FormType = z.infer<typeof step1Schema>;

const businessCategories = [
  { value: "retail", label: "Retail" },
  { value: "services", label: "Services" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "technology", label: "Technology" },
];

const Step1 = ({ setStep }: { setStep: (step: number) => void }) => {
  const { formData, setFormData } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormType>({
    resolver: zodResolver(step1Schema),
    defaultValues: formData,
  });

  const onNext: SubmitHandler<Step1FormType> = async (data) => {
    const file = data.businessLogo as File;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageBase64 = reader.result as string;

        setFormData({
          ...formData,
          ...data,
          businessLogo: imageBase64,
        });

        setStep(2);
      };
    } else {
      setFormData({ ...formData, ...data });
      setStep(2);
    }
  };

  return (
    <div>
      <p className="font-medium text-primary text-[14px]">
        Business Information
      </p>
      <form onSubmit={handleSubmit(onNext)} className="mt-0">
        <InputField
          label="Business Name"
          id="businessName"
          placeholder="Enter Business Name"
          register={register("businessName", {
            required: "Business Name is required",
          })}
          error={errors.businessName?.message}
        />

        <InputField
          label="Business Email"
          id="businessEmail"
          type="email"
          placeholder="Enter Business Email"
          register={register("businessEmail", {
            required: "Business Email is required",
          })}
          error={errors.businessEmail?.message}
        />

        <InputField
          label="Business Phone"
          id="businessPhone"
          type="text"
          placeholder="Enter Business Phone"
          register={register("businessPhone", {
            required: "Business Phone is required",
          })}
          error={errors.businessPhone?.message}
        />

        <SelectField
          label="Business Category"
          id="businessCategory"
          options={businessCategories}
          register={register("businessCategory", {
            required: "Business Category is required",
          })}
          error={errors.businessCategory?.message}
        />

        <InputField
          label="Account No"
          id="accountNo"
          type="text"
          placeholder="Enter Account No"
          register={register("accountNo", {
            required: "Account No is required",
          })}
          error={errors.accountNo?.message}
        />

        <FileUpload
          label="Image (Logo)"
          id="businessLogo"
          register={register("businessLogo", {
            required: "Business Logo is required",
          })}
          error={errors.businessLogo?.message as string}
        />
        <div className="flex- items-center justify-center space-x-2.5">
          <Button type="submit" className="w-[185px]">
            Next
          </Button>
          <span className="text-[14px] font-medium text-[#808080]">
            Step 1 of 2
          </span>
        </div>
      </form>
    </div>
  );
};

export default Step1;
