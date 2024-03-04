import './globals.scss'
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'OutSpeed',
  description: 'Bibliothèque des mouvements de Rocket League',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  )
}
