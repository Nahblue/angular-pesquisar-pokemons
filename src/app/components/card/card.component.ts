import { Component } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  pokemon:PokemonData

  constructor(
    private service:PokemonService
  ) {
    this.pokemon = {
    id: 0,
    name: '',
    sprites: {
      other: '',
      dream_world: '',
      front_default: '',
    },
    types: []

    }
  }

  ngOnInit(): void {
    this.getPokemon('bulbasaur')
  }

  getPokemon(searchName:string) {
    this.service.getPokemon(searchName.toLowerCase()).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites.other.dream_world.front_default,
            types: res.types,
          }
        },
        error: (err) => console.log('not found')
      }
    )
  }
}
