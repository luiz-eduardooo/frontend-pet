import client from "../../../shared/api/client";
import { ENDPOINTS } from "../../../shared/constants/endpoints";
export async function listarEnderecos(){
    const {data} = await client.get(ENDPOINTS.enderecos.base)
    return data
}

export async function criarEndereco(dados){
    const {data} = await client.post(ENDPOINTS.enderecos.base, dados)
    return data
}

export async function verEnderecoEspecifico(id){
    const {data} = await client.get(ENDPOINTS.enderecos.verEnderecoEspecifico(id))
    return data;
}