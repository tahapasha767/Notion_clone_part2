"use server";
import { adminDb } from "@/firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import liveblocks from "@/lib/liveblock";
import { CollectionGroup } from "firebase-admin/firestore";
import { where } from "firebase/firestore";


export async function POST(req:NextRequest)
{
    const {sessionClaims}=await auth();
    //console.log("Auth Endpoint called",sessionClaims);
    const {room}=await req.json();
    console.log("Room ID:",room);
    const session=liveblocks.prepareSession(
        sessionClaims?.email as string,
        {
            userInfo:{
                name:sessionClaims?.last_name as string,
                email:sessionClaims?.email as string,
                avatar:sessionClaims?.profile_image_url as string,
            }
        }
    )
    const all_rooms_of_user=await adminDb.collectionGroup("rooms")
    .where("userId","==",sessionClaims?.email as string).get();
    const user_in_room=all_rooms_of_user.docs.find((doc)=>
         doc.data().roomId===room
    );
    if(user_in_room)
    {
        session.allow(room,session.FULL_ACCESS)
        console.log("You are Authorizsed")
        const {body,status}=await session.authorize();
        return new NextResponse(body,{status});
    }
    else{
        return NextResponse.json({
            message:"You are not in this room "
        },{
            status:403
        })
    }
     
}

