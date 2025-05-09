import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon';
import { Direction, SortBy } from '../types/search';

const BASE_URL = 'http://localhost:5095';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemons(sort: SortBy, direction: Direction) {
    return this.httpClient.get<Pokemon[]>(BASE_URL + '/pokemon/tournament/statistics' + `?sortBy=${sort}&sortDirection=${direction}`);
  }
}
