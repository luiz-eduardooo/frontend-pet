import client from "../../../shared/api/client";
import { ENDPOINTS } from "../../../shared/constants/endpoints";

export async function reportarResgate(dados){
    const {data} = await client.post(ENDPOINTS.resgates.reportar, dados)
    return data;
}