import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  constructor(private moviesServices: MoviesService) { }

  ngOnInit(): void {
    this.moviesServices.searchMovies(2).subscribe((response) => {
      this.movies = response
    })
  }

}
