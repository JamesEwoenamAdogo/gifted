import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { storeContext } from '@/Context';

// Brand colors
const brandColors = {
  darkBlue: '#001D3D',
  mediumBlue: '#003566',
  navy: '#000814',
  lightBlue: '#EEF2F6',
  white: '#FFFFFF',
  gray: '#F3F4F6',
};

const SelectCategory = () => {
  const { setCategory, setLoadCompetitions } = useContext(storeContext);

  const categoryOptions = [
    {
      name: "Student",
      icon: "🎓",
      description: "For current students at any level",
      path: "/select-student",
      action: () => setCategory("Student")
    },
    {
      name: "Graduate",
      icon: "🎯",
      description: "For recent graduates seeking opportunities",
      path: "/purpose",
      action: () => {
        setCategory("Graduate");
        setLoadCompetitions(true);
      }
    },
    {
      name: "Working Professional",
      icon: "💼",
      description: "For established career professionals",
      path: "/purpose",
      action: () => {
        setCategory("Working Professional");
        setLoadCompetitions(true);
      }
    },
    {
      name: "Parent",
      icon: "👪",
      description: "For parents supporting their children",
      path: "/select-parent",
      action: () => {
        setCategory("Parent");
        setLoadCompetitions(true);
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b w-full from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Choose Your Path</h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Select the category that best describes you to personalize your journey
          </p>
        </div>
      </div>

      {/* Category Cards Container */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryOptions.map((category, index) => (
            <Link 
              to={category.path} 
              key={index}
              className="group block"
              onClick={category.action}
            >
              <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-1 border border-blue-50">
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{category.name}</h3>
                  <p className="text-blue-600 mb-6">{category.description}</p>
                  <div className="mt-auto w-full">
                    <div className="py-3 px-4 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 group-hover:bg-blue-800 text-center">
                      Select
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-blue-800 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.32,118.92,163.89,106.92,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SelectCategory;