import Link from "next/link";
import { db } from "~/server/db";

//force dynamic for if I want to make sure the page isn't cached (it uses the db)
export const dynamic = "auto";

export default async function HomePage() {
  const audioFiles = await db.query.audio.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

  console.log(audioFiles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center">
        {audioFiles.map((a, index) => 
          <div key={index}>{a.name}</div>
        )}
      </div>
    </main>
  );
}
