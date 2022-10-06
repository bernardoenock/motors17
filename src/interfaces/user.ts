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
  avatarColor?: string;
}

export interface IUserRegister {
  email?: string;
  password?: string;
  name?: string;
  cpf?: string;
  phone?: string;
  birhtDate?: string;
  description?: string;
  typeAccount?: string;
  zipCode?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string | number;
  complement?: string;
  confirmPassword?: string;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birhtDate?: string | Date;
  description?: string;
}

export interface IAccount {
  id?: string;
  name?: string;
  description?: string;
  isSeller?: boolean;
  avatarColor?: string;
}

export interface ILogin {
  email?: string;
  password?: string;
}

export interface IUpdatePassword {
  currentPassword?: string;
  newPassword?: string;
}

export interface IRecoveryPassword {
  accessToken?: string;
  newPassword?: string;
}
