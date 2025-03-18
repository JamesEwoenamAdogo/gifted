import React from 'react';
import { motion } from 'framer-motion';
import computer from "../components/images/7922055.jpg"
import DataScience from "../components/images/18141.jpg"
import Physics from "../components/images/physics6.jpg"
import Engineering from "../components/images/5131615.jpg"
import Mathematics from "../components/images/4542742.jpg"
import AI from "../components/images/AI.jpg"
import CyberSecurity from "../components/images/3849223.jpg"
import Renewable from "../components/images/7314.jpg"

const chatGroups = [
  { title: "Introduction to Computer Science", description: "Join discussions on computer science basics and programming.", image: computer },
  { title: "Data Science & Machine Learning", description: "Talk about data analysis and ML algorithms.", image: DataScience },
  { title: "Physics Fundamentals", description: "Explore core concepts of physics with peers.", image: Physics },
  { title: "Engineering Basics", description: "Discuss essential engineering principles and applications.", image: Engineering },
  { title: "Mathematics for Scientists", description: "Solve complex math problems and share insights.", image: Mathematics },
  { title: "Artificial Intelligence", description: "Dive into AI and deep learning discussions.", image: AI },
  { title: "Cybersecurity Essentials", description: "Learn about securing digital systems and networks.", image: CyberSecurity },
  { title: "Renewable Energy Technologies", description: "Explore sustainable energy solutions and innovations.", image: Renewable }
];

const Community = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Chat Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chatGroups.map((group, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <img src={group.image} alt={group.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{group.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{group.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition">Join Group</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Community;