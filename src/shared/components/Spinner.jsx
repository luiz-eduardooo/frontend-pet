export function Spinner({ tamanho = 16 }) {
    return (
        <svg className="spin flex-shrink-0" width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity=".25" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" opacity=".85" />
        </svg>
    )
}