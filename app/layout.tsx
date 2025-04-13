import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Header from "./ui/index/header";

export const metadata: Metadata = {
  title: {
    template: "%s | АйБолид",
    default: "АйБолид",
  },
  description: "Сервис с поиском лучших запчастей, по самым лучшим ценам",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none">
            <Header />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
