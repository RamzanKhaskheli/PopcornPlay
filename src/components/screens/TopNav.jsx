import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import noimg from '../../../public/No_image.jpg'

const TopNav = () => {
    const [query, setquery] = useState("")
    const [search, setsearch] = useState([]);
    
    const GetSearches = async()=>{
            try {
                const {data} = await axios.get(`/search/multi?query=${query}`);
                setsearch(data.results);
            } catch (error) {
                console.log("Error: ", error)
            }
    };


    useEffect(() => {
      GetSearches()
    }, [query])
    


    return (
        <div className='w-full h-[10vh] relative flex justify-center items-center '>
            <i className=" ri-search-line text-3xl text-zinc-400"></i>
            <input onChange={(e)=>setquery(e.target.value)} value={query} className='w-[55%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />
            {
                query.length > 0 && (
                    <i onClick={()=>setquery("")} className=" ri-close-fill text-3xl text-zinc-400"></i>
                )
            }
            <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[]  overflow-auto rounded'>
               
               {search.map((s,i)=>(

                   
                   <Link key={i} className='hover:text-white hover:bg-[#EC4899] duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>
                    <img className='w-[10vh] h-[10vh] object-cover rounded mr-10 shadow-lg' 
                    src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimg} alt="No image Available"/>
                    <span>{s.name || s.title || s.original_name || s.original_title}</span>
                </Link>
            ))}
              
            </div>
        </div>
    )
}

export default TopNav