"use server";

const FormButton = ({ text }) => {
  return (
    <div className="mt-6">
      <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        {text}
      </button>
    </div>
  );
};
export default FormButton;
