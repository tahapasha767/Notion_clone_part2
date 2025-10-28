import React from 'react'
import Link from 'next/link'
import { useDocument } from 'react-firebase-hooks/firestore'
import {doc} from 'firebase/firestore'
import { db } from '../firebase'
import { usePathname } from 'next/navigation'

function Sidebaroptions({href,id}
    :{href:string,id:string}
) {
    
    const[data,loading,error]=useDocument(
        doc(db,'documents',id)

    )
    const pathname=usePathname();
    const isActive=href.includes(pathname) &&pathname!=="/";
    if(!data)
    {
        return null;
    }
  return (
    <Link href={href} className='border-2 p-2 rounded-4xl cursor-pointer flex justify-center hover:bg-gray-700 hover:text-white'>
        <p className='truncate'>{data.data()?.title}</p>
    </Link>
  )
}

export default Sidebaroptions