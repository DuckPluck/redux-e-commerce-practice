import classNames from 'classnames';
import { Label, Select, TextInput } from 'flowbite-react';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { productsSlice } from '../../../store/reducers/productsSlice';

import './CatalogFilters.scss';


interface Props {
  className?: string;
}

export const CatalogFilters = ({ className }: Props) => {
  const blockClassName = classNames('catalog-filters', 'mb-[64px]', className);

  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();
  const { changeSearch, changeCategory } = productsSlice.actions;

  const handleSearch = (Event: ChangeEvent<HTMLInputElement>) => {
    setSearch(Event.target.value);
  };
  const handleCategory = (Event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCategory(Event.target.value));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(changeSearch(search));
  };

  return (
    <div className={blockClassName}>
      <form className="flex" onSubmit={handleSubmit}>
        <TextInput
          onChange={handleSearch}
          type="search"
          placeholder="Поиск товара по названию"
          shadow className="w-full" />

        <button type="submit">Search</button>
      </form>

      <div className="flex justify-between mt-[24px]">
        <Label className="w-full max-w-sm">
          Категория

          <Select className="mt-[8px]" onChange={handleCategory}>
            <option value="">All</option>
            <option value="shoes">Shoes</option>
            <option value="furniture">Furniture</option>
            <option value="electronics">Electronics</option>
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
