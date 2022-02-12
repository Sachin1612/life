import React from 'react';
import BussinessCategories from './category/BussinessCategories';
import BussinesHeaderContainer from './header/BussinesHeaderContainer';

const BussinessDashboard = () => {
  return (
    <>
        <BussinesHeaderContainer />
        <BussinessCategories />
    </>
    );
};

export default BussinessDashboard;
