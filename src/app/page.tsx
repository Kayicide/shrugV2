import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyAudioFiles } from "~/server/queries";
import { UploadButton } from "~/utils/uploadthing";

//force dynamic for if I want to make sure the page isn't cached (it uses the db)
export const dynamic = "auto";

export default async function HomePage() {
  const audioFiles = await getMyAudioFiles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center">
        <SignedIn>
          <UploadButton endpoint="audioUploader"></UploadButton>
            {audioFiles.map((a) => 
              <div key={a.id}>{a.name}</div>
            )}
        </SignedIn>
      </div>
    </main>
  );
}
