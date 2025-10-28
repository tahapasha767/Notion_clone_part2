
"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowLeftCircle } from "lucide-react";
export default function Home() {
  return (
    <div className="">
      <main className="flex text-xl gap-4 p-5 animate-pulse items-center">
        <ArrowLeftCircle size={30}/>
       <div> Get started with creating a New Document</div>
        </main>
    
  
    </div>
  );
}
