import client from "../../../shared/api/client";
import { ENDPOINTS } from "../../../shared/constants/endpoints";

export async function descobrirPets(usuarioId){
    const {data} = await client.get(ENDPOINTS.matches.verPets, {
        params: { usuario_id: usuarioId }
    })
    return data;
}

export async function descobrirUsuarios(instituicaoId, petId){
    const {data} = await client.get(ENDPOINTS.matches.verUsuarios, {
        params: { instituicao_id: instituicaoId, pet_id: petId }
    })
    return data;
}

export async function fazerMatchUsuario(dados){
    const {data} = await client.post(ENDPOINTS.matches.fazerMatchUsuario, dados)
    return data;
}

export async function fazerMatchInstituicao(dados){
    const {data} = await client.post(ENDPOINTS.matches.fazerMatchInstituicao, dados)
    return data;
}

export async function verMatchesPorUsuario(id){
    const {data} = await client.get(ENDPOINTS.matches.verUsuarioEspecifico(id))
    return data;
}

export async function verMatchesPorInstituicao(id){
    const {data} = await client.get(ENDPOINTS.matches.verInstituicao(id))
    return data;
}