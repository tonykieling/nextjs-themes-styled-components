
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} style={{margin: 0}}>
        { children }
      </body>
    </html>
  )
}
