import NavBar from '@/components/navbar/navbar';
import './globals.scss';
import { League_Spartan } from 'next/font/google';
import { CheckboxProvider } from '../contexts/CheckboxContext';

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'OutSpeed',
  description: 'Dictionnaire des mouvements de Rocket League',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <CheckboxProvider>
          <NavBar /> 
          {children}
        </CheckboxProvider>
        </body>
    </html>
  )
}