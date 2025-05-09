import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchComponent } from '../../components/search/search.component';
import { WebapiService } from '../../services/webapi.service';
import { take } from 'rxjs';
import { Pokemon } from '../../types/pokemon';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Direction, SortBy } from '../../types/search';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SearchComponent, PokemonCardComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  loading = true;
  sortFilter: SortBy = SortBy.Wins;
  directionFilter: Direction = Direction.Ascendent;

  constructor(private webapiService: WebapiService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.loading = true;

    this.webapiService.getPokemons(this.sortFilter, this.directionFilter).pipe(take(1)).subscribe({
      next: (res) => {
        this.pokemons = res;
        this.loading = false;
      }, error: () => {
        this.loading = false;
      }
    })
  }

  sortSearchEvent(event: SortBy): void {
    this.sortFilter = event;
    this.loadPokemons();
  }

  directionSearchEvent(event: Direction): void {
    this.directionFilter = event;
    this.loadPokemons();
  }
}
