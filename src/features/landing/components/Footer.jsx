import { Logo } from "../../../shared/components/Logo"

const footerStyle = "border-t border-zinc-100 py-10 bg-white"

const containerStyle = "max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"

const linkContainerStyle = "flex items-center gap-6"

const linkStyle = "text-sm text-zinc-400 hover:text-zinc-700 transition-colors no-underline"

const links = ['Termos de uso', 'Privacidade', 'Contato', 'Blog']
export function Footer(){
    return(
        <footer className={footerStyle}>
            <div className={containerStyle}>
                <Logo tamanho="sm"/>
                <div className={linkContainerStyle}>
                    {links.map((el)=>{
                        return (
                            <a key={el} href="#" className={linkStyle}>{el}</a>
                        )
                    })}
                </div>
                <p className="text-xs text-zinc-400">© 2025 Mi Audota. Feito com ❤ por animais.</p>
            </div>
        </footer>
    )
}