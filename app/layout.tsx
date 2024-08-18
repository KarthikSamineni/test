import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LAS Viewer',
  description: 'Upload and view LAS files in your browser',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">LAS Viewer</h1>
          </div>
        </nav>
        <main className="container mx-auto mt-8">
          {children}
        </main>
      </body>
    </html>
  );
}
