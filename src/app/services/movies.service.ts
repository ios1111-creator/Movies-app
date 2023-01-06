import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=6db7681d01c01a769bb26ed7592c2602')
  }
}
