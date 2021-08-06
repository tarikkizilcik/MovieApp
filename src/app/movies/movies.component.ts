import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Movie List"
  movies: Movie[];
  filteredMovies: Movie[];
  // popularMovies: Movie[];
  movieRepository: MovieRepository;
  // today = new Date();
  filterSearch: string = "";

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    // this.filteredMovies = this.movies;
    // this.popularMovies = this.movieRepository.getPopularMovies();

  }
  ngOnInit(): void {
  }

  // onInputChange() {
  //   this.filteredMovies = this.filterSearch ?
  //     this.movies.filter(m => m.title.indexOf(this.filterSearch) !== -1) : this.movies;
  // }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Remove from List";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
    } else {
      $event.target.innerText = "Add to the list";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
    }
  }

}
