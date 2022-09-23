export type MovieGenre = "action" | "adventure" | "drama" | "fantasy";

export interface IMovie {
  id: string;
  name: string;
  genre: MovieGenre[];
  description: string;
  imgUrl: string;
}

//   action = "action" ,
//   adventure =  "adventure",
//   comedy =   "comedy",
//   drama = "drama",
//   fantasy = "fantasy",
//   horror = "horror",
// }
