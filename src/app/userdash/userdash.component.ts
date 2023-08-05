import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { statSync } from 'fs';
import { Game } from '../_model/game';
import { Playcard } from '../_model/playcard';
import { User } from '../_model/user';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(private service: RestService, private router: Router) { }
  games: Game[] = [];
  playcards: Playcard[] = [];
  isok: boolean = false;
  user = new User();
  ngOnInit(): void {
    // if (this.service.getUser().playCards) {
    //   this.games = this.service.getUser().playCards[0].Games
    //   this.isok = true
    // }
    this.playcards = this.service.getUser().playCards

    console.log(this.playcards.length)
    this.service.getuserbyId(this.service.getUser().id).subscribe(d => { this.user = d }, f => console.log(f), () => {
      try {
        if (this.user.playCards) {
          this.service.GetUserGames(this.user.id, this.user.playCards[0].id).subscribe(d => { console.log(d); this.games = d; }, f => console.log(f), () => { if (this.games != null) { this.isok = true } })
        }
      } catch (e) {
        console.log(e);
      }
    });
    // try {
    //   if (this.service.getUser().playCards) {
    //     this.service.GetUserGames(this.service.getUser().id, this.service.getUser().playCards[0].id).subscribe(d => { console.log(d); this.games = d; }, f => console.log(f), () => { if (this.games != null) { this.isok = true } })
    //   }
    // } catch (e) {
    //   console.log(e)

    // }


  }
  startgame(ele: Game) {
    alert("Game Start Shortly ")
    this.router.navigate(['gameroom'])
    // let value: number = (ele.price - (ele.price * (ele.offer / 100)));
    // const status = prompt("Please Pay " + value);
    // if (status === `${value}`) {
    //   alert("Thank you ! Game Start Shortly ")
    //   this.router.navigate(['gameroom'])
    // } else {
    //   alert("Please Complete The Payment")
    // }

  }

}
