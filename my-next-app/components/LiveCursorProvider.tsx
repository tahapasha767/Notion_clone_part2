'use client';
import React from 'react'
import { useMyPresence,useOthers } from '@liveblocks/react';
import FollowPointer from './FollowPointer';
function LiveCursorProvider({children}:{children:React.ReactNode}) {
    const [myPresence, setMyPresence] = useMyPresence();
    const others = useOthers();
    function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
        const cursor={
            x:Math.floor(event.pageX),
            y:Math.floor(event.pageY)
        }
        setMyPresence({cursor});
    }
    function handlePointerLeave() {
        setMyPresence({cursor:null});   
    }
  return (
    <div
    onPointerMove={handlePointerMove}
    onPointerLeave={handlePointerLeave}
     >
        {
        others.filter((other)=>other.presence.cursor!=null)
        .map(({connectionId, presence,info})=>(
            <FollowPointer key={connectionId}
            info={info}
            x={presence.cursor!.x}
            y={presence.cursor!.y}
            />

        ))
    }
   {
        children
   }

    </div>
  )
}

export default LiveCursorProvider