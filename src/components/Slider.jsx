import { useEffect, useRef, useState } from "react"
// import GlobalAPI from "../services/GlobalAPI"
import {movieList} from "../constants/MoiveList"
import { HiChevronLeft,HiChevronRight } from "react-icons/hi2"


 const Slider =()=>{
    const [MovieList,setMoiveList] = useState([])
    const elementRef =useRef();
    const screenWidth=window.innerWidth;
    useEffect(()=>{
        setMoiveList(movieList)
    },[]);
    
    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
    return(
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 
            mt-[200px] cursor-poiter"
             onClick={()=>sliderLeft(elementRef.current)}/>
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 
            mt-[200px] cursor-poiter right-0"
             onClick={()=>sliderRight(elementRef.current)}/>
        

        <div className="flex overflow-x-auto w-full px-16 py-4 
        scrollbar-none scroll-smooth" ref={elementRef}>
            {MovieList.map((item,index)=>(
                <img src={item}
                alt="moiveimg"
                key={index}
                className="min-w-full  md:h-[400px] object-cover
                object-left-top mr-5 rounded-md hover:border-[4px]
                border-gray-400 transition-all duration-100 ease-in-out"/>
            ))}
        </div>
        </div>
    )
 }

 export default Slider