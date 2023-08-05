import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Query } from '../_model/query';
import { User } from '../_model/user';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor(private service: RestService, private router: Router) { }
  user: User = new User();
  questions: Query[] = []
  ngOnInit(): void {
    this.user = this.service.getUser()
    this.service.getUserQuestions(this.user.id).subscribe(d => { console.log(d); this.questions = d }, f => console.log(f));
  }
  addQuestion(question: string) {
    this.service.AddQuestion(question, this.user.id).subscribe(d => { console.log(d); this.ngOnInit(); alert("question Added") }, f => console.log(f));
  }

}
