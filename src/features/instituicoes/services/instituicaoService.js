import client from "../../../shared/api/client";
import { ENDPOINTS } from "../../../shared/constants/endpoints";

export async function listarInstituicoes(){
    const {data} = await client.get(ENDPOINTS.instituicoes.base)
    return data;
}

export async function criarInstituicao(dados){
    const {data} = await client.post(ENDPOINTS.instituicoes.criar, dados)
    return data
}

export async function verInstituicaoPorId(id){
    const {data} = await client.get(ENDPOINTS.instituicoes.verPorId(id))
    return data
}

export async function modificarInstituicao(id, dados){
    const {data} = await client.patch(ENDPOINTS.instituicoes.modificar(id), dados)
    return data;
}

export async function deletarInstituicao(id){
    await client.delete(ENDPOINTS.instituicoes.deletar(id))
}

