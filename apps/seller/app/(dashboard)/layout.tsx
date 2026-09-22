import type { Metadata } from "next";
import { SidebarProvider } from "@repo/ui/components/ui/sidebar";
import { DashboardSidebar } from "@/layouts/dash-sidebar";

export const metadata: Metadata = {
  title: "Pager - seller",
  description: "Professional book store",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col w-full h-screen overflow-hidden bg-[#FAF8F5]">
        <div className="flex-1 overflow-auto p-6"> 
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}