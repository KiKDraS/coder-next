import Image from "next/image";

const Logo = ({ width, height, classes = "" }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={width}
      height={height}
      className={classes}
    />
  );
};
export default Logo;
