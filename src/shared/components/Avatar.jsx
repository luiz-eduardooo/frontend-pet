const CORES = [
    ["#FFE3D4", "#B34424"],
    ["#D1FAE5", "#15633F"],
    ["#DBEAFE", "#1E40AF"],
    ["#FEF9C3", "#854D0E"],
    ["#FCE7F3", "#9D174D"],
    ["#E0E7FF", "#3730A3"],
]

const tamanhos = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
}

export function Avatar({ nome, tamanho = "md" }) {
    const iniciais = (nome || "?")
        .split(" ")
        .slice(0, 2)
        .map((p) => p[0])
        .join("")
        .toUpperCase()

    const indice = (nome || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % CORES.length
    const [bg, fg] = CORES[indice]

    return (
        <div
            className={`${tamanhos[tamanho]} rounded-full flex items-center justify-center font-semibold flex-shrink-0`}
            style={{ background: bg, color: fg }}
        >
            {iniciais}
        </div>
    )
}