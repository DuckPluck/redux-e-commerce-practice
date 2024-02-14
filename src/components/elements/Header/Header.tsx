import classNames from 'classnames';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import './Header.scss';


interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  const blockClassName = classNames('w-full', className);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <Navbar fluid rounded color="green" className={blockClassName}>
      <Navbar.Brand onClick={() => handleNavigate('/')} className="cursor-pointer">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Commerce</span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => handleNavigate('/')}
          active={location.pathname === '/'}>
          Home</Navbar.Link>

        <Navbar.Link
          className="cursor-pointer"
          onClick={() => handleNavigate('/catalog')}
          active={location.pathname === '/catalog'}>
          Catalog</Navbar.Link>

        <Navbar.Link
          className="cursor-pointer"
          onClick={() => handleNavigate('/contact')}
          active={location.pathname === '/contact'}>
          Contact</Navbar.Link>
      </Navbar.Collapse>

      <DarkThemeToggle />
    </Navbar>
  );
};
