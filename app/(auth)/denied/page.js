import ErrorPage from "@/app/components/ErrorPage";
import { APP_IMAGES } from "@/app/constants";

const Denied = () => {
  return (
    <ErrorPage
      imageConfig={{
        img_url: APP_IMAGES.PAGE_403,
        alt: "Página 403",
        width: 500,
        height: 500,
      }}
      title="Hubo un problema"
      text="No pudimos encontrar la página que estás buscando."
    />
  );
};
export default Denied;
