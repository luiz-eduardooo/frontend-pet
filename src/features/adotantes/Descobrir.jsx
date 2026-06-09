import { useState, useEffect } from "react"
import { useAuth } from "../../shared/contexts/AuthContext"
import { descobrirPets, fazerMatchUsuario } from "../matches/services/matchesService"

// Fundos suaves pro "retrato" do pet (a API não manda foto).
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

function sexoLabel(sexo) {
    if (sexo === "M") return "Macho"
    if (sexo === "F") return "Fêmea"
    return null
}

export function Descobrir() {
    const { usuario } = useAuth()

    const [pets, setPets] = useState([])
    const [indice, setIndice] = useState(0)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        let ativo = true
        descobrirPets(usuario.id)
            .then((lista) => ativo && setPets(Array.isArray(lista) ? lista : []))
            .catch(console.error)
            .finally(() => ativo && setCarregando(false))
        return () => { ativo = false }
    }, [usuario.id])

    const pet = pets[indice]

    function agir(tipo) {
        if (!pet) return
        fazerMatchUsuario({ usuario_id: usuario.id, pet_id: pet.id, tipo }).catch(console.error)
        setIndice((i) => i + 1)
    }

    if (carregando) {
        return <div className="flex items-center justify-center min-h-[60vh] text-zinc-400 text-sm">Carregando pets...</div>
    }

    if (!pet) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
                <span className="text-5xl mb-3">🎉</span>
                <h2 className="text-lg font-semibold text-zinc-900">Você viu todos os pets!</h2>
                <p className="text-sm text-zinc-500 mt-1">Volte mais tarde para conhecer novos amigos.</p>
            </div>
        )
    }

    const infos = [pet.especie, pet.raca, sexoLabel(pet.sexo), pet.porte, pet.cor].filter(Boolean)
    const fundo = FUNDOS[pet.id % FUNDOS.length]

    return (
        <div className="px-6 py-8">
            <div className="max-w-sm mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold text-zinc-900">Descobrir</h1>
                    <p className="text-sm text-zinc-500 mt-1">Curta os pets que combinam com você</p>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                    <div className="flex items-center justify-center" style={{ height: 240, background: fundo }}>
                        <span style={{ fontSize: 110, filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.12))" }}>{emojiDe(pet.especie)}</span>
                    </div>

                    <div className="p-5">
                        <h2 className="text-2xl font-bold text-zinc-900">
                            {pet.nome}
                            {pet.idade_aproximada != null && (
                                <span className="text-lg font-medium text-zinc-500">, {pet.idade_aproximada} {pet.idade_aproximada === 1 ? "ano" : "anos"}</span>
                            )}
                        </h2>

                        {infos.length > 0 && <p className="text-sm text-zinc-500 mt-1">{infos.join(" · ")}</p>}

                        {(pet.vacinado || pet.castrado) && (
                            <div className="flex gap-2 mt-3">
                                {pet.vacinado && <span className="px-2.5 py-1 bg-success-50 text-success-700 rounded-full text-xs font-medium">💉 Vacinado</span>}
                                {pet.castrado && <span className="px-2.5 py-1 bg-success-50 text-success-700 rounded-full text-xs font-medium">✓ Castrado</span>}
                            </div>
                        )}

                        {pet.historia && <p className="text-sm text-zinc-600 leading-relaxed mt-3">{pet.historia}</p>}

                        {pet.instituicao_nome && (
                            <p className="text-xs text-zinc-400 mt-4 pt-4 border-t border-zinc-100">🏢 {pet.instituicao_nome}</p>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 mt-6">
                    <button
                        type="button"
                        onClick={() => agir("pass")}
                        className="w-16 h-16 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-2xl text-zinc-400 shadow-sm hover:border-danger-300 hover:text-danger-500 transition-colors"
                    >
                        ✕
                    </button>
                    <button
                        type="button"
                        onClick={() => agir("like")}
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white shadow-md hover:opacity-90 transition-opacity"
                        style={{ background: "linear-gradient(135deg,#D45830,#F4723B)" }}
                    >
                        ❤
                    </button>
                </div>

                <p className="text-center text-xs text-zinc-400 mt-5">{indice + 1} de {pets.length}</p>
            </div>
        </div>
    )
}