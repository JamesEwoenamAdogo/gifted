import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { storeContext } from '../Context';

// Brand colors to maintain consistency
const brandColors = {
  darkBlue: '#001D3D',
  mediumBlue: '#003566',
  navy: '#000814',
  lightBlue: '#EEF2F6',
  white: '#FFFFFF',
  gray: '#F3F4F6',
};

const InputSchool = () => {
  const { educationalLevel, setSchool } = useContext(storeContext);
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    if (educationalLevel === "University") {
      navigate("/purpose");
    } else if (educationalLevel === "Primary") {
      navigate("/select-primary");
    } else if (educationalLevel === "High School") {
      navigate("/select-highSchool");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-50">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">School Information</h1>
            <p className="text-blue-700">
              Enter the name of your {educationalLevel?.toLowerCase()} to continue
            </p>
          </div>

          {/* Input Form */}
          <form onSubmit={(e) => handleNavigation(e)}>
            <div className="mb-6">
              <label htmlFor="schoolName" className="block text-blue-900 font-semibold mb-2">
                Name of School
              </label>
              <input
                id="schoolName"
                required
                placeholder="Enter your school name"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>

          {/* Back Navigation */}
          <div className="mt-6 text-center">
            <Link
              to="/select-student"
              className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium"
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
              Back to Educational Level
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSchool;