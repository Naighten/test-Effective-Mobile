import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../components/postspage/postspage.component';

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	constructor(private http: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(
			'https://jsonplaceholder.typicode.com/posts'
		);
	}

	getPost(id: number): Observable<Post> {
		return this.http.get<Post>(
			'https://jsonplaceholder.typicode.com/posts/' + id
		);
	}
}
