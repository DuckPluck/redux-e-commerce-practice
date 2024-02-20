import classNames from 'classnames';
import { Button } from 'flowbite-react';
import React from 'react';
import { useGetProductsQuery } from '../../../API/API';
import { useAppSelector } from '../../../hooks/redux';
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

  if (isLoading) {
    return 'loading';
  }

  return (
    <div className={blockClassName}>
      <CatalogFilters />

      <div className="flex flex-wrap justify-between mt-[-30px] mx-auto w-fit">
        {products?.map((product: ProductItem) => (
          <CatalogCard productInfo={product} key={product.id} />
        ))}
      </div>

      <div>
        <Button color="light" pill className="mx-auto my-[32px]">Показать еще</Button>
      </div>
    </div>
  );
};
