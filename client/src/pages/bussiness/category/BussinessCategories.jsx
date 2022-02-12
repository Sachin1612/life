import React from 'react';
import { useSelector } from 'react-redux';

const BussinessCategories = () => {
  const { category } = useSelector(state => state.bussiness)
  return (
    <>
        {category.map(c => <p>{c}</p>)}
    </>
    );
};

export default BussinessCategories;
