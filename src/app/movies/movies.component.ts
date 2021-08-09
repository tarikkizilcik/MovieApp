import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  title = "Movie List"
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  // popularMovies: Movie[];
  movieRepository: MovieRepository;
  // today = new Date();
  filterSearch: string = "";
  errorMessage: any;

  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    // this.filteredMovies = this.movies;
    // this.popularMovies = this.movieRepository.getPopularMovies();

  }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params["categoryId"]);
    // })
    // this.movieService.getMovies(1).subscribe(data => {
    //   this.movies = data;
    // }, error => this.errorMessage = error)
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

      this.alertify.success(movie.title + ' added to the list.');
    } else {
      $event.target.innerText = "Add to the list";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      this.alertify.error(movie.title + ' removed from the list.');
    }
  }

}
