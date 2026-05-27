import client from "../../../shared/api/client";
import { ENDPOINTS } from "../../../shared/constants/endpoints";

export async function fazerAdocao(dados){
    const {data} = await client.post(ENDPOINTS.adocao.fazerAdocao, dados)
    return data;
}

export async function verAdocoesPorUsuario(id){
    const {data} = await client.get(ENDPOINTS.adocao.verAdocao(id))
    return data;
}

export async function mudarStatusAdocao(id, status){
    const {data} = await client.patch(ENDPOINTS.adocao.mudarAdocao(id), { status })
    return data;
}