import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  playerGroup: FormGroup = new FormGroup({});

  constructor(private playerService: PlayerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.playerGroup = new FormGroup({
      name: new FormControl(),
      champ: new FormControl(),
      kda: new FormControl(),
      des: new FormControl()
    });
  }

  submit() {
    const player = this.playerGroup.value;
    this.playerService.create(player).subscribe(() => {
      alert('Created successful!');
      this.router.navigate(['players']);
    }, error => {
      console.log(error);
    });
  }

}
