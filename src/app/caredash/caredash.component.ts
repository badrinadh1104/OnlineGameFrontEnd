import { Component, OnInit } from '@angular/core';
import { Query } from '../_model/query';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-caredash',
  templateUrl: './caredash.component.html',
  styleUrls: ['./caredash.component.css']
})
export class CaredashComponent implements OnInit {

  constructor(private service: RestService) { }
  queries: Query[] = [];
  ngOnInit(): void {
    this.service.getAllquries().subscribe(d => { console.log(d); this.queries = d }, f => console.log(f))
  }

  addResponse(ele: Query, res: string) {
    this.service.AddResponse(ele.id, res).subscribe(d => { alert("response given Successfylly"); console.log(d); this.ngOnInit() }, f => console.log(f));
  }

}
