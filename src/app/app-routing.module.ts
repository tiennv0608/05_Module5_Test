import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerListComponent} from './component/player-list/player-list.component';
import {PlayerCreateComponent} from './component/player-create/player-create.component';
import {PlayerDetailComponent} from './component/player-detail/player-detail.component';
import {PlayerEditComponent} from './component/player-edit/player-edit.component';
import {PlayerDeleteComponent} from './component/player-delete/player-delete.component';

const routes: Routes = [{
  path: 'players',
  component: PlayerListComponent
}, {
  path: 'players/create',
  component: PlayerCreateComponent
}, {
  path: 'players/detail/:id',
  component: PlayerDetailComponent
}, {
  path: 'players/edit/:id',
  component: PlayerEditComponent
}, {
  path: 'players/delete/:id',
  component: PlayerDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
