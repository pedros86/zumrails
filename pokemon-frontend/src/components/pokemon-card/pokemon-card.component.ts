import { Component, Input } from '@angular/core';
import { Pokemon } from '../../types/pokemon';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [ProgressBarComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() pokemon?: Pokemon;

  // TODO: 1) Move it to a /lib layer to share this resource. 2) Create unit tests
  getProgress(): number {
    if (!this.pokemon) return 0;
    
    const total = this.pokemon?.wins + this.pokemon?.losses + this.pokemon?.ties;

    return Math.round(this.pokemon?.wins / total * 100);
  }

  getColorType(): string {
    let result = '#334155';
    
    const color = this.pokemon?.types.at(0)?.type.name;

    if (!color) return result;

    switch (color) {
      case 'water':
        result = '#0083ef'
        break;

      case 'ground':
        result = '#ef4500'
        break;
      
      case 'rock':
        result = '#18a0ff'
        break;
      
      case 'electric':
        result = '#bfad00'
        break;
      
      case 'fire':
        result = '#ff0000'
        break;
      
      case 'psychic':
        result = '#8f00ca'
        break;
      
      case 'dragon':
        result = '#3191a2'
        break;
      
      case 'bug':
        result = '#3191a2'
        break;
      
      case 'poison':
        result = '#8f00ca'
        break;
    
      default:
        break;
    }

    return result
  }
  // TODO: end
}
