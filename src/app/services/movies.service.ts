import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieDto} from "../models/movie";
import {of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3'
  apiKey: string = '6db7681d01c01a769bb26ed7592c2602'

  constructor(private http: HttpClient) {
  }

  getMovies(type: string = 'popular', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0,count))
      }))
  }

  searchMovies(search:number){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${search}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of (res.results)
      }))
  }

}
