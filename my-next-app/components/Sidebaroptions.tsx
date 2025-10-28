"use client";
import React from "react";
import Link from "next/link";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { usePathname } from "next/navigation";

function Sidebaroptions({
  href,
  id,
}: {
  href: string;
  id: string;
}) {
  const [data, loading, error] = useDocument(doc(db, "documents", id));
  const pathname = usePathname();

  const isActive = pathname === href;

  if (!data) return null;

  return (
    <Link
      href={href}
      className={`border-2 px-3 py-2 rounded-2xl cursor-pointer flex justify-center transition-all duration-200
        ${isActive ? "bg-black text-white border-black" : "hover:bg-gray-700 hover:text-white text-gray-800"}
      `}
    >
      <p className="truncate max-w-[120px] text-center">
        {data.data()?.title || "Untitled"}
      </p>
    </Link>
  );
}

export default Sidebaroptions;
