import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
