import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import Community from "./pages/Community";
import LearningManagement from "./pages/LearningManagement";
import AssessmentManagement from "./pages/AssessmentManagement";
import AIAgent from "./pages/AIAgent";
import InvoiceList from "./pages/InvoiceList";
import Diagnostics from "./pages/Diagnostics";
import { useContext,useEffect } from "react";
import Select from "./pages/SelectGraduatWP";

import SelectParent from "./pages/SelectParent";
import SelectStudent from "./pages/SelectStudent";
import { storeContext } from './Context'
import SelectCategory from "./pages/SelectCategory";
import SelectHighSchool from "./pages/SelectHighSchool";
import SelectPrimary from "./pages/SelectPrimary";
import InputSchool from "./pages/InputSchool";
import SubDetails from "./pages/subDetails"
import Invoice from "./pages/Invoice";
import axios from "axios";
import Login from "./pages/Login";
// import { useLocation } from "react-router-dom";
import LandingPages from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
function App() {
	axios.defaults.baseURL="https://olympiadedu-backend-neh8.onrender.com/api/v1"
    const {setExaminationList,purposeOfRegistration, competitionList, setCompetitionList, ExaminationList} = useContext(storeContext)
	const location = useLocation()
    useEffect(()=>{
        const LoadCompetitions = async ()=>{
          const token = localStorage.getItem("token")
          if(token){
            // const allPurposeResponse = await axios.get("/load-purpose",{ headers: { token }})
            // localStorage.setItem("Invoice",JSON.stringify(allPurposeResponse.data.Invoice))
          }
          const response = await axios.get("/all-competitions")
            
          if(response.data.success){
              localStorage.setItem("competitionList",JSON.stringify(response.data.AllCompetitions))
              setCompetitionList(()=>{return [...response.data.AllCompetitions]})
            }
              
          }
         LoadCompetitions()
        
        },[])

	
	return (
		<div className= "flex h-screen overflow-auto">
			{/* BG */}
			{/* <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div> */}

			{(location.pathname=="/overview"||location.pathname=="/community"||location.pathname=="/learning-management"||location.pathname=="/assessment-management"||location.pathname=="/ai-agent"||location.pathname=="/invoice"||location.pathname=="/diagnostics")&&<Sidebar />}
			<Routes>
				<Route index element={<LandingPages/>}/>
				
				<Route path='/overview' element={<OverviewPage />} />
				<Route path='/community' element={<Community />} />
				<Route path='/learning-management' element={<LearningManagement />} />
				<Route path='/assessment-management' element={<AssessmentManagement />} />
				<Route path='/ai-agent' element={<AIAgent />} />
				<Route path='/invoice' element={<InvoiceList />} />
				<Route path='/diagnostics' element={<Diagnostics />} />
				<Route element={<Select competitionList={competitionList}/>} path='/purpose'/>
				<Route element={<SignUp/>} path="/sign-up"/>
				<Route element={<SelectParent/>} path='/select-parent'/>
				<Route element={<SelectStudent/>} path='/select-student'/>
				<Route element={<SelectCategory/>} path="/select-category"/>
				<Route element={<SelectHighSchool/>} path='select-highschool'/>
				<Route element={<Login/>} path="/login"/>
				
				<Route element={<SelectPrimary/>} path='/select-primary'/>
				<Route element={<InputSchool/>} path='/input-school'/>
				<Route element={<SubDetails/>} path='/details/:id'/>
				<Route element={<Invoice/>} path='/subitem/:name'/>
				{/* <Route element={<Questions/>} path="/quiz-questions"/> */}
			</Routes>
		</div>
	);
}

export default App;
