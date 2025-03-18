import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router"
import { useParams, useLocation } from "react-router-dom"
import axios from "axios"
import { jwtDecode } from 'jwt-decode'
import { PaystackHookExample } from '@/components/PayStackButton'


const Invoice = () => {
  const navigate = useNavigate();
//   const location = useLocation()
  const subItem = JSON.parse(localStorage.getItem("state"))
  const [payNow, setPayNow] = useState(false)
  const [addToInvoice, setAddToInvoice] = useState(false)
  const [action, setAction]= useState("")
  const [cost, setCost]= useState(250)
  const [addOns, setAddOns] = useState(false)
  const [paymentMethod,setPaymentMethod]=useState("")



  const token = localStorage.getItem("token")
 
  

  const handleSubmit = async (e)=>{
    const id = localStorage.getItem("id")
    e.preventDefault()
    try{
      if(paymentMethod=="invoice"){
        const response = await axios.post(`/update-user-details/${id}`,{Registered: subItem.name, Invoice:{name:subItem.name,Cost:cost} ,AddOns:"" , Paid:""},{headers:{token}})
        if(response.data.success){
          console.log("Registration done")
          alert("Added to invoice, please go to your invoice to complete payment")
          navigate("/user-dashboard")
        }
        else{
          console.log(response.data.message)
        }
  
      }
      else if(payNow){
        const response = await axios.post("/update-user-details",{Registered: subItem.name, Invoice:{name:subItem.name,Cost:cost} ,AddOns:subItem.name, Paid: subItem.name},{headers:{token}})
        if(response.data.success){
          console.log("Registration and payment done")
          alert("Registration done")
          navigate("/user-dashboard")
          
        }
        else{
          console.log(response.data.message)
        }
              

      }

      
     

    }catch(error){
      console.log(error)
    }

  }

  const handleChecked = async(e)=>{
    
      const {checked}= e.target
      if(checked){
        setCost(400)
      }
      else if(!checked){
        setCost(250)
      }
    }
  




  return (
<div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900 p-6 w-[100%]">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          {subItem.name}
        </h1>

        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-300 transition"
        >
          Go Back
        </button>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Registration Info */}
          <h1 className="font-semibold text-lg text-blue-600 text-center">
            {`Register for ${subItem.name}`}
          </h1>

          {/* Details */}
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg border">
            <p className="font-semibold">Start Date: <span className="text-gray-600 dark:text-gray-300">{subItem.StartDate}</span></p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg border">
            <p className="font-semibold">End Date: <span className="text-gray-600 dark:text-gray-300">{subItem.EndDate}</span></p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg border">
            <h1 className="font-semibold mb-2">Description</h1>
            <p className="text-gray-600 dark:text-gray-300">{subItem.Description}</p>
          </div>

          {/* Add-ons Checkbox */}
          <div className="flex items-center gap-3">
            <label htmlFor="addons" className="font-medium text-gray-700 dark:text-white">
              Add Ons?
            </label>
            <input
              id="addons"
              type="checkbox"
              className="w-5 h-5 accent-blue-500"
              onChange={(e) => setCost(e.target.checked ? 400 : 250)}
            />
          </div>

          {/* Total Cost */}
          <div className="text-lg font-semibold text-gray-800 dark:text-white text-center">
            {`Total Cost: $${cost}`}
          </div>

          {/* Payment Options */}
          <div className="flex gap-6 justify-center">
            <button
              type="button"
              className={`text-blue-500 hover:underline ${paymentMethod === "payNow" ? "font-bold" : ""}`}
              onClick={() => {
                setPaymentMethod("payNow");
                setAction("Click here to Pay Now");
              }}
            >
              Pay Now
            </button>
            <button
              type="button"
              className={`text-blue-500 hover:underline ${paymentMethod === "invoice" ? "font-bold" : ""}`}
              onClick={() => {
                setPaymentMethod("invoice");
                setAction("Click Here to Add to Invoice");
              }}
            >
              Add to Invoice
            </button>
          </div>

          {/* Payment Button */}
          {paymentMethod === "invoice" && (
            <button
              className="w-full h-[40px] bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              type="submit"
            >
              {action}
            </button>
          )}
          {paymentMethod === "payNow" && <PaystackHookExample />}
        </form>
      </div>
    </div>

  );
}

export default Invoice