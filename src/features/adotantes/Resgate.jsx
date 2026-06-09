import { useState } from "react"
import { Input } from "../../shared/components/Input"
import { Button } from "../../shared/components/Button"
import { reportarResgate } from "../resgates/services/resgateService"

const VAZIO = { localizacao: "", status: "", descricao: "" }

export function Resgate() {
    const [form, setForm] = useState(VAZIO)
    const [erros, setErros] = useState({})
    const [enviando, setEnviando] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [erroEnvio, setErroEnvio] = useState(false)

    function alterar(e) {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
        setErros((er) => ({ ...er, [name]: undefined }))
    }

    function validar() {
        const novos = {}
        if (!form.localizacao.trim()) novos.localizacao = "Informe onde o animal está"
        if (!form.status) novos.status = "Selecione o estado do animal"
        if (!form.descricao.trim()) novos.descricao = "Descreva a situação"
        setErros(novos)
        return Object.keys(novos).length === 0
    }

    async function enviar(e) {
        e.preventDefault()
        if (!validar()) return
        setEnviando(true)
        setErroEnvio(false)
        try {
            await reportarResgate({
                localizacao: form.localizacao.trim(),
                status: form.status,
                descricao: form.descricao.trim(),
            })
            setEnviado(true)
        } catch (error) {
            console.error(error)
            setErroEnvio(true)
        } finally {
            setEnviando(false)
        }
    }

    function reportarOutro() {
        setForm(VAZIO)
        setErros({})
        setEnviado(false)
    }

    if (enviado) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
                <div className="w-16 h-16 rounded-full bg-success-50 flex items-center justify-center text-3xl mb-4">✓</div>
                <h2 className="text-lg font-semibold text-zinc-900">Reporte enviado!</h2>
                <p className="text-sm text-zinc-500 mt-1 max-w-xs">Obrigado por ajudar. Uma instituição vai avaliar o resgate.</p>
                <button type="button" onClick={reportarOutro} className="text-sm text-primary-600 font-medium mt-4">
                    Reportar outro animal
                </button>
            </div>
        )
    }

    return (
        <div className="px-6 py-8">
            <div className="max-w-lg mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-zinc-900">Reportar resgate</h1>
                    <p className="text-sm text-zinc-500 mt-1">Viu um animal abandonado? Conte pra gente.</p>
                </div>

                <form onSubmit={enviar} className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 space-y-4">
                    <Input
                        name="localizacao"
                        label="Localização"
                        value={form.localizacao}
                        onChange={alterar}
                        placeholder="Ex: Rua das Flores, 123 - próximo ao mercado"
                        required
                        error={erros.localizacao}
                    />

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                            Estado do animal <span className="text-danger-500">*</span>
                        </label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={alterar}
                            className={`field w-full h-10 px-3 text-sm rounded-xl border bg-white ${erros.status ? "border-danger-500" : "border-zinc-200"} ${form.status ? "text-zinc-900" : "text-zinc-400"}`}
                        >
                            <option value="">Selecione...</option>
                            <option value="saudavel">Saudável</option>
                            <option value="ferido">Ferido</option>
                        </select>
                        {erros.status && <p className="text-xs text-danger-500 mt-1">{erros.status}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                            Descrição <span className="text-danger-500">*</span>
                        </label>
                        <textarea
                            name="descricao"
                            rows={4}
                            value={form.descricao}
                            onChange={alterar}
                            placeholder="Descreva o animal e a situação (porte, cor, se está preso, etc.)"
                            className={`field w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-zinc-900 resize-none placeholder:text-zinc-400 ${erros.descricao ? "border-danger-500" : "border-zinc-200"}`}
                        />
                        {erros.descricao && <p className="text-xs text-danger-500 mt-1">{erros.descricao}</p>}
                    </div>

                    {erroEnvio && (
                        <p className="text-sm text-danger-500 text-center">Não foi possível enviar. Tente novamente.</p>
                    )}

                    <Button full type="submit" disabled={enviando}>
                        {enviando ? "Enviando..." : "Enviar reporte"}
                    </Button>
                </form>
            </div>
        </div>
    )
}