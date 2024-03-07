import Image from "next/image";
import { FavIcon } from "../../utils/icons";
import PokemonModal from "./PokemonModal";
import { useState } from "react";

const addToFavs = async (pokemon, setFav) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/api/favs`, {
    method: "POST",
    body: JSON.stringify(pokemon),
  });

  if (!res.ok) throw new Error("Error adding fav");

  setFav(() => pokemon);
};

const deleteFromFavs = async (id, setFav) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/api/favs`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });

  if (!res.ok) throw new Error("Error deleting fav");

  setFav(() => undefined);
};

const PokemonCard = ({ pokemon, isFav, list = [], setList = null }) => {
  const { image, name, description } = pokemon;
  const [fav, setFav] = useState(isFav);

  const handleDelete = async (id, setFav) => {
    debugger;
    if (list) {
      await deleteFromFavs(id, setFav);
      setList((prev) => prev.filter((pokemon) => pokemon._id !== id));
    } else await deleteFromFavs(id, setFav);
  };

  return (
    <div className="items-center bg-slate-200 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
        src={image}
        width={200}
        height={300}
        alt={name}
      />
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          {name}
        </h3>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <ul className="flex space-x-4 sm:mt-0 items-center">
          <li className="h-5">
            <button
              onClick={() =>
                fav ? handleDelete(fav._id, setFav) : addToFavs(pokemon, setFav)
              }
            >
              {FavIcon(
                fav
                  ? "text-yellow-400 hover:text-gray-400"
                  : "text-gray-400 hover:text-yellow-400"
              )}
            </button>
          </li>
          <li className="h-5">
            <PokemonModal
              {...pokemon}
              addToFavs={() => addToFavs(pokemon, setFav)}
              deleteFromFavs={() => handleDelete(fav._id, setFav)}
              fav={fav}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PokemonCard;
