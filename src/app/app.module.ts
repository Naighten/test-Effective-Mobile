import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { PostspageComponent } from './components/postspage/postspage.component';
import { PostpageComponent } from './components/postpage/postpage.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PostspageComponent,
    PostpageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
