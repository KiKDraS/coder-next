"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "../constants";

const FormNavigation = () => {
  const pathname = usePathname();
  const home = pathname === ROUTES.SIGN_IN_PAGE;
  const signInStyles = home
    ? "border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
    : "border-b dark:border-gray-400 dark:text-gray-300";
  const signUpStyles = !home
    ? "border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
    : "border-b dark:border-gray-400 dark:text-gray-300";

  return (
    <div className="flex items-center justify-center mt-6">
      <Link
        href="/"
        className={`w-1/3 pb-4 font-medium text-center text-gray-800 capitalize ${signInStyles}`}
      >
        sign in
      </Link>

      <Link
        href={ROUTES.SIGN_UP_PAGE}
        className={`w-1/3 pb-4 font-medium text-center text-gray-800 capitalize ${signUpStyles}`}
      >
        sign up
      </Link>
    </div>
  );
};
export default FormNavigation;
