import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "JOHN WICK", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Action/johnWick.jpg", isPopular: true },
            { id: 2, title: "A.R.O.G", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Comedy/arog.jpg", isPopular: false },
            { id: 3, title: "JOKER", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Drama/joker.jpg", isPopular: true },
            { id: 4, title: "LOTR the Fellowship of the Ring", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Fantasy/lotr1.jpg", isPopular: false },
            { id: 5, title: "LOTR the Two Towers", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Fantasy/lotr2.jpg", isPopular: true },
            { id: 6, title: "LOTR Return of the King", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Fantasy/lotr3.jpg", isPopular: false },
            { id: 6, title: "SAW", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Horror/saw.jpg", isPopular: false },
            { id: 7, title: "ZODIAC", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Mystery/zodiac.jpg", isPopular: false },
            { id: 8, title: "THE FAULT IN OUR STARS", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Romance/theFaultInOurStars.jpeg", isPopular: false },
            { id: 9, title: "AWAKE", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Thriller/awake.jpg", isPopular: false }
        ];
    }

    getMovies(): Movie[] {
        return this.movies;
    }
    getPopularMovies(): Movie[] {
        return this.movies.filter(i => i.isPopular);
    }

    getMovieById(id: number): Movie {
        return this.movies.find(item => item.id == id);
    }
}