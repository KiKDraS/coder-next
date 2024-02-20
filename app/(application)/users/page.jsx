import UsersTable from "@/app/components/client-side/UsersTable";
import Spinner from "@/app/components/server-side/Spinner";
import { Suspense } from "react";

const getUsers = async () => {
  "use server";

  const users = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/users`,
    {
      method: "GET",
      next: { tags: ["users"] },
    }
  );

  if (!users.ok) throw new Error("Error fetching users");

  return await users.json();
};

const Users = async () => {
  const users = await getUsers();

  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="py-8 px-4 mx-auto max-w-screen-xl max-h-screen lg:py-16 lg:px-6 overflow-hidden h-[85vh]">
        <div className="mx-auto text-center overflow-hidden">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Lista de usuarios
          </h2>
          <p className="font-light text-gray-500 mb-4 sm:text-xl dark:text-gray-400">
            Usa esta sección para revocar el acceso de los usuarios
          </p>
        </div>
        <Suspense
          fallback={
            <Spinner classes="h-full w-full bg-white dark:bg-gray-900 flex items-center justify-center" />
          }
        >
          <UsersTable users={users} />
        </Suspense>
      </div>
    </section>
  );
};
export default Users;
