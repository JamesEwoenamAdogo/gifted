import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useNavigate} from 'react-router-dom';
import computer from "../components/images/7922055.jpg"
import DataScience from "../components/images/18141.jpg"
import Physics from "../components/images/physics6.jpg"
import Engineering from "../components/images/5131615.jpg"
import Mathematics from "../components/images/4542742.jpg"
import AI from "../components/images/AI.jpg"
import CyberSecurity from "../components/images/3849223.jpg"
import Renewable from "../components/images/7314.jpg"
// import { useNavigate } from "react-router-dom";
// import React, { useContext, useEffect, useState} from 'react'
// import { storeContext } from '../Context'
// import Sidebar from '../Components/Sidebar'
// import { SidebarItem } from "../Components/Sidebar"
// import RoundedCard from '../Components/Card';
// import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, BookOpenText} from "lucide-react";


const quizzes = [
  {
    title: "Introduction to Computer Science Quiz",
    description: "Test your knowledge of computer science fundamentals.",
    image: computer,
    questions: [
      { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: "O(log n)" },
      { question: "Who is considered the father of computing?", options: ["Alan Turing", "Charles Babbage", "Dennis Ritchie", "Tim Berners-Lee"], answer: "Charles Babbage" }
    ]
  },
  {
    title: "Data Science & Machine Learning Quiz",
    description: "Evaluate your understanding of data science and ML.",
    image: DataScience,
    questions: [
      { question: "What is the purpose of a confusion matrix?", options: ["To store data", "To evaluate model performance", "To normalize data", "To generate predictions"], answer: "To evaluate model performance" },
      { question: "Which algorithm is used for supervised learning?", options: ["K-Means", "Linear Regression", "Apriori", "DBSCAN"], answer: "Linear Regression" }
    ]
  },
  {
    title: "Physics Fundamentals Quiz",
    description: "Challenge yourself with physics questions.",
    image: Physics,
    questions: [
      { question: "What is Newton's second law of motion?", options: ["F = ma", "E = mc^2", "V = IR", "P = IV"], answer: "F = ma" },
      { question: "What is the speed of light?", options: ["3.00 x 10^8 m/s", "1.50 x 10^8 m/s", "3.00 x 10^6 m/s", "9.81 m/s^2"], answer: "3.00 x 10^8 m/s" }
    ]
  },
  {
    title: "Engineering Basics Quiz",
    description: "Test your engineering knowledge.",
    image: Engineering,
    questions: [
      { question: "What is the primary material used in civil engineering structures?", options: ["Concrete", "Wood", "Plastic", "Glass"], answer: "Concrete" },
      { question: "Which law states that voltage is equal to current times resistance?", options: ["Ohm's Law", "Newton's Law", "Faraday's Law", "Kirchhoff's Law"], answer: "Ohm's Law" }
    ]
  },
  {
    title: "Mathematics for Scientists Quiz",
    description: "Solve math problems and test your skills.",
    image: Mathematics,
    questions: [
      { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "tan(x)", "sec^2(x)"], answer: "cos(x)" },
      { question: "What is the value of π (pi) to two decimal places?", options: ["3.14", "3.16", "3.12", "3.18"], answer: "3.14" }
    ]
  },
  {
    title: "Artificial Intelligence Quiz",
    description: "Test your knowledge of AI concepts.",
    image: AI,
    questions: [
      { question: "Which type of AI mimics human cognitive abilities?", options: ["Strong AI", "Weak AI", "Reactive AI", "None"], answer: "Strong AI" },
      { question: "What is a neural network composed of?", options: ["Neurons", "Nodes", "Weights", "All of the above"], answer: "All of the above" }
    ]
  },
  {
    title: "Cybersecurity Essentials Quiz",
    description: "Evaluate your cybersecurity awareness.",
    image: CyberSecurity,
    questions: [
      { question: "What does HTTPS stand for?", options: ["HyperText Transfer Protocol Secure", "High-Tech Transfer Protocol System", "Hyperlink Text Transfer System", "Home Transfer Text Protocol"], answer: "HyperText Transfer Protocol Secure" },
      { question: "Which of the following is a common cybersecurity attack?", options: ["Phishing", "DDoS", "Malware", "All of the above"], answer: "All of the above" }
    ]
  },
  // {
  //   title: "Renewable Energy Technologies Quiz",
  //   description: "Test your knowledge of sustainable energy.",
  //   image: Renewable,
  //   questions: [
  //     { question: "Which of the following is NOT a renewable energy source?", options: ["Solar", "Wind", "Coal", "Hydropower"], answer: "Coal" },
  //     { question: "What device converts sunlight into electricity?", options: ["Wind turbine", "Solar panel", "Battery", "Generator"], answer: "Solar panel" }
  //   ]
  // }
];

export default function AssessmentManagement() {
  const navigate = useNavigate();

  const startQuiz = (quiz) => {
    navigate('/quiz-questions', { state: { questions: quiz.questions } });
  };

  return (
    <div className="flex gap-2">
            {/* <Sidebar>
                <Link to="/user-dashboard"><SidebarItem icon={<Home size={20} />} text="Dashboard" link="/user-dashboard"/></Link>
                <SidebarItem icon={<StickyNote size={20} />} text="Community" alert link="/" />
                <Link to="/make-payment"><SidebarItem icon={<Calendar size={20} />} text="Invoices" link="/make-payment"/></Link>
                <Link to="/learning-management"><SidebarItem icon={<BookOpenText size={20} />} text="Learning Management" link="/learning-management"/></Link>
                <Link to="/assessment-management"><SidebarItem icon={<BookOpenText size={20} />} text="Assessment Management" link="/assessment-management"/></Link>
                <SidebarItem icon={<Layers size={20} />} text="Add Ons" link="/" />
       
              
            </Sidebar> */}
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">STEM Quizzes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {quizzes.map((quiz, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300"
          >
            <img src={quiz.image} alt={quiz.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{quiz.title}</h3>
              <p className="text-gray-600 mt-2">{quiz.description}</p>
              <button 
                onClick={() => startQuiz(quiz)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Start Quiz
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    </div>
    
  );
}