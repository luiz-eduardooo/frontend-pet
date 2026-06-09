
export function rotuloIdade(meses) {
    if (meses == null) return "—"
    if (meses < 12) return `${meses} ${meses === 1 ? "mês" : "meses"}`
    const anos = Math.floor(meses / 12)
    return `${anos} ${anos === 1 ? "ano" : "anos"}`
}

export function diasAtras(data) {
    const diff = Math.floor((Date.now() - new Date(data).getTime()) / 86400000)
    if (diff <= 0) return "hoje"
    if (diff === 1) return "há 1 dia"
    return `há ${diff} dias`
}

export function mascaraTelefone(valor) {
    const d = (valor || "").replace(/\D/g, "").slice(0, 11)
    if (d.length <= 2) return d
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const FUNDOS = ["laranja", "verde", "azul", "roxo", "rosa", "amarelo"]

export function emojiDoPet(pet) {
    if (pet?.emoji) return pet.emoji
    return (pet?.type || "").toLowerCase().includes("gato") ? "🐱" : "🐶"
}

export function fundoDoPet(pet) {
    if (pet?.bg) return pet.bg
    const base = pet?.id ?? (pet?.name || "").length
    return FUNDOS[base % FUNDOS.length]
}

export const UFS = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]