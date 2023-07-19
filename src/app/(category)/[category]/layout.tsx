import Sidebar from "@/components/sidebar/sidebar";

export default function categoryLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Sidebar />
        {children}
      </section>
    )
  }