import Link from "next/link"

import style from "./header.module.sass"

const Header = () => {
    const handleMenu = () => document.querySelectorAll(".lx-nav-burger, .lx-nav-menu").forEach(item => item.classList.toggle("is-active"))

    return <header className={`ps-sticky ${style.header}`}>
        <nav className="lx-nav">
            <div className="lx-nav-brand">
                <Link href="/"><a>Blog</a></Link>
                <button className="lx-nav-burger" onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className="lx-nav-menu">
                <div className="lx-nav-item">
                    <Link href="/"><a>Home</a></Link>
                </div>

                <div className="lx-nav-item">
                    <Link href="/posts"><a>Posts</a></Link>
                </div>

                <div className="lx-nav-item">
                    <Link href="/news"><a>News</a></Link>
                </div>

                <div className="lx-nav-item">
                    <a href="#" target="_blank">Buy me a coffee</a>
                </div>
            </div>
        </nav>
    </header>
}

export default Header