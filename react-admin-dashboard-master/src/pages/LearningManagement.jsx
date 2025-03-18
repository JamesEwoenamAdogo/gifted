import { motion } from "framer-motion";
import computer from "../components/images/7922055.jpg"
import DataScience from "../components/images/18141.jpg"
import Physics from "../components/images/physics6.jpg"
import Engineering from "../components/images/5131615.jpg"
import Mathematics from "../components/images/4542742.jpg"
import AI from "../components/images/AI.jpg"
import CyberSecurity from "../components/images/3849223.jpg"
import Renewable from "../components/images/7314.jpg"


const courses = [
  { title: "Introduction to Computer Science", description: "Learn the basics of computer science and programming.", image:computer },
  { title: "Data Science & Machine Learning", description: "Explore data analysis and machine learning algorithms.", image: DataScience },
  { title: "Physics Fundamentals", description: "Understand the core concepts of physics.", image: Physics },
  { title: "Engineering Basics", description: "Learn essential engineering principles and applications.", image: Engineering },
  { title: "Mathematics for Scientists", description: "Strengthen your mathematical foundation.", image: Mathematics },
  { title: "Artificial Intelligence", description: "Discover the fundamentals of AI and deep learning.", image:AI },
  { title: "Cybersecurity Essentials", description: "Learn how to protect digital systems and networks.", image: CyberSecurity },
  // { title: "Renewable Energy Technologies", description: "Explore sustainable energy solutions.", image: Renewable }
];

export default function LearningManagement() {
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
      <h2 className="text-3xl font-bold text-center mb-8">Our STEM Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300"
          >
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}