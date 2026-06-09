import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { criarEndereco } from "../../enderecos/services/enderecoService";
import { criarInstituicao } from "../../instituicoes/services/instituicaoService";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

const ESTADO_INICIAL = {
    nome: "",
    email: "",
    cnpj: "",
    telefone: "",
    link_site: "",
    descricao: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
};

export function CadastroInstituicao() {
    const [form, setForm] = useState(ESTADO_INICIAL);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((anterior) => ({ ...anterior, [name]: value }));
    };

    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            const endereco = await criarEndereco({
                rua: form.rua,
                numero: form.numero,
                complemento: form.complemento,
                bairro: form.bairro,
                cidade: form.cidade,
                estado: form.estado,
                cep: form.cep,
            });

            await criarInstituicao({
                nome: form.nome,
                email: form.email,
                cnpj: form.cnpj,
                telefone: form.telefone,
                link_site: form.link_site,
                descricao: form.descricao,
                endereco_id: endereco.id,
            });

            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-10">
            <div
                className="w-full bg-white rounded-3xl border border-zinc-200 shadow-lg overflow-hidden"
                style={{ maxWidth: 560 }}
            >
                <div className="p-8">
                    <div className="text-center mb-7">
                        <h1 className="text-xl font-bold text-zinc-900">Cadastrar Instituição</h1>
                        <p className="text-sm text-zinc-500 mt-1">
                            Junte-se à rede de ONGs e abrigos parceiros
                        </p>
                    </div>

                    <form onSubmit={handleCadastro}>
                        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                            Dados da ONG
                        </p>
                        <div className="space-y-4 mb-7">
                            <Input
                                label="Nome da instituição"
                                name="nome"
                                placeholder="ONG Amigos de Patas"
                                value={form.nome}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                label="E-mail"
                                name="email"
                                type="email"
                                placeholder="contato@ong.com.br"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <Input
                                    label="CNPJ"
                                    name="cnpj"
                                    placeholder="12345678000199"
                                    value={form.cnpj}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Telefone"
                                    name="telefone"
                                    placeholder="11988887777"
                                    value={form.telefone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Input
                                label="Site"
                                name="link_site"
                                placeholder="https://suaong.com.br"
                                value={form.link_site}
                                onChange={handleChange}
                            />
                            <Input
                                label="Descrição"
                                name="descricao"
                                placeholder="Conte um pouco sobre a sua instituição"
                                value={form.descricao}
                                onChange={handleChange}
                            />
                        </div>

                        {/* SEÇÃO 2 — ENDEREÇO */}
                        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                            Endereço
                        </p>
                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2">
                                    <Input
                                        label="Rua"
                                        name="rua"
                                        placeholder="Av. Paulista"
                                        value={form.rua}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Input
                                    label="Número"
                                    name="numero"
                                    placeholder="1000"
                                    value={form.numero}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Input
                                label="Complemento"
                                name="complemento"
                                placeholder="Apto 10 (opcional)"
                                value={form.complemento}
                                onChange={handleChange}
                            />
                            <Input
                                label="Bairro"
                                name="bairro"
                                placeholder="Bela Vista"
                                value={form.bairro}
                                onChange={handleChange}
                                required
                            />
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2">
                                    <Input
                                        label="Cidade"
                                        name="cidade"
                                        placeholder="São Paulo"
                                        value={form.cidade}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Input
                                    label="Estado"
                                    name="estado"
                                    placeholder="SP"
                                    value={form.estado}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Input
                                label="CEP"
                                name="cep"
                                placeholder="01310100"
                                value={form.cep}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mt-7">
                            <Button full variante="primary">
                                Cadastrar instituição
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