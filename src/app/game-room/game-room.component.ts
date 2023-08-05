import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css']
})
export class GameRoomComponent implements OnInit {

  constructor(private router: Router, private service: RestService) { }
  sec: number = 0;
  min: number = 0;
  hour: number = 1;
  obj: any;
  ngOnInit(): void {
    this.obj = setInterval(() => {
      if (this.sec == 0) {
        if (this.hour > 0 && this.min == 0) {
          this.hour--;
          this.min = 60;
        }
        if (this.min > 0) {
          this.min--;
          this.sec = 60
        }

      }
      if (this.sec == 0 && this.min == 0 && this.hour == 0) {
        this.service.RemoveCards(this.service.getUser().id).subscribe(d => {
          clearInterval(this.obj);
          alert("You are done")
          this.router.navigate(['playcard'])
          console.log(d)
        }, f => console.log(f), () => { this.service.getuserbyId(this.service.getUser().id).subscribe(d => { console.log(d); this.service.setUser(d) }, f => console.log(f)) })


      } else {
        this.sec--;
      }

    }, 1000)
  }

  exitgame() {
    this.service.RemoveCards(this.service.getUser().id).subscribe(d => {
      clearInterval(this.obj);
      alert("You are done")
      this.router.navigate(['playcard'])
      console.log(d)
    }, f => console.log(f), () => { this.service.getuserbyId(this.service.getUser().id).subscribe(d => { console.log(d); this.service.setUser(d) }, f => console.log(f)) })

  }

}
