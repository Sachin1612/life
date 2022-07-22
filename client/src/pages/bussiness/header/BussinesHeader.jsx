import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BussinesHeader = (props) => {
  console.log(props)
  return (
    <div className='sticky top-0'>
      <Link to={'/posts'} className=''>&#8592;</Link>
    <div className='relative'>
      <img src={props.cover} className='object-cover w-full h-52' />
      <h1 className='absolute top-0 divide-opacity-90 text-white h-full w-full pl-96 pt-10 text-2xl' style={{
        background: 'rgb(0 0 0 / 72%)',
        paddingLeft: 'calc(50% - 99px)',
        fontSize: 44,
      }} >{props.name}</h1>
      <img src={props.logo} className='absolute -bottom-16 rounded-full left-2/4 w-32 shadow-2xl'/>
    </div>
    </div>
  );
};

BussinesHeader.propTypes = {
    redirectURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default BussinesHeader;
