import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SPLMNS Frontend Assessment",
  description: "SPLMNS Frontend Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full flex flex-col gap-6 p-3 md:p-6">
            <SidebarTrigger />
            <div>{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
