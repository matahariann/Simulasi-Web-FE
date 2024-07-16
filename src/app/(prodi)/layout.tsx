import Sidebar from "@/components/sidebar";
import React from "react";
import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import MarginWidthWrapper from "@/components/margin-with-wrapper";

type Props = {
  children: React.ReactNode;
};

export default function LayoutProtected({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}