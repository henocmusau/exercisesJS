import './globals.css'
import { ThemeProvider } from '@/utils/context/theme'

export const metadata = {
  title: 'My Todo App - Manage your todo-list !',
  description: 'This app is for create, manage and filter your todolist efficiently.',
}

const style = ' bg-bgLight dark:bg-bgDark flex flex-col items-center break-words'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={style} >{children}</body>
      </html>
    </ThemeProvider>
  )
}
