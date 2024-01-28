import Image from "next/image";
import { APP_IMAGES } from "../../constants";

const Logo = ({ width, height, classes = "" }) => {
  return (
    <Image
      src={APP_IMAGES.LOGO}
      alt="Logo"
      width={width}
      height={height}
      className={classes}
    />
  );
};
export default Logo;
