import { Badge } from "./Badge";


const STATUS_MAP = {
    disponivel: { variante: "primary", label: "Disponível" },
    em_processo: { variante: "warning", label: "Em processo" },
    adotado: { variante: "default", label: "Adotado" },
    pendente: { variante: "warning", label: "Pendente" },
    aprovada: { variante: "success", label: "Aprovada" },
    recusada: { variante: "danger", label: "Recusada" },
    entregue: { variante: "success", label: "Entregue" },
    a_caminho: { variante: "primary", label: "A caminho" },
    ferido: { variante: "danger", label: "Ferido" },
    saudavel: { variante: "success", label: "Saudável" },
    recebido: { variante: "primary", label: "Recebido" },
};

export function StatusBadge({ status }) {

    const info = STATUS_MAP[status] || { variante: "default", label: status };

    return <Badge variante={info.variante}>{info.label}</Badge>;
}