import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { audio } from "~/server/db/schema";
 
const f = createUploadthing();
 
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    audioUploader: f({ "audio": { maxFileSize: "4MB" } })
        .middleware(async ({ req }) => {
            // This code runs on your server before upload
            const user = await auth();
            if (!user.userId) throw new UploadThingError("Unauthorized");
        
            return { userId: user.userId };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            console.log("Upload complete for userId:", metadata.userId);
        
            console.log("file url", file.url);

            await db.insert(audio).values({ 
                name: file.name, 
                url: file.url,
                userId: metadata.userId
            });
        
            // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
            return { uploadedBy: metadata.userId };
        }), 

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;