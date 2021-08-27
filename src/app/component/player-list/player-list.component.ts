import {Component, OnInit} from '@angular/core';
import {Player} from '../../model/player';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): any {
    this.playerService.getAll().subscribe(data => {
      this.players = data;
    }, error => {
      console.log(error);
    });
  }
}
