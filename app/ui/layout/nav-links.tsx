"use client";

import { Links } from "@/app/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks( { links }: { links: Links[] }) {
  const pathname = usePathname();

  return (
    <li>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex w-32 rounded-md bg-gray-50 text-sm hover:bg-sky-100 hover:text-blue-600 p-2 justify-start gap-2 items-center",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </li>
  );
}
