import client from "../../../shared/api/client";
import { ENDPOINTS } from "../../../shared/constants/endpoints";

export async function fazerDoacao(dados){
    const {data} = await client.post(ENDPOINTS.doacoes.fazerDoacao, dados)
    return data;
}

export async function verDoacoesPorInstituicao(id){
    const {data} = await client.get(ENDPOINTS.doacoes.verDoacao(id))
    return data;
}