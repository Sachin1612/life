import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const BussinessCategories = () => {
  const { category, items } = useSelector(state => state.bussiness)
  return (
    <div className='flex'>
      <section className='w-3/12 text-right pt-10 border-r-2 sticky top-52' style={{height: 'calc(100vh - 13rem)'}} >
        {category.map(c => <p className='pr-1 border-r'>{c}</p>)}
      </section>
      <section className='w-6/12 p-1 pt-10'>
        {items.map(o => <Item key={o.id} {...o} />)}
      </section>
      <section className='w-3/12'>
        Cart Items
      </section>
    </div>
    );
};

const Item = item => {
  return (
    <div className='flex flex-row border-b-2'>
      <div className='flex-col w-8/12'>
        <strong>{item.name}</strong><br />
        <span>{item.price}</span>
        <p>{item.description}</p>
      </div>
      <div className='flex-col w-4/12 right-0'>
        {item.image && <div className='rounded-xl w-36 h-24 overflow-hidden'><img className='p-2 h-auto w-[calc(100%+2rem)]' src={item.image} /></div>}
      </div>
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,

  bestSeller: PropTypes.string,
};

export default BussinessCategories;
