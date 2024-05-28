import React from 'react'
import Navbar from './componenets/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards';
import Category from './components/Category'
function App() {
  return (
    <div >
       <Navbar/>
       <Hero/>
       <HeadlineCards/>
       <Category/>
    </div>
  );
}

export default App;
