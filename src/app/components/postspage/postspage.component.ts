import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/api/posts.service';

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

@Component({
	selector: 'app-postspage',
	templateUrl: './postspage.component.html',
	styleUrls: ['./postspage.component.scss'],
})
export class PostspageComponent implements OnInit {
	posts: Post[] = [];
	countPosts: number;

	constructor(private postService: PostsService) {}

	ngOnInit(): void {
		this.getPostsPage();
	}

	getPostsPage() {
		this.postService.getPosts().subscribe((posts) => {
			this.posts = posts;
		});
	}
}
