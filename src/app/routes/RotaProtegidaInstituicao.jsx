import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../shared/contexts/AuthContext";


export function RotaProtegidaInstituicao(){
    const {usuario} = useAuth();

    if(instituicao == null || instituicao.tipo != "instituicao"){
        return <Navigate to={"/login/instituicao"}/>
    }

    return(
        <Outlet/>
    )
}