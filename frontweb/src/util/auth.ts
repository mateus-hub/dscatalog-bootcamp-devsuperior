import { Role } from "types/role";

import { getTokenData } from "./token";

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
};

//função p testar dado uma lista de 'roles' perfis de usuário, se o usuario atual possui algum role da lista
export const hasAnyRoles = (roles: Role[]): boolean => {
  if (roles.length === 0) {
    return true;
  }

  // pegar dados do usuario logado no localstorage
  const tokenData = getTokenData();

  /* Forma alternativa "Função de alta ordem"
    if(tokenData !== undefined) {
      return roles.some(role => tokenData.authorities.includes(role));
    }*/

  if (tokenData !== undefined) {
    for (var i = 0; i < roles.length; i++) {
      if (tokenData.authorities.includes(roles[i])) {
        return true;
      }
    }
  }

  return false;
};
