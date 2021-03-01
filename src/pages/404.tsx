import React from 'react';

import { Container } from '@/styles/pages/404';

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>Page not found.</h1>
      <p>Are you lost?</p>
    </Container>
  );
};

export default NotFound;
