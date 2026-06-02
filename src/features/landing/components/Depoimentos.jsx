import { Card } from "../../../shared/components/Card"

const sectionStyle = "py-16 bg-zinc-50 border-y border-zinc-100"

const container = "max-w-6xl mx-auto px-6"

const titulo = "text-xs font-semibold text-zinc-400 uppercase tracking-widest text-center mb-10"

const grid = "grid md:grid-cols-3 gap-5"

const citacao = "text-sm text-zinc-700 leading-relaxed mb-5 italic"

const linhaAutor = "flex items-center gap-3"

const avatar = "w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700"

const nome = "text-sm font-semibold text-zinc-900"

const pessoas = [{
    descricao: "Em 3 dias encontrei a Luna — processo todo pelo app, super transparente. Recomendo demais.", nome: "Maria Oliveira",
    loc: "Adotante em São Paulo",
    inicial: "MO"
},
{ descricao: "Nossas adoções aumentaram 40% depois que entramos no PetMatch. O dashboard é um sonho.", nome: "Juliana Ramos", loc: "Diretora ONG Amigos do Pelo", inicial: "JR" },
{
    descricao: "O match com o Thor foi instantâneo. Ele era exatamente o que a gente precisava em casa.",
    nome: "Carlos e Ana",
    loc: "Adotantes no Rio de Janeiro",
    inicial: "CA"
}
]

export function Depoimentos() {
    return (
        <section id="depoimentos" className={sectionStyle}><div className={container}>
            <p className={titulo}>Depoimentos de quem já transformou uma vida</p>
            <div className={grid}>
                {pessoas.map((el) => {
                    return (
                        <Card className="p-6 h-full" key={el.nome}>
                            <div className="flex gap-1 mb-4">
                                <span className="text-primary-400 text-sm">★★★★★</span>
                            </div>
                            <p className={citacao}>{el.descricao}</p>
                            <div className={linhaAutor}>
                                <span className={avatar}>{el.inicial}</span>
                                <div>
                                    <p className={nome}>{el.nome}</p>
                                    <p className="text-xs text-zinc-400">{el.loc}</p>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
        </section>
    )
}