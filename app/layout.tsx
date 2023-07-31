import './globals.css'
import type { Metadata } from 'next'
import { Inter,Blaka } from 'next/font/google'
import NavBar from './(Users)/NavBar/components/NavBar'


import { ClerkProvider } from '@clerk/nextjs'

const inter =Blaka ({
  subsets: ['latin'],
  weight: '400'
})

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

    <ClerkProvider>
    <html lang="en">
      <body className='flex bg-black' >
        <NavBar/>
        <div className="w-full mt-16" >
        {children}
        </div>
       
        </body>
    </html>

    </ClerkProvider>
  )
}
