"use client";

import Link from "next/link";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "О нас", href: "/about" },
  {
    name: "Техническое обслуживание",
    href: "/maintenance",
  },
  {
    name: "Ремонт автомобиля",
    href: "/repair",
  },
  {
    name: "Диагностика автомобиля",
    href: "/diagnostics",
  },
  {
    name: "Робомойка",
    href: "/carwash",
  },
  {
    name: "Акции",
    href: "/promotions",
  },
  {
    name: "Склад",
    href: "/",
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex grow items-center justify-center p-10 text-sm text-sky-50 font-medium hover:bg-orange-600 md:flex-none md:justify-start md:p-5 md:px-3"
            )}
          >
            <p className="md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
