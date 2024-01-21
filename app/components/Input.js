"use client";

const Input = ({ icon, type, placeholder, name, id, form, setForm }) => {
  const handleChange = ({ target: { value, id } }) =>
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));

  return (
    <div className="relative flex items-center mt-6">
      {icon}

      <input
        type={type}
        className={
          "block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        }
        placeholder={placeholder}
        name={name}
        id={id}
        value={form[id] || ""}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
