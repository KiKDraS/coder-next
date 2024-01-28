import { ROUTES } from "@/app/constants";
import NavLink from "../client-side/NavLink";
import {
  DashboardIcon,
  FavIcon,
  SignOutIcon,
  UsersIcon,
} from "@/app/utils/icons";

const SideBar = ({ role }) => {
  return (
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
            <NavLink icon={FavIcon()} text="Favoritos" url={ROUTES.FAV_PAGE} />
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
  );
};
export default SideBar;
