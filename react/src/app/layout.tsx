import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev TypeScript Tutorial",
  description: "Learn TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
