import Sidebar from "@/components/docs/Sidebar";
import MobileDocsMenu from "@/components/docs/MobileDocsMenu";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-[1400px] mx-auto px-6 py-4 md:px-10">
        <MobileDocsMenu />
      </div>

      <div className="relative">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <main className="flex-1 min-h-screen bg-dark px-6 py-6 md:px-10 md:py-10 md:ml-60 lg:px-16">
          {children}
        </main>
      </div>
    </div>
  );
}
