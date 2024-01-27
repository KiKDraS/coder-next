import { v4 as uuidv4 } from "uuid";
import { db } from "./firebase.config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";

const usersRef = collection(db, "users");
const favsEndpoint = (userID) => `/users/${userID}/favs`;
const favsRef = (userID) => collection(db, favsEndpoint(userID));

export const getUsers = async () => {
  const snapshot = await getDocs(usersRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addUser = async (user) => {
  const collectionID = uuidv4().replaceAll("-", "");
  await setDoc(doc(db, "users", collectionID), user);
};

export const deleteUser = async (userID) => {
  await deleteDoc(doc(db, "users", userID));
};

export const getUserFavs = async (userID) => {
  const q = query(favsRef(userID));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    _id: doc.id,
    ...doc.data(),
  }));
};

export const addUserFav = async ({ pokemon, userID }) => {
  const collectionID = uuidv4().replaceAll("-", "");
  await setDoc(doc(db, favsEndpoint(userID), collectionID), pokemon);
};

export const deleteUserFav = async ({ userID, pokemonID }) => {
  await deleteDoc(doc(db, favsEndpoint(userID), pokemonID));
};
