import { ENDPOINTS, ROUTES } from "@/app/constants";
import { signIn, signOut } from "next-auth/react";
import { addUser, getUsers } from "./db.config";
import { getUserImage } from "@/app/utils/getUserImage";

export const frontApi = async ({ endpoint, data }) => {
  switch (endpoint) {
    case ENDPOINTS.GET_USERS: {
      return await getUsers();
    }

    case ENDPOINTS.CREATE_USER: {
      const { username, email, pass } = data;
      const image = getUserImage();
      const user = { username, email, pass, image, role: "user" };
      await addUser(user);
      signIn("credentials", { ...user, callbackUrl: ROUTES.HOME_PAGE });
      break;
    }

    case ENDPOINTS.AUTH_USER: {
      signIn("credentials", { ...data, callbackUrl: ROUTES.HOME_PAGE });
      break;
    }

    case ENDPOINTS.LOGOUT: {
      signOut({ callbackUrl: ROUTES.SIGN_IN_PAGE });
      break;
    }

    default:
      break;
  }
};
