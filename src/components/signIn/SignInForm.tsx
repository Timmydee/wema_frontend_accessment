import { useForm } from "react-hook-form";
import Button from "../global/Button";
import InputField from "../global/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authenticateUser } from "../../mockDb/mockDb";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthContext";

const loginSchema = z.object({
  Email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must at least be 6 characters"),
});

type LoginType = z.infer<typeof loginSchema>;

export const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginType) => {
    setLoading(true);
    setTimeout(() => {
      const user = authenticateUser(data.Email, data.password);

      if (!user) {
        toast("Invalid email or password!");
        setLoading(false);
      } else {
        const loginSuccess = login(data.Email, data.password);
        if (loginSuccess) {
          setLoading(false);
          toast("Login successful! Redirecting...");
          setTimeout(() => {
            navigate("/dashboard/verifiers");
          }, 500);
        } else {
          toast.error("Login failed. Please try again.");
        }
      }
    }, 2000);
  };

  return (
    <div className="md:w-[522px] w-full max-w-[522px] mx-auto md:mt-16 mt-32 bg-white md:p-8 p-4 rounded-md shadow-lg">
      <h1 className="font-medium text-[24px] text-primary">Welcome Back!</h1>
      <p className="font-normal text-tetiary text-[12px]">
        Sign in to your Xpress reward partner’s dashboard
      </p>
      <div className="w-full h-[2px] bg-[#F5F6F8] mt-3 mb-3"></div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          id="Email"
          register={register("Email", {
            required: "Email is required",
          })}
          error={errors.Email?.message}
        />

        <InputField
          label="Password"
          id="password"
          type="password"
          register={register("password", { required: "Password is required" })}
          error={errors.password?.message}
        />

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Signing In" : "Sign In"}
        </Button>
      </form>
    </div>
  );
};
