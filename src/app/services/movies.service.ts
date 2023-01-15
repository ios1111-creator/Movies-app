import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieDto} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl:string = 'https://api.themoviedb.org/3'
  apiKey:string = '6db7681d01c01a769bb26ed7592c2602'
  constructor(private http: HttpClient) { }

  getMovies(type:string = 'popular'){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
  }

}
