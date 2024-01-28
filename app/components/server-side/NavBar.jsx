import Logo from "./Logo";
import Link from "next/link";
import {
  DarkThemeToggle,
  Avatar,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { ROUTES } from "@/app/constants";
import { SignOutMiniIcon } from "@/app/utils/icons";

export default function NavBar({ image, name, email }) {
  return (
    <Navbar fluid rounded className="relative z-50">
      <div className="flex items-center">
        <DarkThemeToggle />
        <NavbarBrand href={ROUTES.HOME_PAGE} className="flex ms-1 md:me-24">
          <Logo width={140} height={60} classes="ps-2" />
        </NavbarBrand>
      </div>
      <div className="flex md:order-2 gap-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="icono usuario" img={image} rounded />}
        >
          <DropdownHeader className="z-50 text-base list-none bg-white dark:bg-gray-700 dark:divide-gray-600 me-3">
            <span className="block text-sm font-bold uppercase">{name}</span>
            <span className="block truncate text-sm font-medium">{email}</span>
          </DropdownHeader>
          <DropdownItem className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            <Link
              href="/api/auth/signout"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 group text-sm"
            >
              {SignOutMiniIcon(
                "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              )}
              <span className="flex-1 ms-3 whitespace-nowrap">Salir</span>
            </Link>
          </DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="md:hidden">
        <NavbarLink href={ROUTES.HOME_PAGE}>Listado completo</NavbarLink>
        <NavbarLink href={ROUTES.FAV_PAGE}>Favoritos</NavbarLink>
        <NavbarLink href={ROUTES.USERS_PAGE}>Usuarios</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
