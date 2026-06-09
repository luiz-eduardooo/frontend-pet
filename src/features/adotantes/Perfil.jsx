import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../shared/contexts/AuthContext"
import { Input } from "../../shared/components/Input"
import { Button } from "../../shared/components/Button"
import { modificarUsuario, deletarUsuario } from "../usuarios/services/usuarioService"

export function Perfil() {
    const { usuario, entrar, sair } = useAuth()
    const navigate = useNavigate()

    const [editando, setEditando] = useState(false)
    const [form, setForm] = useState({ name: usuario.name || "", email: usuario.email || "" })
    const [erros, setErros] = useState({})
    const [salvando, setSalvando] = useState(false)
    const [erroSalvar, setErroSalvar] = useState(false)

    const [confirmando, setConfirmando] = useState(false)
    const [excluindo, setExcluindo] = useState(false)

    const inicial = (usuario.name || usuario.email || "?").charAt(0).toUpperCase()

    function alterar(e) {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
        setErros((er) => ({ ...er, [name]: undefined }))
    }

    function abrirEdicao() {
        setForm({ name: usuario.name || "", email: usuario.email || "" })
        setErros({})
        setErroSalvar(false)
        setEditando(true)
    }

    function validar() {
        const novos = {}
        if (!form.name.trim()) novos.name = "Informe seu nome"
        if (!form.email.trim()) novos.email = "Informe seu e-mail"
        else if (!/\S+@\S+\.\S+/.test(form.email)) novos.email = "E-mail inválido"
        setErros(novos)
        return Object.keys(novos).length === 0
    }

    async function salvar(e) {
        e.preventDefault()
        if (!validar()) return
        setSalvando(true)
        setErroSalvar(false)
        try {
            const dados = { name: form.name.trim(), email: form.email.trim() }
            await modificarUsuario(usuario.id, dados)
            // Atualiza o contexto/localStorage mantendo token e demais campos.
            entrar({ ...usuario, ...dados })
            setEditando(false)
        } catch (error) {
            console.error(error)
            setErroSalvar(true)
        } finally {
            setSalvando(false)
        }
    }

    async function excluirConta() {
        setExcluindo(true)
        try {
            await deletarUsuario(usuario.id)
            sair()
            navigate("/")
        } catch (error) {
            console.error(error)
            setExcluindo(false)
        }
    }

    return (
        <div className="px-6 py-8">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-zinc-900 mb-6">Meu perfil</h1>

                <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                    <div className="p-6 flex items-center gap-4 border-b border-zinc-100">
                        <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-2xl font-semibold flex-shrink-0">
                            {inicial}
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-lg font-semibold text-zinc-900 truncate">{usuario.name}</h2>
                            <p className="text-sm text-zinc-500 truncate">{usuario.email}</p>
                        </div>
                    </div>

                    <div className="p-6">
                        {editando ? (
                            <form onSubmit={salvar} className="space-y-4">
                                <Input name="name" label="Nome" value={form.name} onChange={alterar} required error={erros.name} />
                                <Input name="email" label="E-mail" type="email" value={form.email} onChange={alterar} required error={erros.email} />

                                {erroSalvar && <p className="text-sm text-danger-500 text-center">Não foi possível salvar. Tente novamente.</p>}

                                <div className="flex gap-3">
                                    <Button type="submit" disabled={salvando} full>
                                        {salvando ? "Salvando..." : "Salvar"}
                                    </Button>
                                    <Button type="button" variante="secondary" full onClick={() => setEditando(false)} disabled={salvando}>
                                        Cancelar
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <Button type="button" variante="secondary" full onClick={abrirEdicao}>
                                Editar perfil
                            </Button>
                        )}
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <button
                        type="button"
                        onClick={() => { sair(); navigate("/") }}
                        className="w-full text-center py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 rounded-xl transition-colors"
                    >
                        Sair da conta
                    </button>

                    {confirmando ? (
                        <div className="bg-danger-50 border border-danger-200 rounded-xl p-4 text-center">
                            <p className="text-sm text-danger-700 font-medium">Excluir a conta é permanente. Tem certeza?</p>
                            <div className="flex gap-2 mt-3">
                                <Button type="button" variante="destructive" full onClick={excluirConta} disabled={excluindo}>
                                    {excluindo ? "Excluindo..." : "Sim, excluir"}
                                </Button>
                                <Button type="button" variante="secondary" full onClick={() => setConfirmando(false)} disabled={excluindo}>
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setConfirmando(true)}
                            className="w-full text-center py-2.5 text-sm font-medium text-danger-600 hover:bg-danger-50 rounded-xl transition-colors"
                        >
                            Excluir conta
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}