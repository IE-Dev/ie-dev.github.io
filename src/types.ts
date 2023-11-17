export interface Data {
	title: string;
	description: string;
	images: ImageObj[];
	sections: Section[]
	network: Link[]
}

export interface Link {
	name: string;
	url: string;
}

export interface Section {
	title: string;
	links: Link[];
}

export interface ImageObj {
	file: string;
	alt: string;
	position: string;
}
