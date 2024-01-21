import Logo from "@/app/components/Logo";
import SignOutButtons from "@/app/components/SignOutButtons";

const SignOut = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-y-4 w-2/4 max-w-lg p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <Logo width={250} height={91.7} classes="pb-2" />
        <p className="mb-4 text-gray-500 dark:text-gray-300">
          ¿Estás seguro que deseas salir?
        </p>
        <SignOutButtons />
      </div>
    </div>
  );
};

export default SignOut;
