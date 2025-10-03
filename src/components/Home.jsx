import React, { useEffect, useState } from 'react'
import SideNav from './screens/SideNav'
import TopNav from './screens/TopNav'
import axios from '../utils/axios'
import Header from './screens/Header'
import HorizentalCards from './screens/HorizentalCards'
import Dropdown from './screens/Dropdown'
import Loader from './Loader'

const Home = () => {
    document.title = "PopCornPlay | HomePage"

   const [wallpaper, setWallpaper] = useState(null)
   const [trending, setTrending] = useState(null)
   const [category, setCategory] = useState("all")


   const GetHeaderWallpaper = async()=>{
            try {
                const {data} = await axios.get(`/trending/all/day`);
                let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
                setWallpaper(randomdata);
          
            } catch (error) {
                console.log("Error: ", error)
            }
    };
   
    const GetTrending = async()=>{
            try {
                const {data} = await axios.get(`/trending/${category}/day`);
               
                setTrending(data.results);
          
            } catch (error) {
                console.log("Error: ", error)
            }
    };

    
    useEffect(()=>{
      GetTrending()
      !wallpaper && GetHeaderWallpaper()
    },[category])
    // console.log(trending)





  return wallpaper && trending ? (
    <>
    <div className='flex w-screen h-screen'>
        <SideNav/>
        <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
          <TopNav/>
          <Header data={wallpaper}/>

        <div className=" flex justify-between p-5">

      <h1 className=' text-zinc-300 text-3xl font-semibold'>Trending</h1>

      <Dropdown title="Filter" options={["all","movie","tv"]} func={(e)=> setCategory(e.target.value)}/>

      </div>


          <HorizentalCards data={trending}/>
        </div>
    </div>
    </>
  ) : <Loader/>
}

export default Home