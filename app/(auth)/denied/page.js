import ErrorPage from "@/app/components/server-side/ErrorPage";
import { APP_IMAGES } from "@/app/constants";

const Denied = () => {
  return (
    <ErrorPage
      imageConfig={{
        img_url: APP_IMAGES.PAGE_403,
        alt: "Página 403",
        width: 200,
        height: 200,
        classes: "mb-8",
      }}
      title="No tienes acceso a esta página"
      text=""
    />
  );
};
export default Denied;
