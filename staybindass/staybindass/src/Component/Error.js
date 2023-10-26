import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Error = () => {
  return (
    <main className='grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8 mt80'>
      <div className='text-center'>
        <img src={logo} alt='' style={{ width: '200px' }} />
        <p className='text-base font-semibold text-indigo-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Page not found</h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link to='/'>Go back home</Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
