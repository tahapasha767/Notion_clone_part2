"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "@/firebase-admin";
import { title } from "process";

export async function LogSessionClaims() {
  const session =await  auth();
  const{sessionClaims}=await auth();

  if (!session) {
    console.log("❌ No active session (user not signed in)");
    return;
  }
  const docCollectionRef=adminDb.collection("documents");
  const docRef=await docCollectionRef.add({
    title:"New Doc",
  });
  await adminDb.collection("users").doc(sessionClaims?.email as string).collection("rooms").doc(docRef.id).set({
     userId: sessionClaims?.email,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
  });

  // Log all session claims
  console.log("✅ Session claims:",  session.sessionClaims);

  // You can also access specific claim values
 
  return {docId:docRef.id};
}
