export interface ArticleType {
  id: string;
  title: string;
  content: string;
  price: number;
  thumbnail: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
}
