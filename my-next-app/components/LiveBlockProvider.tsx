"use client";

import React from 'react'
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

function LiveBlockProvider({children}: {children: React.ReactNode}) {
    if(!process.env.NEXT_PUBLIC_LIVE_BLOCK_KEY){
        throw new Error("LIVE BLOCK KEY IS MISSING");
    }
  return (
    <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpoint"}>
        {children}
    </LiveblocksProvider>
  )
}

export default LiveBlockProvider