import { Card } from "../../../shared/components/Card"

const labelStyle = "text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3"

const titulo = "text-3xl md:text-4xl font-bold text-zinc-900 mb-4"

const subTitulo = "text-zinc-500 max-w-md mx-auto text-lg"

const wrapper = "text-center mb-14"

const circuloIcone = "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-primary-50"

const numeroStyle = "text-5xl font-black mb-3 text-primary-500"

const dadosCard = [{
    numero: "01",
    icone: "✏️",
    titulo: "Cadastre-se",
    descricao: "Crie seu perfil em menos de 2 minutos. Conte um pouco sobre seu espaço, rotina e o tipo de pet que você sonha."
},
{
    numero: "02",
    icone: "❤️",
    titulo: "Dê match com os pets",
    descricao: "Navegue pelos cards de pets disponíveis. Curta os que chamaram atenção — nosso algoritmo aprende suas preferências."
},
{
    numero: "03",
    icone: "🏠",
    titulo: "Adote ou doe",
    descricao: "Converse com a ONG, agende a visita e conclua a adoção. Tudo acompanhado pelo PetMatch do início ao fim."
}]


export function ComoFunciona(){
    return(
        <section id="como-funciona" className="py-20 md:py-28 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-14">
                    <p className={labelStyle}>Como Funciona</p>
                    <h1 className={titulo}>Simples como deveria ser</h1>
                    <h2 className={subTitulo}>Três passos para conectar você ao seu próximo melhor amigo.</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {dadosCard.map((el)=>{
                        return(
                            <Card key={el.numero} className="p-7 h-full">
                                <span className={circuloIcone}>{el.icone}</span>
                                <p className={numeroStyle}>{el.numero}</p>
                                <h1 className="text-lg font-bold text-zinc-900 mb-2">{el.titulo}</h1>
                                <h2 className="text-sm text-zinc-500 leading-relaxed">{el.descricao}</h2>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}