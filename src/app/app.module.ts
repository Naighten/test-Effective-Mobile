import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './api/posts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './app.guard';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { PostpageComponent } from './components/postpage/postpage.component';
import { PostitemComponent } from './components/postspage/postitem/postitem.component';
import { PostspageComponent } from './components/postspage/postspage.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		PostspageComponent,
		PostpageComponent,
		MainComponent,
		HeaderComponent,
		PostitemComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [PostsService, AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
