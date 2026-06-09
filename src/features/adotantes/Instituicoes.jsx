import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { listarInstituicoes } from "../instituicoes/services/instituicaoService"

export function Instituicoes() {
    const navigate = useNavigate()

    const [instituicoes, setInstituicoes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [busca, setBusca] = useState("")

    useEffect(() => {
        let ativo = true
        listarInstituicoes()
            .then((lista) => ativo && setInstituicoes(Array.isArray(lista) ? lista : []))
            .catch(console.error)
            .finally(() => ativo && setCarregando(false))
        return () => { ativo = false }
    }, [])

    const termo = busca.trim().toLowerCase()
    const visiveis = termo ? instituicoes.filter((i) => i.nome?.toLowerCase().includes(termo)) : instituicoes

    if (carregando) {
        return <div className="flex items-center justify-center min-h-[60vh] text-zinc-400 text-sm">Carregando instituições...</div>
    }

    return (
        <div className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-zinc-900">Instituições</h1>
                    <p className="text-sm text-zinc-500 mt-1">Conheça as ONGs parceiras</p>
                </div>

                <input
                    type="text"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Buscar por nome..."
                    className="field w-full h-11 px-4 mb-5 text-sm rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400"
                />

                {visiveis.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="text-5xl mb-3">🏢</span>
                        <h2 className="text-lg font-semibold text-zinc-900">Nenhuma instituição encontrada</h2>
                        <p className="text-sm text-zinc-500 mt-1">{termo ? "Tente outro termo de busca." : "Ainda não há ONGs cadastradas."}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {visiveis.map((inst) => (
                            <button
                                key={inst.id}
                                type="button"
                                onClick={() => navigate(`/adotante/instituicoes/${inst.id}`)}
                                className="bg-white rounded-2xl border border-zinc-200 p-5 text-left shadow-sm card-lift"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-xl flex-shrink-0">🏢</div>
                                    <div className="min-w-0">
                                        <h3 className="text-base font-semibold text-zinc-900 truncate">{inst.nome}</h3>
                                        {inst.telefone && <p className="text-xs text-zinc-400">{inst.telefone}</p>}
                                    </div>
                                </div>
                                {inst.descricao && <p className="text-sm text-zinc-600 mt-3 line-clamp-2">{inst.descricao}</p>}
                                <p className="text-xs text-primary-600 font-medium mt-3">Ver detalhes →</p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}