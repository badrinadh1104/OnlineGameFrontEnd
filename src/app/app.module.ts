import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { CaredashComponent } from './caredash/caredash.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { PlaycardsComponent } from './playcards/playcards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashComponent,
    AdmindashComponent,
    CaredashComponent,
    HeaderComponent,
    RegisterComponent,
    GameRoomComponent,
    AskQuestionComponent,
    PlaycardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
