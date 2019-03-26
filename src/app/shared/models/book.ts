import { Author } from './author';
import { Genre } from './genre';
import { Serie } from './serie';

export class Book {
    static URL_PREFIX: string = 'http://readly.ru';

    idBook: integer;
    title: string;
    url: string;
    year: integer;
    description: string;

    serie: Serie;
    genres: Array<Genre>;
    authors: Array<Author>;
}
