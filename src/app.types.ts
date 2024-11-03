export interface GetBookMessage {
    getBookDetails: boolean;
}

export interface Book {
    title: string;
    author: string;
    genres: string[];
    thumbnailUrl: string;
    url: string;
}
