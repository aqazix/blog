import Head from "next/head"

const Layout = ({ children }) => {
    return <div className="lx-container-80">
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@latest/dist/compressed/luxa.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        </Head>

        <main>{children}</main>
    </div>
}

export default Layout