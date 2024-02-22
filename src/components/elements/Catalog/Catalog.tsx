import classNames from 'classnames';
import { Button, Spinner } from 'flowbite-react';
import React from 'react';
import { useGetProductsQuery } from '../../../API/API';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { productsSlice } from '../../../store/reducers/productsSlice';

import { CatalogCard } from '../CatalogCard/CatalogCard';
import { CatalogFilters } from '../CatalogFilters/CatalogFilters';

import './Catalog.scss';


interface Props {
  className?: string;
}

export const Catalog = ({ className }: Props) => {
  const blockClassName = classNames('2xl:px-[240px] xl:px-[180px] lg:px-[120px] px-[60px] pt-[60px]', className);

  const { limit, search, category } = useAppSelector((state) => state.productsSlice);

  const body = {
    category: category,
    limit: limit,
    search: search,
  };

  const { data: products = [], isLoading } = useGetProductsQuery(body);

  const dispatch = useAppDispatch();
  const { loadMoreProducts } = productsSlice.actions;

  const handleMoreProducts = () => {
    dispatch(loadMoreProducts());
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={blockClassName}>
      <CatalogFilters />

      <div className="flex flex-wrap justify-start mt-[-30px] ml-[-12px] w-full">
        {products?.map((product: ProductItem) => (
          <CatalogCard productInfo={product} key={product.id} />
        ))}
      </div>

      <div>
        <Button color="light" pill className="mx-auto my-[32px]" onClick={handleMoreProducts}>
          Показать еще</Button>
      </div>
    </div>
  );
};
