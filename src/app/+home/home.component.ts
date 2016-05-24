import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Story } from '../trail/story';
import * as moment from 'moment';


@Component({
	moduleId: module.id,
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css']
})

//@CanActivate(() => tokenNotExpired())
export class HomeComponent implements OnInit {
	showContent: Boolean;
	stories: Story[];
	date: string;

	constructor(private auth: AuthService) {
		this.date = moment().format("MMM Do YY");
		this.stories = [
			{
				id: 'asdf',
				title: 'title test',
				tags: ['tag1, tag2, tag3'],
				summary: 'asdoigh osdfsdoihfiusdg fiuahdfausi hdaiuhs aiuhdiuh asd asd',
				text: 'kjlkjhsal asdefsrlikj sdilfsdofij osidjfosdijf oisdjf oisdjfoijsd ofjasdfoi joijoasijdoasijd oijasiod',
				publishedDate: new Date(),
				updatedDate: new Date(),
				images: [
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/nature-q-c-640-273-1.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					},
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/nature-q-c-640-273-3.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					},
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/cats-q-c-640-273-7.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					}
				]
			}, {
				id: 'asdf',
				title: 'title test',
				tags: ['tag1, tag2, tag3'],
				summary: 'asdoigh osdfsdoihfiusdg fiuahdfausi hdaiuhs aiuhdiuh asd asd',
				text: 'kjlkjhsal asdefsrlikj sdilfsdofij osidjfosdijf oisdjf oisdjfoijsd ofjasdfoi joijoasijdoasijd oijasiod',
				publishedDate: new Date(),
				updatedDate: new Date(),
				images: [
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/nature-q-c-640-273-1.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					},
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/nature-q-c-640-273-3.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					},
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/cats-q-c-640-273-7.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					}
				]
			}, {
				id: 'asdf',
				title: 'title test',
				tags: ['tag1, tag2, tag3'],
				summary: 'asdoigh osdfsdoihfiusdg fiuahdfausi hdaiuhs aiuhdiuh asd asd',
				text: 'kjlkjhsal asdefsrlikj sdilfsdofij osidjfosdijf oisdjf oisdjfoijsd ofjasdfoi joijoasijdoasijd oijasiod',
				publishedDate: new Date(),
				updatedDate: new Date(),
				images: [
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/nature-q-c-640-273-1.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					},
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/nature-q-c-640-273-3.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					},
					{
						id: 'koasd',
						url: 'http://lorempixel.com/image_output/cats-q-c-640-273-7.jpg',
						text: 'bildtext bla bla bla bla asödlkasödlkasd'
					}
				]
			}
		]
	}

	ngOnInit() {
		this.showContent = this.auth.loggedIn();
	}

}
