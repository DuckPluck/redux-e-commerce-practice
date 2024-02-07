import React from 'react';
import { Header } from '../components/elements/Header/Header';
import { Limiter } from '../components/UI/Limiter/Limiter';


export const HomePage = () => {
  return (
    <Limiter>
      <Header />
    </Limiter>
  );
};
