import { Button, FooterTitle } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const NoMatchPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center">
      <FooterTitle title="404 страница не найдена" />
      <Button color="green" onClick={handleNavigate}>На главную</Button>
    </div>
  );
};
