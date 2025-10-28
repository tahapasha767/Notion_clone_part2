"use client";

import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { LogSessionClaims } from "@/actions/CreateNewDocument";
import { useRouter } from "next/navigation";
type SessionClaims = {
  docId: string;
};
function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
     const {docId}=await LogSessionClaims() as SessionClaims;
      router.push(`/docs/${docId}`);
    
    });
  };

  return (
    <Button
      onClick={handleCreateNewDocument}
      disabled={isPending}
      className="w-full px-10 mb-2 rounded-none rounded-tr-lg rounded-br-lg bg-black text-white cursor-pointer hover:scale-105"
    >
      {isPending ? "Creating..." : "+ New Document"}
      {
        
      }
    </Button>
  );
}

export default NewDocumentButton;
