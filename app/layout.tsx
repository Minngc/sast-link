import "./globals.scss";
export const metadata = {
  title: "SAST Link",
  description: "OAuth of SAST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
