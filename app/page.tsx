import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website built with Next.js & Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Navbar />
        <main className="min-h-screen pt-20 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
