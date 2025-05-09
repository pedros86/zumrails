import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { BattleComponent } from '../pages/battle/battle.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'battle', component: BattleComponent },
  { path: '**', component: NotFoundComponent }
];
