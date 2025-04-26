import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../pokemon.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.scss'
})
export class PokemonsPageComponent {

  pokemons: Pokemon[] = []

  constructor(private apiPokemon: PokemonService) { }

  ngOnInit(){
    this.apiPokemon.getPokemons().subscribe(response => {
      this.pokemons = response.data
      console.log(response.data);
      
    })
    
  }
}
