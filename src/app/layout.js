import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guardar Reportes en Drive',
  description: 'Reportes de llamadas para guardar en Google Drive',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-500`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
