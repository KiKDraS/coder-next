import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "../constants";

const ErrorPage = ({ imageConfig, title, text }) => {
  const { img_url, alt, width, height } = imageConfig;

  return (
    <section className="bg-white h-full dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image
            src={img_url}
            alt={alt}
            width={width}
            height={height}
            className="mx-auto"
          />
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {title}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {text}
          </p>
          <Link
            href={ROUTES.HOME_PAGE}
            className="inline-flex text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Volver a la página principal
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
