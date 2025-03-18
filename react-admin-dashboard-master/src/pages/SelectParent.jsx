import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi2";
import { storeContext } from '@/Context';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

// Brand colors
const brandColors = {
  darkBlue: '#001D3D',
  mediumBlue: '#003566',
  navy: '#000814',
  lightBlue: '#EEF2F6',
  white: '#FFFFFF',
  gray: '#F3F4F6',
};

const SelectParent = ({ competitionList }) => {
  const {
    studychecked,
    prepChecked,
    setUserExamination,
    userExamination,
    loadCompetitions,
    setCompetitionList,
    setLoadCompetitions,
    purposeOfRegistration,
    SetPurposeofRegistration,
    firstName,
    lastName,
    DOB,
    email,
    mobileNumber,
    category,
    password,
    gender,
    school,
    country,
    grade,
    educationalLevel,
    purposes,
    setPurposes
  } = useContext(storeContext);

  const [selectAtLeastOne, setSelectAtLeastOne] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userExamination);
  }, [userExamination]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      SetPurposeofRegistration((prev) => [...prev, value]);
      setSelectAtLeastOne("");
    } else {
      SetPurposeofRegistration((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (purposeOfRegistration.length > 0) {
        const registerData = {
          firstName: firstName,
          lastName: lastName,
          DOB: DOB,
          email: email,
          mobileNumber,
          Category: category,
          password,
          gender,
          School: school,
          country,
          grade,
          educationalLevel,
          purposeOfRegistration: purposeOfRegistration
        };
        
        const response = await axios.post("/register-user", registerData);
        
        if (response.data.success) {
          setLoadCompetitions(true);
          navigate("/overview");
          toast.success("User registered successfully");
          localStorage.setItem("purpose", JSON.stringify(response.data.purpose_Of_Registration));
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
          studychecked("");
          prepChecked("");
        }
      } else {
        setSelectAtLeastOne("Please select at least one option");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Choose Your Activities</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Select the options that best match what you would like to do
          </p>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <form onSubmit={(e) => handleSubmit(e)} className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {competitionList.map((item, index) => (
              <div 
                key={index} 
                className="bg-blue-50 hover:bg-blue-100 transition-colors duration-200 p-4 rounded-lg border border-blue-100 h-full flex flex-col"
              >
                <label className="flex items-start space-x-3 cursor-pointer w-full">
                  <input 
                    type="checkbox" 
                    name="option" 
                    value={item.name} 
                    onChange={(e) => handleCheckboxChange(e)}
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 mt-1"
                  />
                  <div className="flex-1">
                    <span className="text-blue-900 font-medium block">{item.name}</span>
                    {item.description && (
                      <p className="mt-1 text-sm text-blue-700">
                        {item.description}
                      </p>
                    )}
                  </div>
                </label>
              </div>
            ))}
          </div>

          {selectAtLeastOne && (
            <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm">
              {selectAtLeastOne}
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="inline-flex items-center justify-center text-blue-700 hover:text-blue-900 font-medium order-2 md:order-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
            
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center order-1 md:order-2"
              type="submit"
            >
              Complete Registration
              <HiArrowRight className="ml-2" />
            </button>
          </div>
        </form>

        {/* Additional Info Cards (Full Width Usage) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
            <h3 className="text-lg font-bold text-blue-900 mb-2">What happens next?</h3>
            <p className="text-blue-700">
              After registration, you'll have access to your personalized dashboard where you can track your progress and access your selected activities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Need help?</h3>
            <p className="text-blue-700">
              If you have any questions about the registration process or available activities, please contact our support team.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectParent;