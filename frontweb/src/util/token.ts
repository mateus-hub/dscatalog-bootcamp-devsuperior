// Arquivo para o que for manipular token devem ser passados pra cá

import jwtDecode from "jwt-decode";
import { Role } from "types/role";
import { getAuthData } from "./storage";

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

// Funções auxiliares para testar os roles "perfis de usuários (manipular tokens, roles etc...)"
export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};
