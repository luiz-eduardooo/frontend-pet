import { ENDPOINTS } from "../../../shared/constants/endpoints";
import client from "../../../shared/api/client";


export async function buscarUsuarioPorId(id){
    const {data} = await client.get(ENDPOINTS.usuario.base(id));
    return data;
}

export async function deletarUsuario(id) {
    await client.delete(ENDPOINTS.usuario.deletar(id))
}

export async function criarUsuario(dados){
    const {data} = await client.post(ENDPOINTS.usuario.criar, dados);
    return data;
}

export async function loginUsuario(dados){
    const {data} = await client.post(ENDPOINTS.usuario.login, dados)
    return data;
}   

export async function modificarUsuario(id, dados){
    const {data} = await client.patch(ENDPOINTS.usuario.modificar(id), dados)
    return data;
}


