import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { verInstituicaoPorId } from "../instituicoes/services/instituicaoService"

function formatarCnpj(cnpj = "") {
    const d = cnpj.replace(/\D/g, "")
    if (d.length !== 14) return cnpj
    return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`
}

function formatarTelefone(tel = "") {
    const d = tel.replace(/\D/g, "")
    if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
    if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
    return tel
}

function Linha({ rotulo, children }) {
    if (!children) return null
    return (
        <div className="flex justify-between gap-4 py-3 border-b border-zinc-100 last:border-0">
            <span className="text-sm text-zinc-500">{rotulo}</span>
            <span className="text-sm text-zinc-900 text-right">{children}</span>
        </div>
    )
}

export function InstituicaoDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [inst, setInst] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        let ativo = true
        verInstituicaoPorId(id)
            .then((dados) => ativo && setInst(dados))
            .catch(() => ativo && setErro(true))
            .finally(() => ativo && setCarregando(false))
        return () => { ativo = false }
    }, [id])

    if (carregando) {
        return <div className="flex items-center justify-center min-h-[60vh] text-zinc-400 text-sm">Carregando...</div>
    }

    if (erro || !inst) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
                <span className="text-5xl mb-3">😕</span>
                <h2 className="text-lg font-semibold text-zinc-900">Instituição não encontrada</h2>
                <button type="button" onClick={() => navigate("/adotante/instituicoes")} className="text-sm text-primary-600 font-medium mt-3">
                    ← Voltar para a lista
                </button>
            </div>
        )
    }

    return (
        <div className="px-6 py-8">
            <div className="max-w-2xl mx-auto">
                <button type="button" onClick={() => navigate("/adotante/instituicoes")} className="text-sm text-zinc-500 hover:text-zinc-800 mb-5">
                    ← Voltar
                </button>

                <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                    <div className="p-6 flex items-center gap-4 border-b border-zinc-100">
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-3xl flex-shrink-0">🏢</div>
                        <div>
                            <h1 className="text-xl font-bold text-zinc-900">{inst.nome}</h1>
                            {inst.descricao && <p className="text-sm text-zinc-500 mt-1">{inst.descricao}</p>}
                        </div>
                    </div>

                    <div className="p-6">
                        <Linha rotulo="E-mail">{inst.email}</Linha>
                        <Linha rotulo="Telefone">{inst.telefone && formatarTelefone(inst.telefone)}</Linha>
                        <Linha rotulo="CNPJ">{inst.cnpj && formatarCnpj(inst.cnpj)}</Linha>
                        <Linha rotulo="Site">
                            {inst.link_site && (
                                <a href={inst.link_site} target="_blank" rel="noreferrer" className="text-primary-600 hover:underline">
                                    {inst.link_site.replace(/^https?:\/\//, "")}
                                </a>
                            )}
                        </Linha>
                    </div>
                </div>
            </div>
        </div>
    )
}