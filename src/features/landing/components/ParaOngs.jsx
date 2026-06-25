import { Button } from "../../../shared/components/Button"
import { DashBoardMock } from "./DashBoardMock"
import { Link } from "react-router-dom"
const sectionStyle = "py-20 md:py-28 bg-white overflow-hidden"

const linhaColunas = "flex flex-col md:flex-row items-center gap-12 md:gap-16"

const labelStyle = "text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3"

const tituloStyle = "text-3xl md:text-4xl font-bold text-zinc-900 mb-5"

const paragrafoStyle = "text-zinc-500 text-lg mb-8 leading-relaxed"

const circuloIcone = "w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-base flex-shrink-0 mt-0.5"


const beneficios = [
    { icone: "📋", titulo: "Gestão centralizada", descricao: "Cadastre e gerencie todos os seus pets, solicitações e adoções em um painel único e intuitivo."
    },
    { icone: "🔔", titulo: "Notificações em tempo real", descricao: "Receba alertas imediatos quando um adotante compatível demonstrar interesse."
    },
    { icone: "📊", titulo: "Relatórios e métricas", descricao: "Acompanhe a performance da sua ONG com dashboards claros e exportáveis."
    },
    { icone: "✅", titulo: "Verificação facilitada", descricao: "Processo simplificado de validação de adotantes com checklist digital e histórico."}
]


export function ParaOngs(){
    return(
        <section className={sectionStyle} id="para-ongs">
            <div className="max-w-6xl mx-auto px-6">
                <div className={linhaColunas}>
                    {/* ESQUERDA */}
                    <div className="flex-1">
                        <p className={labelStyle}>PARA INSTITUIÇÕES</p>
                        <h1 className={tituloStyle}>Tecnologia a serviço das suas adoções</h1>
                        <p className={paragrafoStyle}>O PetMatch oferece ferramentas modernas para que ONGs e abrigos gerenciem pets, solicitações e adoções em um só lugar.</p>
                        <ul className="space-y-4">
                            {beneficios.map((el)=>{
                                return (
                                    <li key={el.titulo} className="flex items-start gap-3.5">
                                        <span className={circuloIcone}>{el.icone}</span>
                                        <div>
                                        <h3 className="text-sm font-semibold text-zinc-900">{el.titulo}</h3>
                                        <p className="text-sm text-zinc-500 mt-0.5">{el.descricao}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="mt-8">
                        <Link to={"/cadastro/ongs"}><Button variante="primary">Cadastrar minha ONG gratuitamente →</Button></Link>
                        </div>
                    </div>
                    {/* Direita */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <DashBoardMock/>
                    </div>
                </div>
            </div>
        </section>
    )
}


