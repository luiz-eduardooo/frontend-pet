export function Select({ name, label, value, onChange, onBlur, error, disabled, required, opcoes = [], placeholder, className = "" }) {
    const base = "field w-full h-10 px-3 text-sm rounded-xl border bg-white cursor-pointer"

    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    {label}
                    {required && <span className="text-danger-500 ml-0.5">*</span>}
                </label>
            )}
            <select
                name={name}
                value={value}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
                className={`${base} ${error ? "border-danger-500" : "border-zinc-200"} ${!value ? "text-zinc-400" : "text-zinc-900"}`}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {opcoes.map((o) =>
                    typeof o === "string" ? (
                        <option key={o} value={o}>{o}</option>
                    ) : (
                        <option key={o.value} value={o.value}>{o.label}</option>
                    )
                )}
            </select>
            {error && <p className="text-xs text-danger-500 mt-1">{error}</p>}
        </div>
    )
}