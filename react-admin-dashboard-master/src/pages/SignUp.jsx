import React, { useState, useContext } from 'react';
import { storeContext } from '@/Context';
import { useNavigate } from "react-router-dom";

// Brand colors
const brandColors = {
  darkBlue: '#001D3D', // Primary dark blue
  mediumBlue: '#003566', // Secondary medium blue
  navy: '#000814', // Dark navy for accents
  lightBlue: '#EEF2F6', // Light blue for backgrounds
  white: '#FFFFFF', // White for text and backgrounds
  gray: '#F3F4F6', // Light gray for backgrounds
};

// Custom styled button component
const Button = ({ children, onClick, isPrimary, disabled, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base shadow-sm hover:shadow-md ${
        isPrimary 
          ? "text-white hover:brightness-110"
          : "hover:bg-gray-100"
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      style={{ 
        backgroundColor: isPrimary ? brandColors.darkBlue : 'transparent',
        color: isPrimary ? brandColors.white : brandColors.darkBlue,
        borderColor: brandColors.darkBlue,
        border: isPrimary ? 'none' : '1px solid',
      }}
    >
      {children}
    </button>
  );
};

// Custom input field component with floating labels
const InputField = ({ label, type = "text", name, value, onChange, required = false, placeholder = "" }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col mb-5 relative">
      <label 
        className={`absolute left-4 transition-all duration-200 ${
          isFocused || value ? 'top-1 text-xs text-gray-500' : 'top-4 text-sm text-gray-700'
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={isFocused ? placeholder : ''}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
        style={{ 
          focusRing: brandColors.mediumBlue,
          caretColor: brandColors.darkBlue
        }}
      />
    </div>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const {
    setfirstName,
    setLastName,
    setEmail,
    setDOB,
    setGender,
    setPassword,
    setMobileNumber,
    setCountry
  } = useContext(storeContext);

  // Local state for form values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    dob: '',
    gender: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });

  // State for current step
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle radio button change
  const handleGenderChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      gender: value
    }));
  };

  // Move to next step
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  // Move to previous step
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Check if current step is valid
  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.email.includes('@');
    } else if (currentStep === 2) {
      return formData.country && formData.dob && formData.gender;
    } else if (currentStep === 3) {
      return formData.mobileNumber && formData.password && 
             formData.confirmPassword && (formData.password === formData.confirmPassword);
    }
    return false;
  };

  // Password strength indicator
  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: "", color: "" };
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    const strengthMap = {
      1: { text: "Weak", color: "#FF4D4F" },
      2: { text: "Fair", color: "#FAAD14" },
      3: { text: "Good", color: "#52C41A" },
      4: { text: "Strong", color: "#1890FF" }
    };
    
    return { 
      strength, 
      ...strengthMap[strength] || { text: "", color: "" }
    };
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save all values to context
    setfirstName(formData.firstName);
    setLastName(formData.lastName);
    setEmail(formData.email);
    setCountry(formData.country);
    setDOB(formData.dob);
    setGender(formData.gender);
    setMobileNumber(formData.mobileNumber);
    setPassword(formData.password);
    
    // Navigate to next page
    navigate("/select-category");
  };

  // Render progress bar
  const ProgressBar = () => {
    return (
      <div className="w-full mb-6 md:mb-10">
        <div className="flex justify-between mb-3">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div 
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-xs md:text-sm font-medium shadow-sm transition-all duration-300"
                style={{ 
                  backgroundColor: currentStep > index + 1 
                    ? '#4CAF50' 
                    : currentStep === index + 1 
                      ? brandColors.mediumBlue
                      : brandColors.gray,
                  color: (currentStep >= index + 1) ? brandColors.white : '#6B7280',
                  transform: currentStep === index + 1 ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                {currentStep > index + 1 ? '✓' : index + 1}
              </div>
              <span className="text-xs md:text-sm mt-1 md:mt-2 font-medium" style={{ 
                color: currentStep === index + 1 ? brandColors.darkBlue : '#6B7280',
              }}>
                {index === 0 ? 'Account' : index === 1 ? 'Personal' : 'Security'}
              </span>
              
              {/* Connect lines between steps */}
              {index < totalSteps - 1 && (
                <div className="absolute h-1 top-4 md:top-5 left-8 md:left-10 w-full -z-10" style={{ 
                  backgroundColor: currentStep > index + 1 ? '#4CAF50' : brandColors.gray
                }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Get password strength for current password
  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full" style={{ backgroundColor: brandColors.lightBlue }}>
      {/* Left side - Branding & Information (visible on medium screens and above) */}
      <div className="hidden md:flex md:w-1/3 lg:w-2/5 bg-gradient-to-b from-blue-800 to-blue-900 text-white p-8 flex-col justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Community</h1>
          <p className="text-lg mb-8 opacity-90">Create an account to unlock exclusive features and personalized content.</p>
          
          <div className="space-y-8 mt-12">
            <div className="flex items-start">
              <div className="bg-blue-700 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Personalized Experience</h3>
                <p className="opacity-80 mt-1">Content tailored to your preferences</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-700 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Secure Account</h3>
                <p className="opacity-80 mt-1">Your data is protected with us</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-700 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Lightning Fast</h3>
                <p className="opacity-80 mt-1">Quick and responsive platform</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <p className="opacity-70 text-sm">© 2025 Gifted. All rights reserved.</p>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-xl">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: brandColors.darkBlue }}>Create Your Account</h1>
              <p className="text-gray-600">Step {currentStep} of {totalSteps}: {currentStep === 1 ? 'Account Details' : currentStep === 2 ? 'Personal Information' : 'Security Setup'}</p>
            </div>

            <ProgressBar />

            {/* Step 1: Account Information */}
            {currentStep === 1 && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField 
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                  />
                  <InputField 
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                  />
                </div>
                <InputField 
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@example.com"
                />
                {formData.email && !formData.email.includes('@') && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                )}
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="space-y-3">
                <InputField 
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="United States"
                />
                
                <div className="flex flex-col mb-5">
                  <label className="mb-2 text-sm font-medium text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                    style={{ caretColor: brandColors.darkBlue }}
                  />
                </div>
                
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Gender <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={`flex items-center justify-center p-3 rounded-lg border transition-all cursor-pointer ${
                        formData.gender === 'Male' ? 'border-2' : 'border'
                      }`}
                      style={{ 
                        borderColor: formData.gender === 'Male' ? brandColors.darkBlue : '#D1D5DB',
                        backgroundColor: formData.gender === 'Male' ? brandColors.lightBlue : brandColors.white
                      }}
                      onClick={() => handleGenderChange('Male')}
                    >
                      <input
                        type="radio"
                        className="w-4 h-4 mr-2"
                        checked={formData.gender === 'Male'}
                        onChange={() => {}}
                        style={{ accentColor: brandColors.darkBlue }}
                      />
                      <span>Male</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center p-3 rounded-lg border transition-all cursor-pointer ${
                        formData.gender === 'Female' ? 'border-2' : 'border'
                      }`}
                      style={{ 
                        borderColor: formData.gender === 'Female' ? brandColors.darkBlue : '#D1D5DB',
                        backgroundColor: formData.gender === 'Female' ? brandColors.lightBlue : brandColors.white
                      }}
                      onClick={() => handleGenderChange('Female')}
                    >
                      <input
                        type="radio"
                        className="w-4 h-4 mr-2"
                        checked={formData.gender === 'Female'}
                        onChange={() => {}}
                        style={{ accentColor: brandColors.darkBlue }}
                      />
                      <span>Female</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Security Information */}
            {currentStep === 3 && (
              <div className="space-y-3">
                <InputField 
                  label="Mobile Number"
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  placeholder="+1 (123) 456-7890"
                />
                
                <div className="flex flex-col mb-5">
                  <label className="mb-2 text-sm font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  />
                  
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium" style={{ color: passwordStrength.color }}>
                          {passwordStrength.text}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-300" 
                          style={{ 
                            width: `${(passwordStrength.strength * 25)}%`,
                            backgroundColor: passwordStrength.color 
                          }}
                        ></div>
                      </div>
                      
                      <ul className="text-xs text-gray-500 mt-2 space-y-1">
                        <li className={formData.password.length >= 8 ? 'text-green-500' : ''}>
                          • At least 8 characters
                        </li>
                        <li className={/[A-Z]/.test(formData.password) ? 'text-green-500' : ''}>
                          • At least 1 uppercase letter
                        </li>
                        <li className={/[0-9]/.test(formData.password) ? 'text-green-500' : ''}>
                          • At least 1 number
                        </li>
                        <li className={/[^A-Za-z0-9]/.test(formData.password) ? 'text-green-500' : ''}>
                          • At least 1 special character
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <InputField 
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
                
                {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-sm">Passwords do not match</p>
                )}
              </div>
            )}

            <div className="flex justify-between mt-8 md:mt-10">
              {currentStep > 1 ? (
                <Button onClick={prevStep} className="px-4 sm:px-5">
                  ← Back
                </Button>
              ) : (
                <div></div> // Empty div to maintain spacing with flex justify-between
              )}
              
              {currentStep < totalSteps ? (
                <Button 
                  isPrimary 
                  onClick={nextStep} 
                  disabled={!isStepValid()}
                  className="px-4 sm:px-5"
                >
                  Continue →
                </Button>
              ) : (
                <Button 
                  isPrimary 
                  type="submit" 
                  disabled={!isStepValid()}
                  className="px-5 sm:px-6"
                >
                  Complete Registration
                </Button>
              )}
            </div>
            
            {/* Sign-in link (only visible on mobile where branding section is hidden) */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-sm text-gray-600">
                Already have an account? <a href="/signin" className="font-medium" style={{ color: brandColors.darkBlue }}>Sign in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;