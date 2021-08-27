import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { PlayerDetailComponent } from './component/player-detail/player-detail.component';
import { PlayerCreateComponent } from './component/player-create/player-create.component';
import { PlayerEditComponent } from './component/player-edit/player-edit.component';
import { PlayerDeleteComponent } from './component/player-delete/player-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerCreateComponent,
    PlayerEditComponent,
    PlayerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
