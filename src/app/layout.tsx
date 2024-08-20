import NavBar from '@/components/navbar/navbar'
import './globals.scss'
import { League_Spartan } from 'next/font/google'
import Footer from '@/components/footer/footer'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'OutSpeed',
  description: 'Bibliothèque des mouvements de Rocket League',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
