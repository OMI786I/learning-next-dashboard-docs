import { Inter } from "next/font/google";
import { Lusitana as LusitanaFont } from "next/font/google"; // Rename the imported function

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = LusitanaFont({
  subsets: ["latin"],
  weight: ["400", "700"],
});
