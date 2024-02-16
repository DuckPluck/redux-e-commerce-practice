import React from 'react';
import { Catalog } from '../components/elements/Catalog/Catalog';
import { Header } from '../components/elements/Header/Header';
import { Limiter } from '../components/UI/Limiter/Limiter';


export const CatalogPage = () => {
  return (
    <Limiter>
      <Header />

      <Catalog />
    </Limiter>
  );
};
