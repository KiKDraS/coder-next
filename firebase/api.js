import { ENDPOINTS } from "@/app/constants";
import { signIn } from "next-auth/react";
import {
  addUser,
  addUserFav,
  deleteUser,
  deleteUserFav,
  getUserFavs,
  getUsers,
} from "./db.config";

export const api = async ({ endpoint, data }) => {
  switch (endpoint) {
    case ENDPOINTS.GET_USERS: {
      return await getUsers();
    }

    case ENDPOINTS.CREATE_USER: {
      const { username, email, pass } = data;
      return await addUser({ username, email, pass, role: "user" });
    }

    case ENDPOINTS.DELETE_USER: {
      const { id } = data;
      return await deleteUser(id);
    }

    case ENDPOINTS.GET_USER_FAVS: {
      const { id } = data;
      return await getUserFavs(id);
    }

    case ENDPOINTS.ADD_USER_FAV: {
      const { image_url, name, type, userID } = data;
      const pokemon = { image_url, name, type };
      return await addUserFav({ pokemon, userID });
    }

    case ENDPOINTS.DELETE_USER_FAV: {
      const { userID, pokemonID } = data;
      return await deleteUserFav({ userID, pokemonID });
    }

    case ENDPOINTS.AUTH_USER: {
      signIn("credentials", data);
      break;
    }

    default:
      break;
  }
};
