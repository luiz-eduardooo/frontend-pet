import { useState, useEffect } from "react"
import { useAuth } from "../../shared/contexts/AuthContext"
import { Button } from "../../shared/components/Button"
import { verMatchesPorUsuario } from "../matches/services/matchesService"
import { fazerAdocao } from "../adocoes/services/adocoesService"

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

export function Matches() {
    const { usuario } = useAuth()

    const [matches, setMatches] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [acoes, setAcoes] = useState({})

    useEffect(() => {
        let ativo = true
        verMatchesPorUsuario(usuario.id)
            .then((lista) => ativo && setMatches(Array.isArray(lista) ? lista : []))
            .catch(console.error)
            .finally(() => ativo && setCarregando(false))
        return () => { ativo = false }
    }, [usuario.id])

    async function solicitarAdocao(match) {
        setAcoes((a) => ({ ...a, [match.id]: "enviando" }))
        try {
            await fazerAdocao({ usuario_id: usuario.id, pet_id: match.pet_id })
            setAcoes((a) => ({ ...a, [match.id]: "ok" }))
        } catch (error) {
            console.error(error)
            setAcoes((a) => ({ ...a, [match.id]: "erro" }))
        }
    }

    if (carregando) {
        return <div className="flex items-center justify-center min-h-[60vh] text-zinc-400 text-sm">Carregando matches...</div>
    }

    return (
        <div className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-zinc-900">Meus matches</h1>
                    <p className="text-sm text-zinc-500 mt-1">Pets que também combinaram com você</p>
                </div>

                {matches.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="text-5xl mb-3">💔</span>
                        <h2 className="text-lg font-semibold text-zinc-900">Nenhum match ainda</h2>
                        <p className="text-sm text-zinc-500 mt-1">Curta pets na aba Descobrir para começar.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {matches.map((match) => {
                            const estado = acoes[match.id]
                            const infos = [match.pet_especie, match.pet_raca, match.pet_cor].filter(Boolean)

                            return (
                                <div key={match.id} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm card-lift">
                                    <div className="flex items-center justify-center" style={{ height: 130, background: FUNDOS[match.pet_id % FUNDOS.length] }}>
                                        <span style={{ fontSize: 64, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" }}>{emojiDe(match.pet_especie)}</span>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-base font-semibold text-zinc-900">{match.pet_nome}</h3>
                                        {infos.length > 0 && <p className="text-xs text-zinc-500 mt-0.5">{infos.join(" · ")}</p>}
                                        {match.instituicao_nome && <p className="text-xs text-zinc-400 mt-2">🏢 {match.instituicao_nome}</p>}
                                        {match.data_match && <p className="text-xs text-zinc-400 mt-0.5">❤ Match em {dataBR(match.data_match)}</p>}

                                        <div className="mt-4">
                                            {estado === "ok" ? (
                                                <p className="text-sm font-medium text-success-600 text-center py-2">✓ Adoção solicitada</p>
                                            ) : (
                                                <>
                                                    <Button
                                                        full
                                                        tamanho="sm"
                                                        type="button"
                                                        disabled={estado === "enviando"}
                                                        onClick={() => solicitarAdocao(match)}
                                                    >
                                                        {estado === "enviando" ? "Enviando..." : "Solicitar adoção"}
                                                    </Button>
                                                    {estado === "erro" && (
                                                        <p className="text-xs text-danger-500 mt-1.5 text-center">Não foi possível solicitar. Talvez já exista um pedido.</p>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}