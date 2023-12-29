import React from 'react';
import Add from './buttons/Add';
import Delete from './buttons/Delete';
import Edit from './buttons/Edit';

interface Books {
  id: number;
  user_id: number;
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
  created_at: string;
  updated_at: string;
}

interface Props {
  books?: Books[];
}

const BooksCard = ({ books }: Props) => {
  return (
    <div className="flex flex-row flex-1 flex-wrap gap-4">
      {books?.map((book) => (
        <div key={book.id} className="flex-auto">
          <a
            href="#"
            className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {book.author}
              </p>
              <div className="flex flex-row gap-4 justify-start items-center">
                <Add />
                <Edit />
                <Delete />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
