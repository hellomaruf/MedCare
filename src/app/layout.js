
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AuthProvider from "./services/AuthProvider";

const poppins = Poppins({weight:['100','200','300','400','500','600','700','800'], subsets: ["latin"] });

export const metadata = {
  title: "MedCare",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='medcareTheme'>
      <body className={poppins.className}>

        <AuthProvider>
        <Navbar/>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
