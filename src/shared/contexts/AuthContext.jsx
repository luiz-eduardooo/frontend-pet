import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null)


export function AuthProvider({children}){
    const [usuario, setUsuario] = useState(()=>{
        return JSON.parse(localStorage.getItem('usuario'))
    })


    function entrar(dados){
        setUsuario(dados);

        localStorage.setItem('token', dados.token);
        localStorage.setItem('usuario', JSON.stringify(dados))
    }

    function sair(){
        setUsuario(null);
        localStorage.removeItem('usuario')
        localStorage.removeItem('token')
    }

    return(
        <AuthContext.Provider value={{ usuario, entrar, sair }}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(){
        return useContext(AuthContext)
    }

