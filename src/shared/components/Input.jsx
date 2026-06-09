export function Input({ name, label, type, value, onChange, placeholder, required, error }) {
    const base = "field w-full h-10 px-3.5 text-sm rounded-xl border bg-white text-zinc-900 placeholder:text-zinc-400"
    const labelStyle = "block text-sm font-medium text-zinc-700 mb-1.5"

    return (
        <div>
            {label ? <label className={labelStyle}>{label}{required && <span className="text-danger-500 ml-0.5">*</span>}</label> : null}
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${base} ${error ? "border-danger-500" : "border-zinc-200"}`}
            />
            {error ? <p className="text-xs text-danger-500 mt-1">{error}</p> : null}
        </div>
    )
}