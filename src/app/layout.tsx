import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: ":shrug:",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/shrug.ico" }],
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div> :shrug: </div>
      <div> Sign in </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
