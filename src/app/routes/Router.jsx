import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RotaProtegidaUsuario } from "./RotaProtegidaUsuario";
import { LandingPage } from "../../features/landing/pages/LandingPage";

export function Router(){
   return( <BrowserRouter>
    <Routes>
        <Route path="/" element={<div>#</div>}></Route>
        <Route element={RotaProtegidaUsuario}>
            {/* Adicionar depois !!!!! */}
        </Route>
    </Routes>
    </BrowserRouter>
   )
}