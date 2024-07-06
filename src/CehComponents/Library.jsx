import React from 'react'

function Library() {
    return (
        <div>
                <h1 className='text-2xl md:text-4xl text-gray-400 ml-4 mb-2'>Library</h1>
                <hr className='leading-3'/>
         <p className='leading-4 text-md mt-4 md:text-lg md:leading-8 mx-auto text-justify'>
The College Library was established in 1965. As the tune with the College and University growth the Library has also grown. By 2004 it has grown to 30,000 volumes and 70 journals. In 2004 the College Library was merged with University Library and renamed as University Library, a central facility for all the units of Jawaharlal Nehru Technological University, Hyderabad.

The digital library was setup in 1st floor of college library building with 50 computers in 2016. The Library collection consists of Text books, Reference books, Print Journals, News papers, e-Journals & e-books.
</p>
<div>
    <ul className='text-xl text-bold mt-2 list-disc	ml-4'>
        <li >VISION</li>
    </ul>
    <p className='leading-4 text-md mt-4 md:text-lg md:leading-8 mx-auto text-justify'>
    The Vision for JNTUH College Library is to provide seamless access to information to its users in a networked environment and to become a premier Learning Resource Centre with a services in Engineering, Science & Technology and related areas. To augment and maintain collections in support of the academic pursuits of the college
</p>
<ul className='text-xl text-bold mt-2 list-disc	ml-4'>
        <li >MISSION</li>
    </ul>
    <p className='leading-4 text-md mt-4 md:text-lg md:leading-8 mx-auto text-justify'>
    The mission of the College Library, JNTUH CEH is to provide access to high quality information resources in all forms to the faculty, students and staff in support of teaching, learning, scholarship and research mission of the College . With a commitment to excellence in services, the College Library offers information resources and innovative services to support the intellectual inquiry, research and lifelong learning needs of JNTUH CEH.</p>
</div>
        </div>
    )
}

export default Library
