import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Header from "./ui/index/header";
import { CartProvider } from "./lib/cart-context";

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
        <CartProvider>
          <div className="flex flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none">
              <Header />
            </div>
          </div>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
