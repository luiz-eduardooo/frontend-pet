import { NavLink, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Logo } from "../../../shared/components/Logo"
import { useAuth } from "../../../shared/contexts/AuthContext"

const links = [
    { icone: "🔥", texto: "Descobrir", to: "/adotante/home" },
    { icone: "❤️", texto: "Matches", to: "/adotante/matches" },
    { icone: "🏠", texto: "Adoções", to: "/adotante/adocoes" },
    { icone: "🏢", texto: "Instituições", to: "/adotante/instituicoes" },
    { icone: "🆘", texto: "Resgate", to: "/adotante/resgate" },
    { icone: "👤", texto: "Perfil", to: "/adotante/perfil" }
]

const linkBase = "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium"
const linkAtivo = "bg-primary-50 text-primary-700"
const linkInativo = "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800"

export function LayoutAdotante() {
    const { sair } = useAuth()
    const navigate = useNavigate()

    function handleSair() {
        sair()
        navigate("/")
    }

    return (
        <div className="flex min-h-screen bg-zinc-50">
            {/* SIDEBAR */}
            <aside className="w-[260px] flex-shrink-0 flex flex-col bg-white border-r border-zinc-200">

                <div className="p-5 border-b border-zinc-100">
                    <Logo />
                </div>
                <nav className="flex-1 p-3 space-y-0.5">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `${linkBase} ${isActive ? linkAtivo : linkInativo}`
                            }
                        >
                            <span>{link.icone}</span>
                            {link.texto}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-3 border-t border-zinc-100">
                    <button onClick={handleSair} className="w-full text-left px-3 py-2 text-sm text-danger-600 hover:bg-danger-50 rounded-xl flex items-center gap-2">
                        ↩ Sair
                    </button>
                </div>
            </aside>

            {/* CONTEÚDO */}
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}