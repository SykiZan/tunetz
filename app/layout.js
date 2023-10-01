import "./globals.scss";
import { Inter, Montserrat } from "next/font/google";

const monseratt = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monseratt.className}>
        <div className="appWrap">{children}</div>
      </body>
    </html>
  );
}
