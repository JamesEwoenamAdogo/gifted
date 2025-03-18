import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../Context'

const SelectPrimary = () => {
    const {setGrade}= useContext(storeContext)
    
  return (
    <div className='flex flex-col gap-4 absolute top-[20%] left-[40%]'>
        
        <h1 className='font-semibold'>Select Grade</h1>
        

        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 9")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 9</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 8")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 8</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 7")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 7</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 6")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 6</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 5")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 5</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 4")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 4</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 3")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 3</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 2")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 2</button></Link>
        <Link to={"/select-parent"}><button onClick={()=>{setGrade("Grade 1")}} className='w-[350px] h-[30px] bg-blue-700 text-white rounded-md hover:bg-black '>GRADE 1</button></Link>

    </div>
  )
}

export default SelectPrimary