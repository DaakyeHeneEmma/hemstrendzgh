import "../styles/globals.css"
import Navbar from "./component/navbar"


export const metadata = {
  title: "Tynkrait",
  description: "Tynkrait Stores"
}

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}