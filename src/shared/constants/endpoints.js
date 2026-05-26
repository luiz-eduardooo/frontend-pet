const ENDPOINTS = {
    usuario:{
        base: "/usuarios",
        criar: "/usuarios",
        login: "/usuarios/login",
        verPorId: (id)=> `/usuarios/${id}`,
        modificar: (id)=> `/usuarios/${id}`,
        deletar: (id)=> `/usuarios/${id}`
    },
    instituicoes:{
        base: "/instituicoes",
        criar: "/instituicoes",
        verPorId: (id)=> `/instituicoes/${id}`,
        modificar: (id)=> `/instituicoes/${id}`,
        deletar: (id)=> `/instituicoes/${id}`
    },
    pets:{
        base: "/pets",
        criar: "/pets",
        verTodos: "/pets",
        verPorId: (id)=> `/pets/${id}`,
        modificar: (id)=> `/pets/${id}`,
        deletar: (id)=> `/pets/${id}`
    },
    usuario:{
        base: "/usuarios",
        criar: "/usuarios",
        login: "/usuarios/login",
        verPorId: (id)=> `/usuarios/${id}`,
        modificar: (id)=> `/usuarios/${id}`,
        deletar: (id)=> `/usuarios/${id}`
    },
    matches:{
        base: "/matches",
        verUsuarios: "/matches/discover/usuarios",
        verPets: "/matches/discover/pets",
        verInstituicao: (id)=> `/matches/instituicao/${id}`,
        verUsuarioEspecifico: (id) => `/matches/usuario/${id}`,
        fazerMatchUsuario: "/matches/swipe/usuario",
        fazerMatchInstituicao: "/matches/swipe/instituicao"
    },
    adocao:{
        base: "/adocoes",
        fazerAdocao: "/adocoes",
        verAdocao: (id) => `/adocoes/usuario/${id}`,
        mudarAdocao: (id)=> `/adocoes/${id}/status`
    },
    doacoes:{
        base: "/doacoes",
        fazerDoacao: "/doacoes",
        verDoacao: (id)=> `/doacoes/instituicao/${id}`
    },
    enderecos:{
        base: "/enderecos",
        verEnderecoEspecifico: (id)=> `/enderecos/${id}`
    }

}