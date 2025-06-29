import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center px-4 h-14'>
        <div className='logo font-bold text-2xl'>
          <span className='text-green-500'>&lt;</span>
          Pass <span className='text-green-500'>OP/&gt;</span>
        </div>

        <a
          href='https://github.com/GauravTarale77'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white bg-green-700 rounded-full flex justify-between items-center px-2 py-1 hover:bg-green-600 transition ring-white ring-1'
        >
          <img className='invert w-6 p-1' src='/icons/git.png' alt='GitHub logo' />
          <span className='font-bold px-2'>GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
