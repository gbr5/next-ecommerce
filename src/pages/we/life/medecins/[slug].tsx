import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@/styles/pages/Medecin';

const Medecin: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <h1>{router.query.slug}</h1>
    </Container>
  );
};

export default Medecin;
