import {Liveblocks} from "@liveblocks/node";


const key=process.env.LIVE_BLOCK_PRIVATE_KEY as string;

if(!key)
{
    throw new Error("LIVE BLOCK KEY IS MISSING");
}

const liveblocks=new Liveblocks({
    secret:key,
})

export default liveblocks;