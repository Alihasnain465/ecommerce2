import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css"; // <-- sahi path, kyunki globals.css src/app me hai

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}