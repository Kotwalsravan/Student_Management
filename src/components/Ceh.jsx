import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Card from './Card';

function Ceh() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/students?limit=20');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bg-white-100'>
      <div className='w-screen h-screen'>
        <div className='w-screen h-[20%]'>
          <ul className='flex flex-wrap justify-evenly items-center h-full p-4'>
            <li className='transition duration-300 ease-in-out hover:text-orange-600 m-2'>
              <Link to="/ceh/about-us">About Us</Link>
            </li>
            <li className='transition duration-300 ease-in-out hover:text-orange-600 m-2'>
              <Link to="/ceh/library">Library</Link>
            </li>
            <li className='transition duration-300 ease-in-out hover:text-orange-600 m-2'>
              <Link to="/ceh/academics">Academics</Link>
            </li>
          </ul>
        </div>
        <div className='w-screen h-[80%] p-4'>
          <Outlet />
          {location.pathname === '/ceh' && (
            <>
              <h1 className='text-4xl text-gray-400 ml-4'>Welcome to JNTUHUCEST</h1>
              <div className='m-6 text-l text-amber-950'>
                <p>The College was established as Nagarjuna Sagar Engineering College in 1965 by the Government of Telangana. When the college was under the administrative control of the Department of Technical Education, it was affiliated to Osmania University, Hyderabad. With the formation of Jawaharlal Nehru Technological University on 2nd October 1972, it became a constituent college of the University and was later renamed as JNTU College of Engineering, Hyderabad. From its inception in 1965 to 1984, the College was located at Masab Tank Campus. In 1984, the College was shifted to its permanent location at Kukatpally, a 100 acres site, about 20 km from the heart of the City, on Bombay National Highway (NH-9).</p>
              </div>
              <h1 className='m-3 text-3xl text-gray-500'>Departments</h1>
              <div className="flex flex-wrap justify-center">
                {data.map(item => (
                  <Card
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    description={`Age: ${item.age}, Courses: ${item.courses.join(', ')}`}
                    className='m-2'
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ceh;
