import './globals.css'
import type { Metadata } from 'next'
import {Nunito} from 'next/font/google'
import SharedLayout from './layout/RootLayout'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code-editor',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <SharedLayout>
            <div className="page-content">{children}</div>
        </SharedLayout>
        </body>
    </html>
  )
}
