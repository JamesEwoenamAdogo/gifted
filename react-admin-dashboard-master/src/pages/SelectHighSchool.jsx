import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../Context'

const SelectHighSchool = () => {
    const {setGrade} = useContext(storeContext)
    
  return (
    <div className='flex flex-col gap-4 absolute top-[45%] left-[40%]'>
        
        <h1 className='font-semibold'>Select Grade</h1>
        

        <Link to={"/purpose"}><button onClick={()=>{setGrade("Grade 12")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 12</button></Link>
        <Link to={"/purpose"}><button onClick={()=>{setGrade("Grade 11")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 11</button></Link>
        <Link to={"/purpose"}><button onClick={()=>{setGrade("Grade 10")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 10</button></Link>



    </div>
  )
}

export default SelectHighSchool