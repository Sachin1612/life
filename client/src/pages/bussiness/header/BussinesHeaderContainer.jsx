import React from 'react';
import { useSelector } from 'react-redux';
import BussinesHeader from './BussinesHeader';

const BussinesHeaderContainer = () => {
    const { bussiness } = useSelector(state => state.bussiness);
   
  return <BussinesHeader {...bussiness} />;
};

export default BussinesHeaderContainer;
