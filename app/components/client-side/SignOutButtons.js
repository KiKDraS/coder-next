"use client";

import { frontApi } from "@/firebase/frontApi";
import { ENDPOINTS } from "../../constants";
import { useRouter } from "next/navigation";

const SignOutButtons = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        onClick={() => router.back()}
      >
        Volver
      </button>
      <button
        className="py-2 px-3 text-sm font-medium text-center text-white  transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        onClick={() => frontApi({ endpoint: ENDPOINTS.LOGOUT })}
      >
        Salir
      </button>
    </div>
  );
};
export default SignOutButtons;
