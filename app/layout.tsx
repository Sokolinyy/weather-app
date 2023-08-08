import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Providers from "@/redux/Provider";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather outdoor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1485809069980-bdd865d520ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
