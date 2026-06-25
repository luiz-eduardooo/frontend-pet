import { Button } from "../../../shared/components/Button"
import { Link } from "react-router-dom"

const sectionStyle = "py-20 md:py-28 bg-white"

const container = "max-w-4xl mx-auto px-6"

const banner = "rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center bg-primary-50"

const titulo = "text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4"

const subTitulo = "text-lg text-zinc-600 mb-8 max-w-md mx-auto leading-relaxed"

const containerButton = "flex flex-col sm:flex-row items-center justify-center gap-3"

export function BannerCTA(){
    return(
        <section className={sectionStyle}>
            <div className={container}>
                <div className={banner}>
                    <div className="text-4xl mb-4">🐾</div>
                    <h2 className={titulo}>Pronto pra mudar uma vida?</h2>
                    <p className={subTitulo}>Mais de 1.200 pets estão esperando por você agora. Cadastre-se grátis e faça seu primeiro match hoje.</p>
                    <div className={containerButton}>
                    <Link to={"/login"}><Button tamanho="lg" variante="primary">Começar agora — é grátis ❤</Button></Link>
                        <Link to={"/adotante/matches"}><Button tamanho="lg" variante="secondary">Ver pets disponíveis</Button></Link>
                    </div>
                    <p className="text-xs text-zinc-400 mt-5">Sem cartão de crédito · Cadastro em 2 minutos</p>
                </div>
            </div>
        </section>
    )
}