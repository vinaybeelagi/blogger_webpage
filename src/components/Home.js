import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="App">
      <div className='header'> Header</div>
      <div className='container'>
        <div className='nav'> Navbar</div>
        <div className='main'>
          <div className='left-main'>left-main</div>
          <div className='right-main'>right-main'</div>
        </div>
      </div>
    </div>
  );
}
export default Home