
import React, { use } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'
import { useDocument } from 'react-firebase-hooks/firestore'
import { doc } from 'firebase/firestore'
import { db } from '../firebase'
import { Spinner } from './ui/spinner'
import { useEffect } from 'react'
import { useTransition } from 'react'
import { updateDoc } from 'firebase/firestore'

function Document({id}:{id:string}) {
    const[title,setTitle]=useState('');
    const [isPending,startTransition]=useTransition();

    const [data,loading,error]=useDocument(
        doc(db,"documents",id)
    
      )
    useEffect(()=>{
        if(!data)
        {
            return;
        }
        setTitle(data?.data()?.title);

    },[data])


const UpdateTheTitle=async(e:React.FormEvent)=>{
    e.preventDefault();
    if(title.trim().length===0)
    {
        return;
    }

    startTransition(async()=>{
        const docRef=doc(db,"documents",id);
        await updateDoc(docRef,{
            title:title.trim()
        })

    })
}


      if(loading)
      {
        return <Spinner/>;
      }
  return (
    <div className='bg-white w-full h-screen border-16 border-gray-100 '>
       <form className='p-4 px-16 flex' onSubmit={UpdateTheTitle}>
        <Input placeholder='Enter Title' value={title} onChange={(e)=>{
            setTitle(e.target.value);

        }}></Input>
        <Button className='bg-black text-white ml-4 cursor-pointer'>{
         isPending?'Updating...':'Update Title'
            }</Button>
       </form>
    </div>
  )
}

export default Document