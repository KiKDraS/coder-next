"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ icon, url, text, classes = "" }) => {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${classes} ${
        pathname === url && "bg-gray-100 dark:bg-gray-700"
      }`}
    >
      {icon}
      <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
    </Link>
  );
};
export default NavLink;
