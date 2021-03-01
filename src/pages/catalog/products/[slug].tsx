import React from 'react';
import { useRouter } from 'next/router';
import PrismicDom from 'prismic-dom';
import { Container } from '@/styles/pages/Product';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '@/lib/prismic';
import { Document } from 'prismic-javascript/types/documents';
import SEO from '@/components/SEO';

interface IProductProps {
  product: Document
}

const Product: React.FC<IProductProps> = ({ product }: IProductProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  const title = PrismicDom.RichText.asText(product.data.title);
  const description = PrismicDom.RichText.asText(product.data.description);
  const { url } = product.data.thumbnail;
  const price = product.data.price;

  return (
    <Container>
      <SEO
        title={title}
        description={description}
        image={url}
      />
      <h1>{title}</h1>

      <img src={url} width="300" alt={title} />

      <div dangerouslySetInnerHTML={{ __html: description}}></div>

      <p>Price: $ {price}</p>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps<IProductProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});

  return {
    props: {
      product,
    },
    revalidate: 5,
  }
}


export default Product;
