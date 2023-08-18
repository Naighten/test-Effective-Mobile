import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
	isLogin: boolean = false;
	authGroup: FormGroup = new FormGroup({
		login: new FormControl<string>('', [
			Validators.required,
			Validators.minLength(3),
		]),
		password: new FormControl<string>('', [Validators.required]),
	});

	constructor() {
		let loc_login = localStorage.getItem('login');
		let loc_password = localStorage.getItem('password');

		if (loc_login && loc_password)
			this.authGroup.patchValue({
				login: loc_login,
				password: loc_password,
			});
	}

	ngOnInit(): void {}

	signin(): void {
		if (
			localStorage.getItem('login') == this.login &&
			localStorage.getItem('password') == this.password
		) {
			this.isLogin = true;
			localStorage.setItem('isLogin', String(this.isLogin));
			location.href = 'posts';
		} else {
			alert('Неправильный логин или пароль');
		}
	}

	signup(): void {
		if (this.login && this.password) {
			localStorage.setItem('login', this.login);
			localStorage.setItem('password', this.password);
			this.isLogin = true;
			localStorage.setItem('isLogin', String(this.isLogin));
			location.href = 'posts';
		}
	}

	get login() {
		return this.authGroup.get('login')?.value;
	}

	get password() {
		return this.authGroup.get('password')?.value;
	}
}
