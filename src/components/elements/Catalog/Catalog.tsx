import classNames from 'classnames';
import { Button } from 'flowbite-react';
import React from 'react';
import { CatalogCard } from '../CatalogCard/CatalogCard';
import { CatalogFilters } from '../CatalogFilters/CatalogFilters';

import './Catalog.scss';


interface Props {
  className?: string;
}

const mockProducts: ProductItem[] = [
  {
    'category': 'furniture',
    'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    'id': 8,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=4053',
      'https://api.lorem.space/image?w=640&h=480&r=9491',
      'https://api.lorem.space/image?w=640&h=480&r=7189',
    ],
    'price': 19999,
    'title': 'Luxury furniture',
  },
  {
    'category': 'electronics',
    'description': 'Крутейший ноут для крутейших программистов',
    'id': 9,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=2885',
      'https://api.lorem.space/image?w=640&h=480&r=6175',
      'https://api.lorem.space/image?w=640&h=480&r=6872',
    ],
    'price': 1000000,
    'title': 'MackBook Pro 2019 Pro 16"',
  },
  {
    'category': 'others',
    'description': 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    'id': 10,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=8265',
      'https://api.lorem.space/image?w=640&h=480&r=2149',
      'https://api.lorem.space/image?w=640&h=480&r=4126',
    ],
    'price': 957,
    'title': 'Small Concrete Cheese',
  },
  {
    'category': 'others',
    'description': 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    'id': 11,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=3878',
      'https://api.lorem.space/image?w=640&h=480&r=88',
      'https://api.lorem.space/image?w=640&h=480&r=450',
    ],
    'price': 962,
    'title': 'Generic Wooden Chips',
  },
  {
    'category': 'electronics',
    'description': 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    'id': 13,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=7842',
      'https://api.lorem.space/image?w=640&h=480&r=5119',
      'https://api.lorem.space/image?w=640&h=480&r=6350',
    ],
    'price': 515,
    'title': 'Sleek Cotton Pizza',
  },
  {
    'category': 'shoes',
    'description': 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    'id': 14,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=7668',
      'https://api.lorem.space/image?w=640&h=480&r=9409',
      'https://api.lorem.space/image?w=640&h=480&r=820',
    ],
    'price': 689,
    'title': 'Handcrafted Fresh Tuna',
  },
  {
    'category': 'furniture',
    'description': 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    'id': 15,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=5521',
      'https://api.lorem.space/image?w=640&h=480&r=8939',
      'https://api.lorem.space/image?w=640&h=480&r=1894',
    ],
    'price': 719,
    'title': 'Ergonomic Fresh Gloves',
  },
  {
    'category': 'electronics',
    'description': 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
    'id': 16,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=5183',
      'https://api.lorem.space/image?w=640&h=480&r=8834',
      'https://api.lorem.space/image?w=640&h=480&r=3736',
    ],
    'price': 783,
    'title': 'Sleek Steel Ball',
  },
  {
    'category': 'others',
    'description': 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
    'id': 17,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=3718',
      'https://api.lorem.space/image?w=640&h=480&r=2437',
      'https://api.lorem.space/image?w=640&h=480&r=4288',
    ],
    'price': 505,
    'title': 'Handmade Concrete Pizza',
  },
  {
    'category': 'furniture',
    'description': 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    'id': 18,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=9938',
      'https://api.lorem.space/image?w=640&h=480&r=102',
      'https://api.lorem.space/image?w=640&h=480&r=1779',
    ],
    'price': 262,
    'title': 'Tasty Steel Chicken',
  },
  {
    'category': 'others',
    'description': 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
    'id': 19,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=7962',
      'https://api.lorem.space/image?w=640&h=480&r=9919',
      'https://api.lorem.space/image?w=640&h=480&r=3572',
    ],
    'price': 760,
    'title': 'Incredible Wooden Towels',
  },
  {
    'category': 'furniture',
    'description': 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    'id': 20,
    'images': [
      'https://api.lorem.space/image?w=640&h=480&r=9894',
      'https://api.lorem.space/image?w=640&h=480&r=2171',
      'https://api.lorem.space/image?w=640&h=480&r=9816',
    ],
    'price': 172,
    'title': 'Handcrafted Fresh Bacon',
  },
];

export const Catalog = ({ className }: Props) => {
  const blockClassName = classNames('2xl:px-[240px] xl:px-[180px] lg:px-[120px] px-[60px] pt-[60px]', className);
  return (
    <div className={blockClassName}>
      <CatalogFilters />

      <div className="flex flex-wrap justify-between mt-[-30px] mx-auto w-fit">
        {mockProducts?.map((product) => (
          <CatalogCard productInfo={product} key={product.id} />
        ))}
      </div>

      <div>
        <Button color="light" pill className="mx-auto my-[32px]">Показать еще</Button>
      </div>
    </div>
  );
};
