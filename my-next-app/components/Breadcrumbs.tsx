import Link from "next/link"
import { SlashIcon } from "lucide-react"
import { usePathname } from "next/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import path from "path";

export function BreadcrumbWithCustomSeparator() {
    const pathname=usePathname();
    const doc_id=pathname.slice(pathname.lastIndexOf('/')+1);
    console.log(doc_id)
    console.log(pathname)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/components">Docs</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
       <BreadcrumbSeparator>
         {doc_id.length!==0&&<SlashIcon />}
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{doc_id.length!==0?doc_id:""}</BreadcrumbPage>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadcrumbWithCustomSeparator