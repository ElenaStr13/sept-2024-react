export interface IProduct {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: RootObjectDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: RootObjectReviews[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: RootObjectMeta;
	thumbnail: string;
	images: string[];
}
export interface RootObjectDimensions {
	width: number;
	height: number;
	depth: number;
}
export interface RootObjectReviews {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}
export interface RootObjectMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}