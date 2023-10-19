import React from 'react'
import Left from './Left'
import "./home.scss"
import Right from './Right'

const Home = () => {
  return (
  
    <div className='main-container'>
      <div className='left-container mg-25'>
        <Left/>
      </div>
       <div className='right-container mg-25'>
        <Right/>
        </div>
    
    </div>
   
  )
}

export default Home
