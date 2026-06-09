import { useState, useEffect } from "react";
import { useAuth } from "../../../shared/contexts/AuthContext";
import { descobrirPets, fazerMatchUsuario } from "../../matches/services/matchService";

export function Descobrir() {
    const { usuario } = useAuth();

    const [pets, setPets] = useState([]);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const carregarPets = async () => {
            try {
                const data = await descobrirPets(usuario.id);
                setPets(data);
            } catch (error) {
                console.error(error);
            } finally {
                setCarregando(false);
            }
        };
        carregarPets();
    }, [usuario.id]);

    const petAtual = pets[indiceAtual];

    const handleSwipe = async (tipo) => {
        if (!petAtual) return;
        try {
            await fazerMatchUsuario({
                usuario_id: usuario.id,
                pet_id: petAtual.id,
                tipo,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIndiceAtual((anterior) => anterior + 1);
        }
    };

    if (carregando) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-zinc-400 text-sm">Carregando pets...</p>
            </div>
        );
    }

    const acabaram = !petAtual;

    return (
        <div className="px-6 py-10">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-zinc-900">Descubra seu match</h1>
                    <p className="text-sm text-zinc-500 mt-1">
                        Curta ❤ os pets que combinam com você
                    </p>
                </div>

                {acabaram ? (
                    <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-10 text-center">
                        <div className="text-5xl mb-4">🐾</div>
                        <h3 className="font-bold text-zinc-900 mb-1">
                            Não há mais pets por aqui
                        </h3>
                        <p className="text-sm text-zinc-500">
                            Você já viu todos os disponíveis. Volte mais tarde para
                            conhecer novos amigos!
                        </p>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl border border-zinc-200 shadow-lg overflow-hidden">

                        <div className="h-56 flex items-center justify-center bg-primary-50 relative">
                            <span className="text-8xl">🐶</span>
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1 flex items-center gap-1.5 border border-zinc-100">
                                <div className="w-1.5 h-1.5 rounded-full bg-success-500" />
                                <span className="text-xs font-medium text-zinc-700">
                                    Disponível
                                </span>
                            </div>
                        </div>


                        <div className="p-5">
                            <h3 className="font-bold text-zinc-900 text-xl leading-none">
                                {petAtual.name}
                            </h3>
                            <p className="text-sm text-zinc-500 mt-1.5">
                                {petAtual.type}
                                {petAtual.cor ? ` · ${petAtual.cor}` : ""}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {petAtual.vacinado && (
                                    <span className="px-2.5 py-1 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600">
                                        Vacinado
                                    </span>
                                )}
                                {petAtual.castrado && (
                                    <span className="px-2.5 py-1 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600">
                                        Castrado
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center justify-center gap-5 mt-6">
                                <button
                                    onClick={() => handleSwipe("pass")}
                                    className="w-14 h-14 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-2xl hover:border-zinc-300 transition-colors"
                                >
                                    ✕
                                </button>
                                <button
                                    onClick={() => handleSwipe("like")}
                                    className="w-16 h-16 rounded-full bg-primary-500 hover:bg-primary-600 flex items-center justify-center text-2xl text-white transition-colors"
                                >
                                    ❤
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}