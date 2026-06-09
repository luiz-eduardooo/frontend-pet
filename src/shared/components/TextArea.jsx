export function Textarea({ name, label, value, onChange, onBlur, placeholder, disabled, linhas = 3, max, opcional, error, className = "" }) {
    const contagem = (value || "").length
    const passou = max && contagem > max

    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    {label}
                    {opcional && <span className="text-zinc-400 text-xs ml-1.5">(opcional)</span>}
                </label>
            )}
            <textarea
                name={name}
                rows={linhas}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
                className={`field w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-zinc-900 resize-none placeholder:text-zinc-400 ${error || passou ? "border-danger-500" : "border-zinc-200"}`}
            />
            <div className="flex justify-between mt-1.5">
                {error ? <p className="text-xs text-danger-500">{error}</p> : <span />}
                {max && (
                    <span className={`text-xs font-mono ${passou ? "text-danger-500" : contagem > max * 0.9 ? "text-warning-600" : "text-zinc-400"}`}>
                        {contagem}/{max}
                    </span>
                )}
            </div>
        </div>
    )
}