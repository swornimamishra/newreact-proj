import React from 'react'
import "../styles/Home.css"

function Home({abcd,ttt}) {

  return (
    <div>
       <h1 className='header'>
        {abcd} {ttt}
       </h1>

     <div>
     <h1>About me :-</h1>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg' alt='women avtar'/>

       <div className='child_container'>
       <p>Job ads? Job descriptions? Job profile? What is what? Well, job profiles are clear and concise descriptions of what a particular position demands in terms of candidate qualifications, responsibilities, and perks. Its an internal document created by HR to help the hiring process. Jump right in to find out what to look for in job profiles, see some examples, and clear up any confusion.Job ads? Job descriptions? Job profile? What is what? Well, job profiles are clear and concise descriptions of what a particular position demands in terms of candidate qualifications, responsibilities, and perks. Its an internal document created by HR to help the hiring process. Jump right in to find out what to look for in job profiles, see some examples, and clear up any confusion.Job ads? Job descriptions? Job profile? What is what? Well, job profiles are clear and concise descriptions of what a particular position demands in terms of candidate qualifications, </p>
       </div>
      

       
      
      </div>

    </div>
  )
}

export default Home