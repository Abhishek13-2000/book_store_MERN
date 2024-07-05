import React, { useEffect, useState } from 'react'
import Cards from './Cards';

import { Link } from "react-router-dom"
import axios from "axios"

const Course = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async() => {
      try {
       const res = await axios.get("http://localhost:4001/book")
       console.log(res.data);
       setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook()
  } , [])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! ❤️</span></h1>
        <p className='mt-3'>Hello mate , Get all access to the free and paid Book's here. Keep Reading, keep growing ! 📚</p>
        <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-3'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item) => (
            <Cards key={item.id} item = {item} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course