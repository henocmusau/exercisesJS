import { ThemeProvider } from '@/utils/context/theme'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Todo App - Manage your todo-list !',
  description: 'This app is for create, manage and filter your todolist efficiently.',
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  )
}
