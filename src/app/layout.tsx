import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Inter } from "next/font/google";
import { ThemeProvider } from "src/app/_components/theme-provider";
import { extractRouterConfig } from "uploadthing/server";
import "~/styles/globals.css";
import TopNav from "./_components/topnav";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Image Gallery ",
  description: "Coded by Alejandro Perez",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body
          className={`font-sans ${inter.variable} text-slate-950 dark:text-primary`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-auto">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
