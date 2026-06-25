import { Badge } from "../../../shared/components/Badge"
import { Button } from "../../../shared/components/Button"
import { Link } from "react-router-dom"
const sectionStyle = "hero-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"

const containerStyle = "max-w-6xl mx-auto px-6"

const linhaColunasStyle = "flex flex-col md:flex-row items-center gap-12 md:gap-8"

const colunaEsqStyle = "flex-1 text-center md:text-left"

const colunaDirStyle = "flex justify-center md:justify-end flex-shrink-0"

const textoPrincipalStyle = "text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-tight mb-5"

const subTituloStyle = "text-lg text-zinc-500 mb-8 leading-relaxed max-w-md"

const containerBotaoStyle = "flex flex-col sm:flex-row gap-3 justify-center md:justify-start"

const containerEstatisticaStyle = "flex items-center justify-center md:justify-start gap-6 mt-8 pt-8 border-t border-zinc-100"

const blocoStatStyle = "text-center md:text-left"

const numeroStyle = "text-lg font-bold text-zinc-900"

const rotuloStyle = "text-xs text-zinc-400"

const cardContainerStyle = "relative bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-lg w-[300px]"

const containerImagemStyle = "h-52 flex items-center justify-center bg-primary-50"

const badgeStyle = "absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1 flex items-center gap-1.5 border border-zinc-100 z-10"

const bolinhaStyle = "w-1.5 h-1.5 rounded-full bg-success-500"

export function Hero(){
    return(
        <section className={sectionStyle}>
            <div className={containerStyle}>
                <div className={linhaColunasStyle}>
                    {/* COLUNA ESQUERDA */}
                    <div className={colunaEsqStyle}>
                        <Badge variante="warning">Mais de 1200 pets aguardando!</Badge>
                        <h1 className={textoPrincipalStyle}>Encontre o Pet Ideal para sua família!</h1>
                        <h2 className={subTituloStyle}>Conectamos adotantes e ONGs através de matches inteligentes. Como um Tinder, mas para mudar uma vida de verdade!</h2>
                        <div className={containerBotaoStyle}>
                        <Link to={"/login"}><Button variante="primary" tamanho="sm">❤ Quero adotar</Button></Link>
                        <Link to={"/cadastro/ongs"}><Button variante="secondary" tamanho="sm">🏠 Sou uma ONG</Button></Link>
                        </div>
                        <div className={containerEstatisticaStyle}>
                            <div className={blocoStatStyle}>
                                <p className={numeroStyle}>1.200+</p>
                                <p className={rotuloStyle}>pets cadastrados</p>
                            </div> 
                            <div className={blocoStatStyle}>
                            <p className={numeroStyle}>64</p>
                            <p className={rotuloStyle}>ONGs parceiras</p>
                            </div>
                            <div className={blocoStatStyle}>
                                <p className={numeroStyle}>847</p>
                                <p className={rotuloStyle}>adoções concluidas</p>
                            </div>
                        </div>
                    </div>
                    {/* COLUNA DIREITA */}
                    <div className={colunaDirStyle}>
                    <div className={cardContainerStyle}>
                        <div className={badgeStyle}>
                        <span className={bolinhaStyle}>
                        </span>
                        <span className="text-xs font-medium text-zinc-700">ONG Verificada</span>
                        </div>
                        <div className={containerImagemStyle}>
                            <span className="text-8xl">🐶</span>

                        </div>
                        <div className="p-4">
                            <p className="font-bold text-zinc-900 text-xl">Bolinha</p>
                            <p className="text-sm text-zinc-500">Golden Retriever • 2 Anos</p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    )
}