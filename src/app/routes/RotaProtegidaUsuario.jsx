import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../shared/contexts/AuthContext";

export function RotaProtegidaUsuario(){
    const {usuario} = useAuth()
    if(usuario == null || usuario.tipo != "usuario"){
        return <Navigate to={'/login'}/>
    }

    return(
      <Outlet/>
    )
}