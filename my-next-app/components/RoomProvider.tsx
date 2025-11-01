"use client"
import React from 'react'
import LiveCursorProvider from './LiveCursorProvider';
import {
  LiveblocksProvider,

  RoomProvider as RoomProviderWrapper,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Spinner } from './ui/spinner';


function RoomProvider({children,roomId}: {children: React.ReactNode,
    roomId:string
}) {
  return (
    <RoomProviderWrapper
      id={roomId}
      initialPresence={{ cursor: null }}>
        <ClientSideSuspense fallback={<Spinner/>}> 
         <LiveCursorProvider>
            {children}
        </LiveCursorProvider>    
        </ClientSideSuspense>
       

    </RoomProviderWrapper>
  )
}

export default RoomProvider