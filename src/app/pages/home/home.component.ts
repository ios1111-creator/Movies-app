import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = []
  upcomingMovies: Movie[] = []

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response) => {
      this.popularMovies = response
    })
    this.moviesService.getMovies('top_rated').subscribe((response) => {
      this.topRatedMovies = response
    })
    this.moviesService.getMovies('upcoming').subscribe((response) => {
      this.upcomingMovies = response
    })
  }

}
