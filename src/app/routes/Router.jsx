import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RotaProtegidaUsuario } from "./RotaProtegidaUsuario";
import { LandingPage } from "../../features/landing/pages/LandingPage";
import LoginUsuario from "../../features/landing/pages/LoginUsuario";
import { CadastroUsuario } from "../../features/landing/pages/CadastroUsuario";
import { LayoutAdotante } from "../../features/adotantes/LayoutAdotante";
import { CadastroInstituicao } from "../../features/landing/pages/CadastroInstituicao";

export function Router() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<LoginUsuario />}></Route>
            <Route path="/cadastro" element={<CadastroUsuario />}
            ></Route>
            <Route path="/cadastro/ongs" element={<CadastroInstituicao/>}/>
            <Route element={<RotaProtegidaUsuario />}>
                <Route element={<LayoutAdotante />}>
                    <Route path="/adotante/home" element={<div></div>}/>
                    <Route path="/adotante/matches" element={<div></div>} />
                    <Route path="/adotante/adocoes" element={<div></div>} />
                    <Route path="/adotante/instituicoes" element={<div></div>} />
                    <Route path="/adotante/resgate" element={<div></div>} />
                    <Route path="/adotante/perfil" element={<div></div>} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}