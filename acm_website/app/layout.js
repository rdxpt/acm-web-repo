import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar";
import Background from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ACM-USAR",
  icons: {
    icon: "/acm_favicon.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <Background />

        {/* <div className="fixed -z-50 inset-0">
          <div className="absolute left-0 bottom-0 w-[35%] h-[35%] bg-gradient-to-tr from-[#290A76] via-[#1F42E3] to-[#FF99E3] blur-[100px] rounded-full"></div>
          <div className="absolute right-0 top-[7rem] w-[34%] h-[38%] bg-gradient-to-tr from-[#290A76] via-[#1F42E3] to-[#FF99E3] blur-[100px] rounded-full"></div>
        </div> */}

        {children}
      </body>
    </html>
  );
}
