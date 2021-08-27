import {Component, OnInit} from '@angular/core';
import {Player} from '../../model/player';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {
  player: Player = {};
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });
  id?: any;

  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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
      this.playerForm = new FormGroup({
        name: new FormControl(data.name),
        champ: new FormControl(data.champ),
        kda: new FormControl(data.kda),
        des: new FormControl(data.des),
      });
    });
  }

  delete(id: number) {
    this.playerService.delete(id).subscribe(() => {
      alert('Xóa thành công');
      this.router.navigate(['players']);
    });
  }
}
