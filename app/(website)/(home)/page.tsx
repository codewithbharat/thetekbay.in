import React from 'react'

const Home = () => {
  return (
    <div>
       <section className='my-2'>
        {/* breaking news label */}
        <h2 className='border-b-4 font-serif text-xl font-medium'>Breaking News</h2>
        {/* image */}
        <div className="w-full bg-gray-400 my-2" style={{ height: 'calc(100vw * 9 / 16)' }}></div>

        {/* date, category and author */}
        <div className="flex items-center mt-2 font-serif">
          <span className="text-gray-600">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
          <span className="text-gray-600 mx-2">|</span>
          <span className="text-gray-600">Technology</span>
          <span className="text-gray-600 mx-2">|</span>
          <span className="text-gray-600">John Doe</span>
        </div>
        {/* title  */}
        <h3 className='text-2xl mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
        {/* short description with readm more button */}
        <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
          vestibulum mi nec, ultricies metus. Mauris in quam id turpis aliquet aliquet. </p>
        <button className='bg-gray-600 text-white px-4 py-2 mt-2'>Read More</button>

      </section>
    </div>
  )
}

export default Home
