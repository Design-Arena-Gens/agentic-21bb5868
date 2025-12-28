import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Codex | Your Autonomous Web Copilot",
  description:
    "Discover what Agent Codex can craft for you—web apps, automations, and intelligent solutions delivered autonomously."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
