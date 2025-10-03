import React from 'react'
import Dropdown from './Dropdown'

const HorizentalCards = ({data}) => {
  console.log(data.results)
  return (
    
      

      <div className='w-[100%] flex  overflow-y-hidden p-5' >
        {data.map((d,i)=>(
          <div key={i} className='min-w-[18%] mr-5 mb-5 bg-zinc-900'>

            <img className='w-full h-[45%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}  />
            
           <div className='text-white p-3'>

            <h1 className='mt-3 text-xl font-semibold '>{d.name || d.title || d.original_name || d.original_title}</h1>
        <p className='mt-3 mb-3'>{d.overview.slice(0 ,50)}...<span className='text-zinc-500'> more</span></p>
           </div>


          </div>
        ))}
      </div>

   
  )
}

export default HorizentalCards