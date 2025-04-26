import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './../pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUri: string = "https://api.pokemontcg.io/v2/cards"

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.apiUri)
  }

}
