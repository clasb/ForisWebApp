export class Story {
	id: string;
	tags: string[];
	title: string;
	summary: string;
	text: string;
	publishedDate: Date;
	updatedDate: Date;
	images: Image[];
}

export class Image {
	id: string;
	url: string;
	text: string;
}