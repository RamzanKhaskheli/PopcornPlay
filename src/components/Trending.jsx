import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from './screens/TopNav'
import Dropdown from './screens/Dropdown'
import axios from '../utils/axios'
import Cards from './screens/Cards'
import Loader from './Loader'

const Trending = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [trending, settrending] = useState([])


    const GetTrending = async()=>{
            try {
                const {data} = await axios.get(`/trending/${category}/${duration}`);
               
                settrending(data.results);
          
            } catch (error) {
                console.log("Error: ", error)
            }
    };


    useEffect(() => {
      GetTrending()
    }, [category,duration])

    console.log(trending)
    


  return trending.length > 0 ?(
    <div className='px-[3%] w-screen h-screen overflow-hidden overflow-y-auto '>
        <div className='w-full h-[10vh] flex items-center justify-center'>
            <Link ></Link>
            <h1 className='text-2xl flex items-center font-semibold text-zinc-400'>      <i onClick={()=> navigate(-1)} className="hover:text-[#EC4899] mr-5 ri-arrow-left-line "></i> Trending</h1>

            <TopNav/>
            <Dropdown  title="Category" options={["all","movie","tv"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            <Dropdown  title="Duration" options={["Week","day"]} func={(e)=> setduration(e.target.value)}/>
        </div>
        <Cards data={trending}/>



    </div>
  ):<Loader/>
}

export default Trending