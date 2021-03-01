import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { HomeContainer } from '@/styles/pages/Home';
import SEO from '@/components/SEO';
import { client } from '@/lib/prismic';

interface IProps {
  recommendedProducts: Document[];
}

const Home: React.FC<IProps> = ({ recommendedProducts }: IProps) => {
  return (
    <HomeContainer>
      <SEO
        title="We Plan | We Rock"
        image="boost.png"
        shouldExcludeTitleSuffix
      />
      <section>
        <h2>Products</h2>

        <ul>
          {recommendedProducts.map(product => {
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
      </section>
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    }
  }
}

export default Home;
