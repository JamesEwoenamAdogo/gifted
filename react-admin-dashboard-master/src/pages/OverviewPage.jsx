import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import { useState,useEffect ,useContext} from "react";
import { storeContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";


const OverviewPage = () => {
	// const { theme } = useTheme();
    const {purposes,userExamination,loadExaminations ,SetPurposeofRegistration, setCompetitionList, setId,  competitionList, setLoadExaminations,AllExamination,setExaminationList, ExaminationList,setAllExamination,purposeOfRegistration} = useContext(storeContext)
    const [viewSub, setViewSub] = useState(false)
    const [openDetails,setOpenDetails] = useState(false)
    const [name,setName]= useState("")
    const courseNames = [
      "Introduction to Computer Science", "Data Science & Machine Learning",  "Physics Fundamentals", "Engineering Basics", "Mathematics for Scientists",
      "Artificial Intelligence", "Cybersecurity Essentials", "Renewable Energy Technologies"
    ];
    
    const generateData = () => {
      return courseNames.map((course) => ({
        name: course,
        progress: Math.floor(Math.random() * 100),
        score: Math.floor(Math.random() * 100),
        engagement: Math.floor(Math.random() * 100),
        timeSpent: Math.floor(Math.random() * 20) + 5,
      }));
    };
    
    const data = generateData();
    
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
      
        const navigate = useNavigate()
        useEffect(()=>{
          setLoadExaminations(true)
          const LoadUserExamination = async()=>{
            const token = localStorage.getItem("token")
            const response = await axios.get("/load-purpose",{headers:{token}})
            if(response.data.success){
              localStorage.setItem("purpose",JSON.stringify(response.data.purpose_Of_Registration))
            }
            
          }
          LoadUserExamination()
  
         
  
  
        },[])

        
        const handleCardClick = (id) => {
            navigate(`/details/${id}`);
        };
        const handleCalendarClick = async(id)=>{
            navigate(`/calendars/${id}`)
        }

	return (
		<div className='flex-1 bg-black text-white overflow-auto relative z-10'>
			<Header title='Overview' />
			
			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{/* <StatCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
					<StatCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' /> */}
					{JSON.parse(localStorage.getItem("purpose")).map((item, index)=><div key={index} onClick={()=>{handleCardClick(item._id);localStorage.setItem("id",item._id)}}><StatCard name={item.name} icon={ShoppingBag} value='Register' color='#EC4899' /></div>)}
					{/* <StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' /> */}
				</motion.div>

				{/* CHARTS */}
        <div className="flex gap-2 bg-white">
         <div className=" p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-center">Quiz Performance</h2>
                  <BarChart width={400} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#FF8042" />
                  </BarChart>
          </div>
           <div className=" p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-center">Engagement Metrics</h2>
                    <PieChart width={400} height={250}>
                      <Pie data={data} dataKey="engagement" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                        {data.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
          </div>
          </div>
          
        

			
			</main>
		</div>
	);
};
export default OverviewPage;
