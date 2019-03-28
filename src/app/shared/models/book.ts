import { Author } from './author';
import { Genre } from './genre';
import { Serie } from './serie';

export class Book {
    // static URL_PREFIX: string = 'http://readly.ru';
    static URL_PREFIX: 'http://readly.ru';

    idBook: number; // integer
    title: string;
    url: string;
    image: string;
    year: number;
    description: string;
    rating: number; // float

    serie: Serie;
    genres: Array<Genre>;
    authors: Array<Author>;
}
