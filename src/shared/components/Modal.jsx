import { useEffect } from "react"

export function Modal({ aberto, onFechar, titulo, subtitulo, children, rodape, largura = "max-w-md" }) {
    useEffect(() => {
        if (!aberto) return
        const aoApertar = (e) => {
            if (e.key === "Escape") onFechar()
        }
        window.addEventListener("keydown", aoApertar)
        document.body.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", aoApertar)
            document.body.style.overflow = ""
        }
    }, [aberto, onFechar])

    if (!aberto) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="overlay-in absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={onFechar} />
            <div className={`modal-in relative w-full ${largura} bg-white rounded-2xl shadow-xl border border-zinc-200 max-h-[90vh] flex flex-col`}>
                {titulo && (
                    <div className="flex items-start justify-between p-6 border-b border-zinc-100 flex-shrink-0">
                        <div>
                            <h3 className="text-base font-semibold text-zinc-900">{titulo}</h3>
                            {subtitulo && <p className="text-sm text-zinc-500 mt-0.5">{subtitulo}</p>}
                        </div>
                        <button
                            type="button"
                            onClick={onFechar}
                            className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors text-xl leading-none"
                        >
                            ×
                        </button>
                    </div>
                )}
                <div className="overflow-y-auto flex-1">{children}</div>
                {rodape && <div className="p-6 pt-4 border-t border-zinc-100 flex-shrink-0">{rodape}</div>}
            </div>
        </div>
    )
}