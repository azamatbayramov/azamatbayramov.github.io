import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./global.css";

export const metadata: Metadata = {
    title: "Azamat Bayramov | Backend Engineer",
    description:
        "Portfolio of Azamat Bayramov: Go, Python, backend systems, integrations, and product engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
