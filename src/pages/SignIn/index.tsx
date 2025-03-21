import { Link } from "react-router-dom";
import Logo from "../../components/global/Logo";
import { SignInForm } from "../../components/signIn/SignInForm";

const SignIn = () => {
  return (
    <div className="w-full min-h-screen bg-background md:px-12 px-6 py-8 flex flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-12">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <span className="font-normal text-tetiary md:text-[14px] text-[12px]">
            New to Xpress Rewards?
          </span>
          <Link
            to="/"
            className="text-primary w-[85px] h-[42px] border border-primary rounded-md font-bold text-[14px] flex items-center justify-center transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-md hover:scale-105 hover:text-blue-500"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <SignInForm />
    </div>
  );
};

export default SignIn;
