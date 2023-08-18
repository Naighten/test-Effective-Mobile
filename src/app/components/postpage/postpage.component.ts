import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/api/posts.service';
import { Post } from '../postspage/postspage.component';

@Component({
	selector: 'postpage',
	templateUrl: './postpage.component.html',
	styleUrls: ['./postpage.component.scss'],
})
export class PostpageComponent implements OnInit {
	post: Post;

	constructor(private postService: PostsService) {}

	ngOnInit(): void {
		let id = Number(window.location.pathname.split('/').slice(-1));

		this.postService.getPost(id).subscribe((post) => {
			this.post = post;
		});
	}
}
