import Sidebar from '@/components/sidebar/sidebar'
import style from './page.module.scss'

export default function categoryLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className={style.layout}>
      <Sidebar />
      <div className={style.layoutContent}>{children}</div>
    </section>
  )
}
