export interface IResComment {
  announcementId: string;
  user: {
    id: string;
    name: string;
    avatarColor: string;
  };
  comment: string;
  id: string;
  publishedData: string;
}
