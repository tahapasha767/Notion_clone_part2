"use client";
import React, { use, useState } from 'react'
import NewDocumentButton from './NewDocumentButton';
import {useCollection} from 'react-firebase-hooks/firestore'
import {db} from '../firebase'
import {collectionGroup,query,orderBy,where, getDocs} from 'firebase/firestore'
import { useUser } from '@clerk/clerk-react';
import { Spinner } from './ui/spinner';
import Sidebaroptions from './Sidebaroptions';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SheetDemo } from './Slider';
import { useEffect } from 'react';
import { Button } from './ui/button';
function Sidebar() {
    interface RoomData{
        roomId:string,
        userId:string,
        role:"owner" | "editor",
        createdAt:Date
        
    }
    const[rooms,setRooms]=useState<
    {
        owner:RoomData[],
        editor:RoomData[]
    }>({owner:[],
        editor:[]
    });//this is to set the state of rooms once the data has been updated 
   
    const {user}=useUser();
    //  console.log(user?.emailAddresses[0])
    // const [data,loding,error]=useCollection(
    //     user&&query(collectionGroup(db,'rooms'),where('userId','==',user.emailAddresses[0].toString()))


    //     )
    //     if(!loding&&data)
    //     {
    //         console.log(data,"hi")
    //     }
    
//   const roomRef = collectionGroup(db, 'rooms');

//   const [data, loading, error] = useCollection(
//     user ? query(roomRef, where('userId', '==', user?.emailAddresses?.[0]?.toString())) : roomRef
//   );

//   if (!loading && data)
//   {

//     console.log(data?.docs[0], "hi")
//   }
const roomRef=collectionGroup(db,'rooms');
const[data,loading,error]=useCollection(
    user?query(roomRef,where('userId','==',user?.emailAddresses?.[0]?.toString())):roomRef

)
useEffect(()=>{
    if(!loading&&data)
    {
        const groupedRooms=data.docs.reduce<{
            owner:RoomData[],
            editor:RoomData[]
        }>((acc,curr)=>{
            const currRoomData=curr.data() as RoomData;
            if(currRoomData.role==="owner")
            {
                acc.owner.push(currRoomData);
            }
            else{
                acc.editor.push(currRoomData);
            }
            return acc;
        },{owner:[],editor:[]})

        // update local state with grouped rooms (owners first, then editors)
        setRooms(groupedRooms);
    }

},[data, loading])


   
    const menuOptions=(
       <>
       <div className='flex flex-col gap-3'>
       <NewDocumentButton/>
      
       {
        <div className='text-gray-600'>My Documents</div>
       }
        {
       loading&&<div className='flex justify-center'><Spinner className='text-blue-600' /></div>
       }
       {
        !loading&&rooms.owner.map((room)=>(
            // <Button className='bg-white text-black border-2 rounded-none cursor-pointer hover:text-white my-2 hover:bg-blue-500' key={room?.roomId}>{room?.roomId} </Button>
            <Sidebaroptions key={room?.roomId} id={room?.roomId} href={`/docs/${room?.roomId}`} />
        ))
       }
       </div>
       </>
    )
  return (
    <div className='p-5'>
        <div className='hidden md:inline-flex'>
        {menuOptions}
         </div>
         <div className='inline-flex md:hidden'>
           <SheetDemo menuOptions={menuOptions} />
            </div>
    </div>
  )
}

export default Sidebar