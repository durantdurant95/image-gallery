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
          className={`font-sans ${inter.variable} duration-20 flex flex-col gap-4 text-slate-950 transition-colors dark:text-primary`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopNav />
            {children}
            {modal}
            <div id="modal-root" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
