import UserFavsList from "@/app/components/client-side/UserFavsList";
import { headers } from "next/headers";

const getFavs = async () => {
  const favs = await fetch(`${process.env.NEXTAUTH_URL}/api/favs`, {
    method: "GET",
    headers: headers(),
    next: { tags: ["favs"] },
  });

  if (!favs.ok) throw new Error("Error fetching Favorites list");

  return await favs.json();
};

const Favorites = async () => {
  const favorites = await getFavs();

  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="py-8 px-4 mx-auto max-w-screen-xl max-h-screen lg:py-16 lg:px-6 overflow-hidden h-[85vh]">
        <div className="mx-auto text-center overflow-hidden">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Pokemons favoritos
          </h2>
          <p className="font-light text-gray-500 mb-4 sm:text-xl dark:text-gray-400">
            Aquí encontrarás todos los Pokemon que seleccionaste
          </p>
        </div>
        <UserFavsList pokemons={favorites} />
      </div>
    </section>
  );
};
export default Favorites;
