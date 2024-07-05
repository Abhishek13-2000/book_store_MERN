import React from 'react'

const Cards = ({item}) => {
    // console.log(item);
  return (
   <>
   <div className='mt-4'>
   <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-pink-500 cursor-pointer px-2 py-1">$ {item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 cursor-pointer px-2 py-1">Buy now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards