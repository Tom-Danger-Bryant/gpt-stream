import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
          <div className='flex-grow'>{children}</div>
          <div className='self-center'><Image src={'/skynet-logo.png'}
        width={100}
        height={100}
        alt="skynet logo"/>
        </div>
        </body>

    </html>
  )
}
