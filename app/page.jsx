import { DarkThemeToggle } from "flowbite-react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ENDPOINTS, ROUTES } from "./constants";
import FormNavigation from "./components/client-side/FormNavigation";
import Form from "./components/client-side/Form";
import Input from "./components/client-side/Input";
import { inputEmailIcon, inputPasswordIcon } from "./utils/icons";
import FormButton from "./components/server-side/FormButton";
import Logo from "./components/server-side/Logo";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect(ROUTES.HOME_PAGE);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="p-4">
        <DarkThemeToggle />
      </div>
      <div className="container flex items-center justify-center height-70 px-6 mx-auto">
        <div className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <Logo width={250} height={91.7} />
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
                href={ROUTES.SIGN_UP_PAGE}
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
