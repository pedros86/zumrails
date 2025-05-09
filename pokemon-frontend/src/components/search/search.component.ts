import { Component, EventEmitter, Output } from '@angular/core';
import { Direction, SortBy } from '../../types/search';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  sortFilter = SortBy.Wins;
  sortBy = SortBy;
  sortOptions = [SortBy.Wins, SortBy.Losses, SortBy.Ties];
  @Output() sortEvent = new EventEmitter<SortBy>();
  
  directionFilter = Direction.Ascendent;
  direction = Direction;
  directionOptions = [Direction.Ascendent, Direction.Descendent];
  @Output() directionEvent = new EventEmitter<Direction>();


  onSortChange(): void {
    this.sortEvent.emit(this.sortFilter);
  }
  
  onDirectionChange(): void {
    this.directionEvent.emit(this.directionFilter);
  }
}
