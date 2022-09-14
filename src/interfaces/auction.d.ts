export interface IRegisterAuction {
  title?: string;
  description?: string;
  year?: string;
  km?: string;
  price?: number;
  isActive?: boolean;
  type?: string;
  typeVehicle?: string;
  limitDate?: string;
  images?: string;
}

export interface IDataAuction {
  title?: string;
  description?: string;
  year?: string;
  km?: string;
  price?: number;
}

export interface IAuctionRes {
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
  seller?: { name: string; id: string };
  status?: string;
  imagesUrl?: string[];
}

export interface IFiltersParams {
  ltDataLimit?: string;
  gtDataLimit?: string;
  ltPrice?: number;
  gtPrice?: number;
  type?: type;
  typeVehicle?: typeVehicle;
  ltYear?: number;
  gtrYear?: number;
  title?: string;
}

enum type {
  auction = "auction",
  sale = "sale",
}

enum typeVehicle {
  car = "car",
  motocycle = "motocycle",
}
