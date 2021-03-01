import Prismic from 'prismic-javascript';

export const apiEndPoint = `${process.env.PRISMIC_API}`;

export const client = (req = null) => {
  const options = req ? { req } : null;

  return Prismic.client(apiEndPoint, options);
};
