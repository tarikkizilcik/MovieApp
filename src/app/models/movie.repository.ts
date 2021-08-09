import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "JOHN WICK", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Action/johnWick.jpg", isPopular: true, datePublished: new Date(1907, 5, 6), categoryId: 1 },
            { id: 2, title: "A.R.O.G", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Comedy/arog.jpg", isPopular: false, datePublished: new Date(1907, 8, 9), categoryId: 2 },
            { id: 3, title: "JOKER", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Drama/joker.jpg", isPopular: true, datePublished: new Date(1907, 10, 12), categoryId: 3 },
            { id: 4, title: "LOTR the Fellowship of the Ring", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Fantasy/lotr1.jpg", isPopular: false, datePublished: new Date(1907, 11, 12), categoryId: 4 },
            { id: 5, title: "LOTR the Two Towers", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Fantasy/lotr2.jpg", isPopular: true, datePublished: new Date(1907, 12, 12), categoryId: 4 },
            { id: 6, title: "LOTR Return of the King", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Fantasy/lotr3.jpg", isPopular: false, datePublished: new Date(1907, 2, 19), categoryId: 4 },
            { id: 7, title: "SAW", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Horror/saw.jpg", isPopular: false, datePublished: new Date(1907, 2, 18), categoryId: 5 },
            { id: 8, title: "ZODIAC", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Mystery/zodiac.jpg", isPopular: false, datePublished: new Date(1907, 9, 5), categoryId: 6 },
            { id: 9, title: "THE FAULT IN OUR STARS", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Romance/theFaultInOurStars.jpeg", isPopular: false, datePublished: new Date(1907, 2, 3), categoryId: 7 },
            { id: 10, title: "AWAKE", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum.", imageUrl: "Thriller/awake.jpg", isPopular: false, datePublished: new Date(1907, 8, 7), categoryId: 8 }
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