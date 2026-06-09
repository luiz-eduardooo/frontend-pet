import { useState } from "react";
import { criarUsuario } from "../../usuarios/services/usuarioService";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

export function CadastroUsuario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlerCadastroUsuario = async (e) => {
        e.preventDefault();
        try {
            await criarUsuario({ name, email, password });
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
            <div
                className="w-full bg-white rounded-3xl border border-zinc-200 shadow-lg overflow-hidden"
                style={{ maxWidth: 420 }}
            >
                <div className="p-8">
                    <div className="text-center mb-7">
                        <h1 className="text-xl font-bold text-zinc-900">Criar sua conta</h1>
                        <p className="text-sm text-zinc-500 mt-1">
                            Comece a encontrar seu novo melhor amigo
                        </p>
                    </div>

                    <form onSubmit={handlerCadastroUsuario}>
                        <div className="space-y-4">
                            <Input
                                label="Nome completo"
                                type="text"
                                placeholder="João da Silva"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <Input
                                label="E-mail"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                label="Senha"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <Button full variante="primary">
                                Criar conta
                            </Button>
                        </div>
                    </form>

                    <div className="text-center mt-6 text-sm text-zinc-500">
                        <p>
                            Já tem conta?{" "}
                            <Link to="/login" className="text-primary-600 font-medium">
                                Entrar
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}