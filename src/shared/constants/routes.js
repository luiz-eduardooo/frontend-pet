
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRO: '/registro',

  PETS: '/pets',
  PET_DETALHE: '/pets/:id',


  INSTITUICOES: '/instituicoes',
  INSTITUICAO_DETALHE: '/instituicoes/:id',

  MATCHES: '/matches',
  MATCHES_DESCOBRIR: '/matches/descobrir',

  ADOCOES: '/adocoes',
  ADOCAO_DETALHE: '/adocoes/:id',

  RESGATES: '/resgates',
  RESGATE_REPORTAR: '/resgates/reportar',

  DOACOES: '/doacoes',
  DOACAO_NOVA: '/doacoes/nova',

  PERFIL: '/perfil',

  NOT_FOUND: '*',
};


export const buildRoute = (route, id) => route.replace(':id', String(id));

export default ROUTES;