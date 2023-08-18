import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './app.guard';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { PostpageComponent } from './components/postpage/postpage.component';
import { PostspageComponent } from './components/postspage/postspage.component';

const routes: Routes = [
	{ path: 'auth', component: AuthComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'posts', component: PostspageComponent, canActivate: [AuthGuard] },
	{ path: 'post/:id', component: PostpageComponent, canActivate: [AuthGuard] },
	{ path: '', redirectTo: 'posts', pathMatch: 'full' },
	{ path: '**', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
