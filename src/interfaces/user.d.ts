export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  birhtDate?: string;
  cpf?: string;
  phone?: string;
  description?: string;
  isSeller?: boolean;
  isActivate?: boolean;
}

export interface IUserRegister {
  email?: string;
  password?: string;
  name?: string;
  cpf?: string;
  phone?: string;
  birhtDate?: string;
  description?: string;
  zipCode?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
  confirmPassword?: string;
}

export interface IRegister {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birhtDate?: string | Date;
  description?: string;
  password?: string;
  typeAccount?: string;
  zipCode?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number | string;
  complement?: string;
}
