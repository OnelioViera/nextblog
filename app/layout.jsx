import './globals.css'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import TopNav from '@/components/TopNav'

export const metadata = {
  title: 'Blog app with next13',
  description: 'Latest blogs on web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
        </body>
    </html>
  )
}
