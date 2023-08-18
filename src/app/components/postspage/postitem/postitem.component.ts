import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../postspage.component';

@Component({
	selector: 'app-postitem',
	templateUrl: './postitem.component.html',
	styleUrls: ['./postitem.component.scss'],
})
export class PostitemComponent {
	@Input()
	post: Post;

	constructor(private router: Router) {}

	navToPost(id: number) {
		this.router.navigate(['post', id]);
	}
}
