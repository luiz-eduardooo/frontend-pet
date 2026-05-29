const estilos = {
    default: "bg-zinc-100 text-zinc-600",
    primary:"bg-primary-50 text-primary-700",
    danger:"bg-danger-50 text-danger-700",
    success: "bg-success-50 text-success-700",
    warning: "bg-warning-50 text-warning-700"
}

const dots = {
    default: "bg-zinc-400",
    primary:"bg-primary-500",
    danger:"bg-danger-500",
    success: "bg-success-500",
    warning: "bg-warning-500"
}

const base = "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"

const bolinha = "w-1.5 h-1.5 rounded-full"

export function Badge({children, variante="default"}){
    const spanOne = `${base} ${estilos[variante]}`;
    const spanTwo = `${bolinha} ${dots[variante]}`;
   return( <span className={spanOne}>
        <span className={spanTwo}>
        </span>
        {children}
    </span>
    )
}