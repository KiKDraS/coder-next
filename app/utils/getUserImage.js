import { USER_IMAGES } from "../constants";

export const getUserImage = () => {
  const i = Math.round(Math.random(0, USER_IMAGES.length));
  return USER_IMAGES[i];
};
