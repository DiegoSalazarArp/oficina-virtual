import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import ModalProvider from '@/components/providers/modal-provider'

const figTree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oficina Virtual MPRO',
  description: 'Bienvenido a la Oficina Virtual de MPRO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figTree.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="ofv-theme-2"
        >
          <ModalProvider />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
