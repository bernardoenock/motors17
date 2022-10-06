export interface IAddressData {
  zipCode?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}

export interface IResAddress {
  id?: string;
  zipCode?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
  mainAddress?: boolean;
  userId?: string;
}
