import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) { }

  private setAllPokemon: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemon = res.results;
        this.getAllPokemons = this.setAllPokemon;
      },
      error =>{
        this.apiError = true;
      }
    )
  };

  public getSearch(value: String){
    const filter = this.setAllPokemon.filter( (res: any) => {
        return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons = filter;
  }

}
