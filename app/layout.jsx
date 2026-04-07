import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "PRAVEEN | DEV",
    description: "Innovative Tech Solutions",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
