import {Component, OnInit} from '@angular/core';
import {Player} from '../../model/player';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  player: Player = {};
  id?: number;

  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  findById(id: number) {
    return this.playerService.findById(id).subscribe(data => {
      this.player = data;
    });
  }
}
