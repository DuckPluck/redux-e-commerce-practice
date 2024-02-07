import classNames from 'classnames';
import { Navbar } from 'flowbite-react';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import './Header.scss';


interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  const blockClassName = classNames('w-full', className);

  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <Navbar fluid rounded className={blockClassName}>
      <Navbar.Brand onClick={() => handleNavigate('/')} className="cursor-pointer">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Commerce</span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="#" active>Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
