import './globals.css'

export const metadata = {
  title: 'Highway to Hell',
  description: 'drinking dranking drunking',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
