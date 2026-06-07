import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RotaProtegidaUsuario } from "./RotaProtegidaUsuario";
import { LandingPage } from "../../features/landing/pages/LandingPage";
import LoginUsuario from "../../features/landing/pages/LoginUsuario";
import { CadastroUsuario } from "../../features/landing/pages/CadastroUsuario";

export function Router(){
   return( <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<LoginUsuario/>}></Route>
        <Route path="/cadastro" element={<CadastroUsuario/>}></Route>
        <Route element={RotaProtegidaUsuario}>
            {/* Adicionar depois !!!!! */}
        </Route>
    </Routes>
    </BrowserRouter>
   )
}