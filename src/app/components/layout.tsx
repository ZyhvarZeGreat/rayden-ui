import Sidebar from "@/components/docs/Sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-60 flex-1 min-h-screen bg-dark px-10 py-10 lg:px-16">
        {children}
      </main>
    </div>
  );
}
