import { useState, useEffect } from "react"
import { useAuth } from "../../shared/contexts/AuthContext"
import { StatusBadge } from "../../shared/components/StatusBadge"
import { verAdocoesPorUsuario } from "../adocoes/services/adocoesService"

const FUNDOS = [
    "linear-gradient(150deg,#FFE3D4,#FFF2EC)",
    "linear-gradient(150deg,#C7F0DB,#ECFDF5)",
    "linear-gradient(150deg,#CFE3FF,#EFF6FF)",
    "linear-gradient(150deg,#E4DDFF,#F5F3FF)",
    "linear-gradient(150deg,#FFD9E0,#FFF1F2)",
]

function emojiDe(especie = "") {
    return especie.toLowerCase().includes("gat") ? "🐱" : "🐶"
}

function dataBR(iso) {
    if (!iso) return ""
    return new Date(iso).toLocaleDateString("pt-BR")
}

const FILTROS = [
    { chave: "todas", label: "Todas" },
    { chave: "pendente", label: "Pendentes" },
    { chave: "aprovada", label: "Aprovadas" },
    { chave: "recusada", label: "Recusadas" },
]

export function Adocoes() {
    const { usuario } = useAuth()

    const [adocoes, setAdocoes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [filtro, setFiltro] = useState("todas")

    useEffect(() => {
        let ativo = true
        verAdocoesPorUsuario(usuario.id)
            .then((lista) => ativo && setAdocoes(Array.isArray(lista) ? lista : []))
            .catch(console.error)
            .finally(() => ativo && setCarregando(false))
        return () => { ativo = false }
    }, [usuario.id])

    const visiveis = filtro === "todas" ? adocoes : adocoes.filter((a) => a.status === filtro)

    if (carregando) {
        return <div className="flex items-center justify-center min-h-[60vh] text-zinc-400 text-sm">Carregando adoções...</div>
    }

    return (
        <div className="px-6 py-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-zinc-900">Minhas adoções</h1>
                    <p className="text-sm text-zinc-500 mt-1">Acompanhe o status dos seus pedidos</p>
                </div>

                <div className="flex gap-2 mb-5">
                    {FILTROS.map((f) => (
                        <button
                            key={f.chave}
                            type="button"
                            onClick={() => setFiltro(f.chave)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                filtro === f.chave ? "bg-primary-500 text-white" : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {visiveis.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="text-5xl mb-3">🏠</span>
                        <h2 className="text-lg font-semibold text-zinc-900">
                            {adocoes.length === 0 ? "Nenhum pedido de adoção" : "Nada por aqui"}
                        </h2>
                        <p className="text-sm text-zinc-500 mt-1">
                            {adocoes.length === 0 ? "Quando solicitar uma adoção, ela aparece aqui." : "Nenhuma adoção com esse status."}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {visiveis.map((adocao) => (
                            <div key={adocao.id} className="bg-white rounded-2xl border border-zinc-200 p-4 flex items-center gap-4 shadow-sm">
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: FUNDOS[adocao.petId % FUNDOS.length] }}
                                >
                                    <span style={{ fontSize: 30 }}>{emojiDe(adocao.petSpecies)}</span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-zinc-900 truncate">{adocao.petName}</h3>
                                    {adocao.institutionName && <p className="text-xs text-zinc-400 mt-0.5 truncate">🏢 {adocao.institutionName}</p>}
                                    {adocao.requestDate && <p className="text-xs text-zinc-400 mt-0.5">Solicitado em {dataBR(adocao.requestDate)}</p>}
                                </div>

                                <StatusBadge status={adocao.status} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}