import { FormProvider } from "../../context/FormProvider";
import Logo from "../../components/global/Logo";
import { SignUpForm } from "../../components/signUp/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <FormProvider>
      <div className="w-full min-h-screen bg-background lg:px-12 px-6 py-8 flex flex-col items-center">
        <div className="flex items-center justify-between w-full max-w-[1440px]">
          <Logo />
          <div className="flex items-center justify-center gap-2">
            <span className="font-normal text-tetiary md:text-[14px] text-[12px]">
              Already have an account?
            </span>
            <Link
              to="/signin"
              className="text-primary w-[85px] h-[42px] border border-primary rounded-md font-bold text-[14px] flex items-center justify-center transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-md hover:scale-105 hover:text-blue-500"
            >
              Sign In
            </Link>
          </div>
        </div>

        <SignUpForm />
      </div>
    </FormProvider>
  );
};

export default SignUp;
