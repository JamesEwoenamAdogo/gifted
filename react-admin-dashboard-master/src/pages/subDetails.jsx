import React,{useContext, useEffect, useState} from 'react'
import {useNavigate} from "react-router"
import { useParams , useMatch} from 'react-router-dom';
import { storeContext } from '../Context';
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";


// import { useContext } from 'react';
// import RoundedCard from '../Components/Card'

const SubDetails = ({ExaminationList}) => {

 
 
  const navigate = useNavigate();
  const selectedItem = JSON.parse(localStorage.getItem("purpose")).find((item) => item._id === localStorage.getItem("id"));
  const [calendarDetails, setCalendarDetails]= useState({})
  const handleSubItemClick = (subItem) => {
    navigate(`/subitem/${subItem.name}`, { state: subItem }); // Navigate to SubItemPage
    localStorage.setItem("state",JSON.stringify(subItem))
  };

    useEffect(()=>{
        console.log(selectedItem)
    },[])
    if (!selectedItem) {
        return <h2>Item not found!</h2>;
    }
  return (
    <div className="min-h-screen dark:bg-gray-900 w-[100%] h-[100%] align-middle">
  <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">
      {selectedItem.name}
    </h1>
    <button
      onClick={() => navigate(-1)}
      className="mt-5 block mx-auto px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition"
    >
      Go Back
    </button>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {selectedItem.subTypes?.map((subItem) => (
        <div
          key={subItem._id}
          className="group relative cursor-pointer bg-white dark:bg-gray-700 shadow-md hover:shadow-xl transition transform hover:scale-105 rounded-lg overflow-hidden"
          onClick={() => handleSubItemClick(subItem)}
        >
          <div className="p-5">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {subItem.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {subItem.Description || "No Description"}
            </p>
          </div>

          <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-lg shadow-md">
            <TrendingUp size={20} />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 group-hover:h-2 transition-all"></div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default SubDetails