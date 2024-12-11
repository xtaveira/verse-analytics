import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Verse Analytics",
  description: "Made by xtaveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col h-svh w-full bg-background">
            <Navbar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
