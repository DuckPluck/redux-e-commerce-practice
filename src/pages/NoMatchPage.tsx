import { Button, FooterTitle } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/elements/Header/Header';


export const NoMatchPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center p-[24px]">
        <FooterTitle title="404 страница не найдена" />
        <Button color="green" onClick={handleNavigate}>На главную</Button>
      </div>
    </>
  );
};
