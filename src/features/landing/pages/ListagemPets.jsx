import { useEffect, useState } from "react";
import { verPets } from "../../pets/services/petService";
import { useAuth } from "../../../shared/contexts/AuthContext";

export function ListagemPets(){
    const [pets, setPets] = useState([])
    const handlerListarPets = async()=>{
        try{
            const data = await verPets()
            setPets(data);
        }
        catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        handlerListarPets();
    }, [])

    return (
        <div>
            {pets.map((el)=>{
                return(
                    <div key={el.id}>
                        {el.name}
                    </div>
                )
            })}
        </div>
    )
}