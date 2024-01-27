import Logo from "./Logo";
import NavLink from "../client-side/NavLink";
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
      <NavbarBrand href={ROUTES.HOME_PAGE} className="flex gap-1 ms-2 md:me-24">
        <DarkThemeToggle />
        <Logo width={140} height={60} classes="ps-2" />
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="icono usuario" img={image} rounded />}
        >
          <DropdownHeader className="z-50 text-base list-none bg-white rounded shadow dark:bg-gray-700 dark:divide-gray-600 me-3">
            <span className="block text-sm font-bold uppercase">{name}</span>
            <span className="block truncate text-sm font-medium">{email}</span>
          </DropdownHeader>
          <DropdownItem>
            <NavLink
              icon={SignOutMiniIcon()}
              text="Salir"
              url="/api/auth/signout"
              classes="text-sm"
            />
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
