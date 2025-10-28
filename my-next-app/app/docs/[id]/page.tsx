"use client";
import React from "react";
import Document from "@/components/Document";

type DocumentPageProps = {
  params: Promise<{ id: string }>; // 👈 params is a Promise now
};

export default function DocumentPage({ params }: DocumentPageProps) {
  const { id } = React.use(params); // 👈 unwrap the promise using React.use()
  
  return (
    <div className="flex flex-col flex-1 min-h-screen">
     <Document id={id}/>
    </div>
  );
}
