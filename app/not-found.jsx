import { APP_IMAGES } from "./constants";
import ErrorPage from "./components/server-side/ErrorPage";

const NotFound = () => {
  return (
    <ErrorPage
      imageConfig={{
        img_url: APP_IMAGES.PAGE_404,
        alt: "Página 404",
        width: 500,
        height: 400,
      }}
      title="Hubo un problema"
      text="No pudimos encontrar la página que estás buscando."
    />
  );
};
export default NotFound;
