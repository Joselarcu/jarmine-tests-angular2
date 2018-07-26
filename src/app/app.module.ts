import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './integration-tests/home/home.component';
import { TodosComponent } from './integration-tests/2-todos/todos.component';
import { UserDetailsComponent } from './integration-tests/3-user-details/user-details.component';
import { VoterComponent } from './integration-tests/1-voter/voter.component';

import { routes } from './app.routes';
import { UsersComponent } from './integration-tests/users/users.component';
// import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    // NavComponent,
    HighlightDirective,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
