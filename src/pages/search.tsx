import React, { FormEvent, useCallback, useState } from 'react';

import { Container } from '@/styles/pages/Search';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Document } from 'prismic-javascript/types/documents';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { GetServerSideProps } from 'next';
import { client } from '@/lib/prismic';

interface ISearchProps {
  searchResults: Document[];
}

const Search: React.FC<ISearchProps> = ({ searchResults }: ISearchProps) => {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    router.push(`/search?q=${encodeURIComponent(search)}`);
    setSearch('');
  };

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(String(e.target.value))} />
        <button type="submit">
          Search
        </button>
      </form>

      <ul>
          {searchResults.map(product => {
            return (
              <li key={product.id}>
                <Link href={`/catalog/products/${product.uid}`}>
                  <a>
                    {PrismicDOM.RichText.asText(product.data.title)}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>

    </Container>
  )
};

export const getServerSideProps: GetServerSideProps<ISearchProps> = async (context) => {
  const { q } = context.query;

  if (!q) {
    return { props: { searchResults: [] } };
  }

  const searchResults = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.fulltext('my.product.title', String(q))
  ]);

  return {
    props: {
      searchResults: searchResults.results,
    }
  };
};

export default Search;
