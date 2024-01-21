import Image from "next/image";
import Link from "next/link";
import FormNavigation from "../../components/FormNavigation";
import Form from "../../components/Form";
import Input from "../../components/Input";
import {
  inputEmailIcon,
  inputPasswordIcon,
  inputUserIcon,
} from "../../utils/icons";
import FormButton from "../../components/FormButton";
import { ENDPOINTS, ROUTES } from "../../constants";

const SignUp = () => {
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

          <Form endpoint={ENDPOINTS.CREATE_USER}>
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
                href={ROUTES.SIGN_IN}
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
