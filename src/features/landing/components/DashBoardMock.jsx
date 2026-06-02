import { Badge } from "../../../shared/components/Badge"

const containerStyle = "bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden max-w-[420px]"

const topBarStyle = "flex items-center justify-between px-5 py-3.5 border-b border-zinc-100"

const quadradoStyle = "w-6 h-6 rounded-lg bg-primary-500 flex items-center justify-center text-xs"

const avatar = "w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700"

const blocoDois = "grid grid-cols-3 gap-px bg-zinc-100"

const bloquinhoStyle = "bg-white px-4 py-3.5 text-center"

const numeroStyle = "text-xl font-bold text-zinc-900"

const rotuloStyle = "text-xs text-zinc-500 mt-0.5"

const blocoTres = "p-4 space-y-2"

const tituloLista = "text-xs font-medium text-zinc-400 uppercase tracking-widest mb-3"

const linhaTres = "flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors"

const avatarTres = "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-primary-100 text-primary-700"

const nomeTres = "text-sm font-medium text-zinc-800 leading-none"




const bloquinhos = [
    { numero: "24", desc: "Pets ativos" },
    { numero: "12", desc: "Solicitações" },
    { numero: "847", desc: "Adoções" }
]

const linhasPessoas = [
    { nome: "Maria Oliveira", inicial: "MO", pet: "Bolinha", status: "success", statusTexto: "Aprovado" },
    { nome: "João Silva", inicial: "JS", pet: "Luna", status: "warning", statusTexto: "Pendente" },
    { nome: "Ana Costa", inicial: "AC", pet: "Thor", status: "default", statusTexto: "Análise" }
]

export function DashBoardMock() {
    return (
        <div className={containerStyle}>
            <div className={topBarStyle}>
                <div className="flex items-center gap-2">
                    <span className={quadradoStyle}>🐾</span>
                    <h1 className="text-sm font-semibold text-zinc-800">ONG Amigos do Pelo</h1>
                </div>
                <div className={avatar}>MO</div>
            </div>
            <div className={blocoDois}>
                {bloquinhos.map((el) => {
                    return (
                        <div key={el.numero} className={bloquinhoStyle}>
                            <p className={numeroStyle}>{el.numero}</p>
                            <p className={rotuloStyle}>{el.desc}</p>
                        </div>
                    )
                })}
            </div>
            <div className={blocoTres}>
                <p className={tituloLista}>Solicitações recentes</p>
                {linhasPessoas.map((el) => {
                    return (
                        <div className={linhaTres} key={el.nome}>
                            <span className={avatarTres}>{el.inicial}</span>
                            <div className="flex-1 min-w-0">
                                <p className={nomeTres}>{el.nome}</p>
                                <p className="text-xs text-zinc-400 mt-0.5">Quer adotar {el.pet}</p>
                            </div>
                            <Badge variante={el.status}>{el.statusTexto}</Badge>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}