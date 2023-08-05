import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { CaredashComponent } from './caredash/caredash.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { LoginComponent } from './login/login.component';
import { PlaycardsComponent } from './playcards/playcards.component';
import { RegisterComponent } from './register/register.component';
import { UserdashComponent } from './userdash/userdash.component';

const routes: Routes = [
  { path: "userdash", component: UserdashComponent },
  { path: "admindash", component: AdmindashComponent },
  { path: "ccaredash", component: CaredashComponent },
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "gameroom", component: GameRoomComponent },
  { path: "askQuestion", component: AskQuestionComponent },
  { path: "playcard", component: PlaycardsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
