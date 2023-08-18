import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuard {
	constructor(private router: Router) {}

	async canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		let isLogin = localStorage.getItem('isLogin');
		if (isLogin == null) {
			this.router.navigate(['auth']);
			return false;
		} else {
			const auth = await this.checkIsLogin();
			if (auth == false) {
				this.router.navigate(['auth']);
				return false;
			}
		}
		return true;
	}

	async canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return await this.canActivate(next, state);
	}

	checkIsLogin() {
		return localStorage.getItem('isLogin') == 'true' ? true : false;
	}
}
