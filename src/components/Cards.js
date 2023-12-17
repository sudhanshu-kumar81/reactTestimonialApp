import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import { useState } from 'react';
const Cards=(props)=>{
    let reviews=props.reviews;
    const [index ,setIndex]=useState(0);
    function SurpriseMetHandler(){
      let randomIndex =Math.floor(Math.random()*reviews.length)
      setIndex(randomIndex);
    }
    function leftShiftHandler(){
     if(index==0){
        setIndex(reviews.length-1);
     }
     else{
        setIndex(index-1);
     }
    }
    function rightShiftHandler(){
        if(index+1==reviews.length){
            setIndex(0);
         }
         else{
            setIndex(index+1);
         }
    }
    
  return (
    <div className='w-[85vw] h-[60vh] md:w-[700px]  bg-white flex flex-col justify-center items-center hover:shadow-xl rounded-lg'>
        <Card review={reviews[index]}></Card> 
        <div className=' flex text-3x mt-5 gap-3 text-violet-400 font-bold mx-auto space-x-2  '>
           
           <button onClick={leftShiftHandler} className='cursor-pointed hover:text-violet-500 '><FiChevronLeft></FiChevronLeft></button>
           <div onClick={rightShiftHandler} className='cursor-pointed hover:text-violet-500'><FiChevronRight></FiChevronRight></div>
       </div>
  
          
   
       <div className='mx-auto  my-6'>
           <button onClick={SurpriseMetHandler}  className='bg-violet-400 hover:bg-violet-500   cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>surprise me</button>
       </div>
    </div>
   
  )
}
export default Cards;