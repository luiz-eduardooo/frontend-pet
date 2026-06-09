import { createContext, useContext, useEffect, useState } from "react"

const ToastContext = createContext(null)

export function useToast() {
    return useContext(ToastContext)
}

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])

    const push = (tipo, titulo, mensagem) => {
        const id = Date.now() + Math.random()
        setToasts((atual) => [...atual, { id, tipo, titulo, mensagem }])
    }

    const remover = (id) => setToasts((atual) => atual.filter((t) => t.id !== id))

    return (
        <ToastContext.Provider value={{ push }}>
            {children}
            <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-2.5 pointer-events-none">
                {toasts.map((t) => (
                    <div key={t.id} className="pointer-events-auto">
                        <ToastItem {...t} onFim={() => remover(t.id)} />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

const ESTILOS = {
    success: { icone: "✓", anel: "bg-success-500", borda: "border-success-200", bg: "bg-success-50", tc: "text-success-700", mc: "text-success-600" },
    error: { icone: "✕", anel: "bg-danger-500", borda: "border-danger-200", bg: "bg-danger-50", tc: "text-danger-700", mc: "text-danger-600" },
    info: { icone: "i", anel: "bg-zinc-700", borda: "border-zinc-200", bg: "bg-white", tc: "text-zinc-800", mc: "text-zinc-500" },
}

function ToastItem({ tipo, titulo, mensagem, onFim }) {
    const [saindo, setSaindo] = useState(false)

    useEffect(() => {
        const t1 = setTimeout(() => setSaindo(true), 3600)
        const t2 = setTimeout(onFim, 4000)
        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
        }
    }, [onFim])

    const c = ESTILOS[tipo] || ESTILOS.info

    return (
        <div className={`${saindo ? "toast-out" : "toast-in"} flex items-start gap-3 w-80 p-4 rounded-2xl border shadow-lg ${c.bg} ${c.borda}`}>
            <div className={`w-6 h-6 rounded-full ${c.anel} text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                {c.icone}
            </div>
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${c.tc}`}>{titulo}</p>
                {mensagem && <p className={`text-xs mt-0.5 ${c.mc}`}>{mensagem}</p>}
            </div>
            <button
                type="button"
                onClick={() => {
                    setSaindo(true)
                    setTimeout(onFim, 200)
                }}
                className="text-zinc-400 hover:text-zinc-600 text-lg leading-none"
            >
                ×
            </button>
        </div>
    )
}