import { ReactNode } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import { FloatingButtons } from "../components/ui/FloatingButtons";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-gray-900 antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
      <FloatingButtons />
    </div>
  );
}