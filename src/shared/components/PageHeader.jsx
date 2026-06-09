export function PageHeader({ titulo, subtitulo, acao }) {
    return (
        <div className="flex items-start justify-between gap-4 mb-6">
            <div>
                <h1 className="text-2xl font-bold text-zinc-900" style={{ letterSpacing: "-0.02em" }}>
                    {titulo}
                </h1>
                {subtitulo && <p className="text-sm text-zinc-500 mt-1">{subtitulo}</p>}
            </div>
            {acao}
        </div>
    )
}