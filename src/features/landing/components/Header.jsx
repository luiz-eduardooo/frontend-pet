import { Link } from "react-router-dom"
import { Button } from "../../../shared/components/Button"
import { Logo } from "../../../shared/components/Logo"

const containerExternoStyle = "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md"

const containerInternoStyle = "max-w-6xl mx-auto px-6 h-16 flex items-center gap-8"

const navegacaoStyle = "hidden md:flex items-center gap-7 flex-1 justify-center"

const linkStyle = "text-sm font-medium text-zinc-600 no-underline hover:text-zinc-900 cursor-pointer"

const containerButtonSyle = "hidden md:flex items-center gap-3"

const links = [
    { texto: "Como Funciona", href: "#como-funciona" },
    { texto: "Para ONGs", href: "#para-ongs" },
    { texto: "Sobre", href: "#depoimentos" },
]




export function Header() {
    return (
        <header className={containerExternoStyle}>
            <div className={containerInternoStyle}>
                <Logo />
                <nav className={navegacaoStyle}>
                    {links.map((el) => {
                        return (<a key={el.texto} className={linkStyle} href={el.href}>{el.texto}</a>)
                    })}
                </nav>
                <div className={containerButtonSyle}>
                    <Link to={"/login"}><Button variante="ghost" tamanho="md">Entrar</Button></Link>
                    <Link to={"/cadastro"}><Button variante="primary" tamanho="md">Comecar Agora</Button></Link>
                </div>
            </div>
            <div></div>
        </header>
    )
}