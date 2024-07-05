import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
              <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Azamat Bayramov</title>
                <link rel="stylesheet" href="src/styles/main.css"/>
                <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico"/>
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
