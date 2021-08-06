import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], filterSearch: string): Movie[] {
    filterSearch = filterSearch.toLowerCase();
    // console.log(filterSearch);
    // console.log(movies);

    return filterSearch ? movies.filter((m: Movie) =>
      m.title.toLowerCase().indexOf(filterSearch) !== -1 || m.description.toLowerCase().indexOf(filterSearch) !== -1) : movies;
  }

}
