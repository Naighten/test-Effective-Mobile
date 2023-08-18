import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	isLogin: boolean = false;
	login: string | null = '';

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.isLogin = localStorage.getItem('isLogin') == 'true' ? true : false;
		if (this.isLogin) {
			this.login = localStorage.getItem('login');
		}
	}

	signin(): void {
		this.router.navigate(['auth']);
	}

	logout(): void {
		this.isLogin = false;
		localStorage.setItem('isLogin', String(this.isLogin));
		this.router.navigate(['auth']);
	}
}
