import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Sora,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});
