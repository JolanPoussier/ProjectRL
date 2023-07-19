import Sidebar from "@/components/sidebar/sidebar";
import style from "./page.module.scss";

export default function categoryLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className={style.layout}>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Sidebar />
        {children}
      </section>
    )
  }