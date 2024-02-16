import classNames from 'classnames';
import { Label, Select, TextInput } from 'flowbite-react';
import React from 'react';

import './CatalogFilters.scss';


interface Props {
  className?: string;
}

export const CatalogFilters = ({ className }: Props) => {
  const blockClassName = classNames('catalog-filters', 'mb-[64px]', className);
  return (
    <div className={blockClassName}>
      <form className="flex">
        <TextInput type="search" placeholder="Поиск товара по названию" shadow className="w-full" />

        <button type="submit">Search</button>
      </form>

      <div className="flex justify-between mt-[24px]">
        <Label className="w-full max-w-sm">
          Категория

          <Select className="mt-[8px]">
            <option>All</option>
            <option>Shoes</option>
            <option>Furniture</option>
            <option>Electronics</option>
          </Select>
        </Label>

        <Label className="w-full ml-[16px] max-w-sm">
          Цена

          <div className="flex mt-[8px]">
            <Label className="flex items-center">
              От

              <TextInput type="number" shadow className="ml-[8px]" />
            </Label>

            <Label className="flex items-center ml-[8px]">
              До

              <TextInput type="number" shadow className="ml-[8px]" />
            </Label>
          </div>
        </Label>
      </div>
    </div>
  );
};
