import { QuizProvider } from "@/context/QuizContext";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QuizProvider>
         {children}
        </QuizProvider>
      </body>
    </html>
  );
}
