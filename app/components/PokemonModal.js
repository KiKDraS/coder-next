import Image from "next/image";

const PokemonModal = ({
  image,
  name,
  description,
  types,
  stats,
  addToFavs,
}) => {
  return (
    <>
      <button
        data-modal-target={`${name}-modal`}
        data-modal-toggle={`${name}-modal`}
        className="block dark:text-white font-medium text-sm text-center pt-0.5"
        type="button"
      >
        Ver más
      </button>

      <div
        id={`${name}-modal`}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full bg-slate-100 dark:bg-slate-800"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                {name}
              </h3>
            </div>
            {/* <!-- Modal body --> */}
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
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide={`${name}-modal`}
                type="button"
                className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                onClick={addToFavs}
              >
                Agregar a favoritos
              </button>
              <button
                data-modal-hide={`${name}-modal`}
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-6 py-3 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PokemonModal;
