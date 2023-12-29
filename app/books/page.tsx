import React from 'react';
import BooksCard from '../components/books/BooksCard';

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

const BooksPage = async () => {
  //   const res = await fetch(
  //     'https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books',
  //     { cache: 'no-store' }
  //   );
  const res = await fetch('https://freetestapi.com/api/v1/books');
  const books: Books[] = await res.json();
  return (
    <div className="flex flex-col p-4">
      <input
        type="text"
        placeholder="Search by title..."
        // value={searchTerm}
        // onChange={handleSearch}
        className="border border-gray-300 rounded p-2 mb-4"
      />
      <BooksCard books={books} />
    </div>
  );
};

export default BooksPage;
