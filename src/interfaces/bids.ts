export interface IResBids {
  id: string;
  value: string;
  date: string;
  topBid: boolean;
  announcementId: string;
  user: {
    id: string;
    name: string;
    avatarColor: string;
  };
}

export interface IResBidUser {
  id: string;
  value: string;
  date: string;
  topBid: boolean;
  announcement: {
    id: string;
    title: string;
    limitDate: string;
  };
}

export interface ISetBidUser {
  value?: string | number;
}
