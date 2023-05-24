import "@/styles/tailwind.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  // @がついたファイルは条件に応じて使ったりする

  // 例 const isLogin = useLogin();
  // return {user}

  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        {modal}
      </body>
    </html>
  );
}
