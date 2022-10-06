export interface IResPurchases {
  id: string;
  date: string;
  value: string;
  announcement: {
    id: string;
    title: string;
  };
}

export interface ISetBuyUser {
  value?: string | number;
}
