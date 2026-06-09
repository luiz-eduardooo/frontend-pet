import { Spinner } from "./Spinner"

const estilos = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-xs",
    secondary: "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 active:bg-zinc-100 shadow-xs",
    destructive: "bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 shadow-xs",
    ghost: "text-zinc-600 hover:bg-zinc-100 active:bg-zinc-200"
}

const tamanhos = {
    sm: "h-8 px-3 text-xs gap-1.5 rounded-lg",
    md: "h-10 px-4 text-sm gap-2 rounded-xl",
    lg: "h-11 px-5 text-sm gap-2 rounded-xl"
}

const base = "inline-flex items-center justify-center font-medium select-none whitespace-nowrap transition-colors"

export function Button({
    variante = "primary",
    tamanho = "md",
    full,
    type,
    onClick,
    disabled,
    loading,
    className = "",
    children,
}) {
    const bloqueado = disabled || loading
    const final = `${base} ${estilos[variante]} ${tamanhos[tamanho]} ${full ? "w-full" : ""} ${bloqueado ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`

    return (
        <button type={type} onClick={onClick} disabled={bloqueado} className={final}>
            {loading && <Spinner tamanho={tamanho === "sm" ? 13 : 15} />}
            {children}
        </button>
    )
}