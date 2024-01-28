import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import NavBar from "../components/server-side/NavBar";
import SideBar from "../components/server-side/SideBar";

export default async function HomeLayout({ children }) {
  const session = await getServerSession(authOptions);

  const {
    user: { name, email, image, role },
  } = session;

  return (
    <>
      <NavBar image={image} name={name} email={email} />

      <SideBar role={role} />

      <div className="p-4 bg-slate-200 dark:bg-gray-700 sm:ml-64 overflow-hidden height">
        <div className="p-4">{children}</div>
      </div>
    </>
  );
}
