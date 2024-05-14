import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Theme } from "@/providers/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import ToasterContext from "@/context/ToasterContext";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300","400","500", "700"],
});

export const metadata: Metadata = {
  title: "Kanbanize",
  description: "Personal Kanban board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className}`}>
        <Theme>
         <ToasterContext  />
          <Navbar />
          <NextTopLoader />
           {children}
           <Footer /> 
          </Theme>
      </body>
    </html>
    </ClerkProvider>
  
    
  );
}
