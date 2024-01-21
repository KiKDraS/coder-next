import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ENDPOINTS, ROUTES } from "./constants";

import FormNavigation from "./components/FormNavigation";
import Form from "./components/Form";
import Input from "./components/Input";
import { inputEmailIcon, inputPasswordIcon } from "./utils/icons";
import FormButton from "./components/FormButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect(ROUTES.DASHBOARD);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <Image
              src="https://merakiui.com/images/logo.svg"
              alt="Logo"
              width={50}
              height={50}
            />
          </div>

          <FormNavigation />

          <Form endpoint={ENDPOINTS.AUTH_USER}>
            <Input
              icon={inputEmailIcon()}
              type="email"
              placeholder="Dirección de email"
              name="email"
              id="email"
            />
            <Input
              icon={inputPasswordIcon()}
              type="password"
              placeholder="Contraseña"
              name="password"
              id="pass"
            />
            <FormButton text="Ingresar" />
          </Form>

          <div className="mt-6">
            <div className="mt-6 text-center ">
              <Link
                href={ROUTES.SIGN_UP}
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                ¿No tienes una cuenta?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
