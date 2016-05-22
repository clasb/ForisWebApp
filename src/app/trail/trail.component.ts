export class TrailComponent {
	Id: number;
	Name: string;
	Description: string;
	Length: number;
	Rating: number;
	Difficulty: number;
	Coordinates: Coordinate[];
}

export class Coordinate {
	Latitude: number;
	Longitude: number;
}