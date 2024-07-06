import React from 'react';

function Nav() {
  return (
    <>
      <header>
        <nav className="w-screen h-auto bg-zinc-100 flex flex-col sm:flex-row sm:justify-between p-4">
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <img src="./JNTUH-removebg-preview.png" alt="JNTUH Logo" className="w-24 h-24 sm:w-16 sm:h-16" />
          </div>
          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-red-900 text-xl sm:text-2xl">JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY HYDERABAD</h1>
            <h2 className="text-amber-500 text-lg sm:text-xl mt-1">UNIVERSITY COLLEGE OF ENGINEERING, SCIENCE & TECHNOLOGY HYDERABAD</h2>
            <p className="text-emerald-600 mt-2">STUDENT DETAILS</p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
