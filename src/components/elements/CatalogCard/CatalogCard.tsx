import classNames from 'classnames';
import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

import './CatalogCard.scss';


interface Props {
  className?: string;
  productInfo: ProductItem;
}

export const CatalogCard = ({ className, productInfo }: Props) => {
  const blockClassName = classNames('mt-[30px]', 'catalog-card', className);

  const handleAddToCart = (productId: number) => {
    // ToDo: add addToCart logic
    console.log('product added to cart: ', productId);
  };

  return (
    <Card
      className={blockClassName}
      imgAlt={productInfo.title}
      imgSrc={productInfo.images?.[0]}
    >
      <Link to={`/catalog/product/${productInfo.id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {productInfo.title}
        </h5>
      </Link>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">{productInfo.price} $</span>

        <button
          onClick={() => handleAddToCart(productInfo.id)}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
            Add to cart
        </button>
      </div>
    </Card>
  );
};
