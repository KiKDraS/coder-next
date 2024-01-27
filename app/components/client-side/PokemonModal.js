import Image from "next/image";
import { Modal } from "flowbite-react";
import { useState } from "react";

const PokemonModal = ({
  image,
  name,
  description,
  types,
  stats,
  addToFavs,
  deleteFromFavs,
  fav,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="block text-gray-900 dark:text-white font-medium text-sm text-center pt-0.5"
        onClick={() => setOpenModal(true)}
      >
        Ver más
      </button>

      <Modal
        className="bg-slate-100 dark:bg-slate-800"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="capitalize">{name}</Modal.Header>
        <Modal.Body>
          <div className="p-4 md:p-5 space-y-4  md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg animate-pulse"
                src={image}
                width={100}
                height={200}
                alt={name}
              />
            </div>
            <div className="w-full">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-4">
                <span className="font-bold">Tipos:</span>
                <span>{types.toString()}</span>
              </p>
              {stats.map((stat) => (
                <p
                  key={`${name}-${stat.name}-${stat.base_stat}`}
                  className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-4"
                >
                  <span className="font-bold">{stat.name}:</span>
                  <span>{stat.base_stat}</span>
                </p>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            onClick={() => {
              fav ? deleteFromFavs() : addToFavs();
              setOpenModal(false);
            }}
          >
            {fav ? "Eliminar de favoritos" : "Agregar a favoritos"}
          </button>
          <button
            className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-6 py-3 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => setOpenModal(false)}
          >
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PokemonModal;
