import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/Store/Provider";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from "next/head";

const poppin = Poppins({
  weight: ["100", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head><link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body
        className={
          ""
          // poppin.className
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
