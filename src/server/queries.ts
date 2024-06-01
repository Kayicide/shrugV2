import { auth } from "@clerk/nextjs/server";
import "server-only"
import { db } from "./db";


const audioFiles = await db.query.audio.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });


  export async function getMyAudioFiles() {
    const user = auth();

    if(!user.userId) throw new Error("Unauthorized");
    
    const audioFiles = await db.query.audio.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id)
    });

    return audioFiles
  }