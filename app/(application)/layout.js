import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import { ROUTES } from "../constants";
import {
  DashboardIcon,
  FavIcon,
  HamburgerIcon,
  SignOutIcon,
  SignOutMiniIcon,
  UsersIcon,
} from "../utils/icons";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function HomeLayout({ children }) {
  const session = await getServerSession(authOptions);

  const {
    user: { name, email, image, role },
  } = session;

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                {HamburgerIcon()}
              </button>
              <Link href={ROUTES.HOME_PAGE} className="flex ms-2 md:me-24">
                <Logo width={140} height={60} classes="ps-2" />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 dark:bg-gray-200 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={image}
                      alt="icono usuario"
                      width={96}
                      height={96}
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {name}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      {email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <NavLink
                        icon={SignOutMiniIcon()}
                        text="Salir"
                        url="/api/auth/signout"
                        classes="text-sm"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="relative h-full px-3 pb-4 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                icon={DashboardIcon()}
                text="Listado completo"
                url={ROUTES.HOME_PAGE}
              />
            </li>
            <li>
              <NavLink
                icon={FavIcon()}
                text="Favoritos"
                url={ROUTES.FAV_PAGE}
              />
            </li>
            {role === "admin" && (
              <li>
                <NavLink
                  icon={UsersIcon()}
                  text="Usuarios"
                  url={ROUTES.USERS_PAGE}
                />
              </li>
            )}
            <li className="absolute bottom-0 pb-4">
              <NavLink
                icon={SignOutIcon()}
                text="Salir"
                url="/api/auth/signout"
              />
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 h-full bg-slate-100 dark:bg-gray-700 sm:ml-64 overflow-hidden">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </>
  );
}
