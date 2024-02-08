import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";
import FormNavigation from "../../components/client-side/FormNavigation";
import Form from "../../components/client-side/Form";
import Input from "../../components/client-side/Input";
import {
  inputEmailIcon,
  inputPasswordIcon,
  inputUserIcon,
} from "../../utils/icons";
import FormButton from "../../components/server-side/FormButton";
import Logo from "@/app/components/server-side/Logo";
import { addUser, getUsers } from "@/firebase/db.config";
import { getUserImage } from "@/app/utils/getUserImage";
import { ROUTES } from "@/app/constants";

const signUpUser = async (data) => {
  "use server";

  const users = await getUsers();

  const userEmailExists = users.find((user) => user.email === data.email);

  if (userEmailExists)
    return { error: true, text: "El email ya se encuentra registrado" };

  const usernameExists = users.find((user) => user.username === data.username);

  if (usernameExists)
    return { error: true, text: "El nombre de usuario ya existe" };

  const { username, email, pass } = data;
  const image = getUserImage();
  const user = { username, email, pass, image, role: "user" };
  await addUser(user);

  return user;
};

const SignUp = () => {
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

          <Form submitAction={signUpUser}>
            <Input
              icon={inputUserIcon()}
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              id="username"
            />
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
              name="pass"
              id="pass"
            />
            <Input
              icon={inputPasswordIcon()}
              type="password"
              placeholder="Repetir Contraseña"
              name="passRepeat"
              id="passRepeat"
            />
            <FormButton text="Registrar" />
          </Form>

          <div className="mt-6">
            <div className="mt-6 text-center ">
              <Link
                href={ROUTES.SIGN_IN_PAGE}
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                ¿Ya tienes cuenta?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
