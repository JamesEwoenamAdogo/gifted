import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { storeContext } from '@/Context';
import { useNavigate } from 'react-router-dom';

// Brand colors from previous design
const brandColors = {
  darkBlue: '#001D3D',
  mediumBlue: '#003566',
  navy: '#000814',
  lightBlue: '#EEF2F6',
  white: '#FFFFFF',
  gray: '#F3F4F6',
};

const SelectStudent = () => {
  const { setEducationalLevel, setSchool } = useContext(storeContext);
  const navigate = useNavigate()

  const educationLevels = [
    {
      name: "Grade 9",
      
      description: "Higher education students",
    },
    {
      name: "Grade 8",
      
      description: "Secondary education students",
    },
    {
      name: "Grade 7",
      
      description: "Elementary education students",
    },
    {
      name: "Grade 6",
      
      description: "Elementary education students",
    },
    {
      name: "Grade 5",
      
      description: "Elementary education students",
    },
    {
      name: "Grade 4",
      
      description: "Elementary education students",
    },
    {
      name: "Grade 3",
      
      description: "Elementary education students",
    },
    {
      name: "Grade 2",
      
      description: "Elementary education students",
    },
    {
      name: "Grade 1",
      
      description: "Elementary education students",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">Select Your Educational Level</h1>
          <p className="text-lg text-blue-700">
            Choose the option that best describes your current educational status
          </p>
        </div>

        {/* Education Level Options */}
        <div className="grid gap-6 max-w-lg mx-auto">
          {educationLevels.map((level, index) => (
            <Link 
              to="/select-parent" 
              key={index} 
              className="block w-full"
              onClick={() => setEducationalLevel(level.name)}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:translate-y-1 border border-blue-50 flex items-center">
                <div className="text-3xl mr-4">{level.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-900">{level.name}</h3>
                  <p className="text-blue-600 text-sm">{level.description}</p>
                </div>
                <div className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg p-2 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Navigation */}
        <div className="mt-10 text-center" onClick={()=>{navigate('/select-category')}}>
          <Link to="/" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectStudent;