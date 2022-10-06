export interface IRegisterAnnounce {
  title?: string;
  description?: string;
  year?: string;
  km?: string;
  price?: number;
  isActive?: boolean;
  type?: string;
  typeVehicle?: string;
  limitDate?: string;
  images?: File[];
}

export interface IDataAnnounce {
  title?: string;
  description?: string;
  year?: string;
  km?: string;
  price?: number;
}

export interface IAnnounceRes {
  id?: string;
  title?: string;
  description?: string;
  price?: string;
  km?: string;
  year?: string;
  type?: type;
  typeVehicle?: typeVehicle;
  isActive?: boolean;
  limitDate?: string;
  publishedData?: string;
  seller?: { name: string; id: string; avatarColor: string };
  status?: string;
  imagesUrl?: string[];
}

export interface IFiltersParams {
  ltDataLimit?: string;
  gtDataLimit?: string;
  ltPrice?: number;
  gtPrice?: number;
  type?: type | string;
  typeVehicle?: typeVehicle | string;
  ltYear?: number;
  gtrYear?: number;
  title?: string;
}

export enum type {
  auction = "auction",
  sale = "sale",
}

export enum typeVehicle {
  car = "car",
  motocycle = "motocycle",
}
