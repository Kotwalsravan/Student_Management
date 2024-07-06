import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav className='w-screen h-[15%] bg-slate-700 text-pink-300 flex flex-col md:flex-row items-end md:items-center justify-between p-2'>
        <Link to="/" className='p-2'>Home</Link>
        <Link to="/ceh" className='p-2'>Ceh</Link>
      </nav>
      <div id="login" className='w-screen h-screen flex flex-col items-center mt-2'>
        <h1 className='text-4xl mb-3'>Student Login</h1>
        <div className='w-11/12 md:w-1/2 lg:w-1/3 h-auto border border-sky-400 mt-4 hover:bg-cyan-50 p-4'>
          <form className='flex flex-col items-center text-xl md:text-2xl'>
            <p>Sign in to start your session</p>
            <input type='text' placeholder='Enter your SID...' className='block w-full mt-2 p-2' />
            <input type='text' placeholder='Enter your name...' className='block w-full mt-4 p-3' />
            <input type='text' placeholder='Enter your age...' className='block w-full mt-4 p-3' />
            <button type="submit" className='mt-4 bg-teal-300 p-2 w-full md:w-1/2 lg:w-1/4'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
