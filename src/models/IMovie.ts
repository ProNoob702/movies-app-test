export type MovieGenre = "action" | "adventure" | "drama" | "fantasy";

export interface IMovie {
  id: string;
  name: string;
  genre: MovieGenre[];
  descriptionHtml: string;
  descriptionRaw: string;
  imgUrl: string;
}

export const GenreArr: MovieGenre[] = ["action", "adventure", "drama", "fantasy"];
