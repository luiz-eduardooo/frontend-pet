import client from "../../../shared/api/client";
import { ENDPOINTS } from "../../../shared/constants/endpoints";


export async function criarPet(dados){
    const {data} = await client.post(ENDPOINTS.pets.criar, dados)
    return data
}

export async function verPets(){
    const {data} = await client.get(ENDPOINTS.pets.verTodos)
    return data
}

export async function verPetsPorId(id){
    const {data} = await client.get(ENDPOINTS.pets.verPorId(id))
    return data
}

export async function modificarPet(id, dados){
    const {data} = await client.patch(ENDPOINTS.pets.modificar(id), dados)
    return data;
}


export async function deletarPet(id){
    await client.delete(ENDPOINTS.pets.deletar(id))
}