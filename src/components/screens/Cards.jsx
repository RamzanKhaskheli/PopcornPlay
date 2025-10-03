import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data}) => {
  return (
    <div className='flex flex-wrap w-full'>
        {data.map((c,i)=>{
            return <Link key={i} className='w-[25vh] mr-[5%] mb-[5%]'>
              <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover" src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path}`}/>
              <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>

                {c.name || c.title || c.original_name || c.original_title}
              </h1>
            </Link>
        })}
    </div>
  )
}

export default Cards