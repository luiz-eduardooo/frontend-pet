import { Button } from "./Button"

export function EmptyState({ emoji, titulo, descricao, cta, onCta }) {
    return (
        <div className="flex flex-col items-center py-16 px-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-3xl mb-4 select-none">
                {emoji}
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mb-2">{titulo}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-5 max-w-[280px]">{descricao}</p>
            {cta && (
                <Button variante="primary" tamanho="sm" type="button" onClick={onCta}>
                    {cta}
                </Button>
            )}
        </div>
    )
}