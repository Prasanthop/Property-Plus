import '@/assets/styles/globals.css'
export const metadata = {
    title:"Property-pluse | Find the Perfect Rentals",
    description:"Find your dream rental property",
    keywords:'rental, find rentals, find properties '
}
const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}

export default MainLayout