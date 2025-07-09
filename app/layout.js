import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "मातृत्व साथी",
  description: "गर्भावस्था, प्रसव और बच्चे की देखभाल में मदद के लिए एक सहायक ऐप।",
  openGraph: {
    title: "मातृत्व साथी",
    description: "AI दीदी से पूछें – माताओं के लिए एक डिजिटल सहारा।",
    images: ["/women.jpg"], // Add this image to /public folder
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
