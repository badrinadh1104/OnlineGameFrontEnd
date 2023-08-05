import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playcard } from '../_model/playcard';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-playcards',
  templateUrl: './playcards.component.html',
  styleUrls: ['./playcards.component.css']
})
export class PlaycardsComponent implements OnInit {

  constructor(private service: RestService, private router: Router) { }

  playcards: Playcard[] = [];
  ngOnInit(): void {
    this.service.ShowPlaycards().subscribe(d => { console.log(d); this.playcards = d }, f => console.log(f));
  }

  addplaycard(ele: Playcard) {
    let value: number = (ele.price - (ele.price * (ele.offer / 100)));
    const status = prompt("Please Pay " + value);
    if (status === `${value}`) {
      this.service.AddPlaycard(this.service.getUser().id, ele.id).subscribe(d => console.log(d), f => console.log(f),
        () => {
          this.service.getuserbyId(this.service.getUser().id).subscribe(d => { console.log(d); this.service.setUser(d) }, f => console.log(f));
          alert("Thank you ! Your Payment is successFull ")
          this.router.navigate(['userdash'])
        });

    } else {
      alert("Please Complete The Payment")
    }


  }

}
