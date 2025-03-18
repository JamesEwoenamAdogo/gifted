import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ArrowRight, 
  BookOpen, 
  Award, 
  Users, 
  Zap,
  Star,
  Calendar,
  CheckCircle,
  Globe,
  GraduationCap,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import lpImage from '../images/lp4.jpg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // For smooth scrolling

const Home = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    // Scroll to top button visibility
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-to-top');
      if (scrollButton) {
        if (window.scrollY > 500) {
          scrollButton.classList.remove('opacity-0', 'invisible');
          scrollButton.classList.add('opacity-100', 'visible');
        } else {
          scrollButton.classList.remove('opacity-100', 'visible');
          scrollButton.classList.add('opacity-0', 'invisible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: true });
  };

  // Brand colors
  const brandColors = {
    darkBlue: '#001D3D', // Primary dark blue
    mediumBlue: '#003566', // Secondary medium blue
    navy: '#000814', // Dark navy for accents
    white: '#FFFFFF', // White for text and backgrounds
  };

  const programs = [
    {
      title: "Mathematics Olympiad",
      description: "Advanced problem-solving techniques for mathematical competitions at all levels.",
      icon: <Award className="w-10 h-10" style={{ color: brandColors.mediumBlue }} />,
      category: "math",
      features: ["Number Theory", "Algebra", "Geometry", "Combinatorics"]
    },
    {
      title: "Physics Olympiad",
      description: "Conceptual understanding and practical application of physics principles for competitions.",
      icon: <Zap className="w-10 h-10" style={{ color: brandColors.mediumBlue }} />,
      category: "physics",
      features: ["Mechanics", "Electromagnetism", "Thermodynamics", "Modern Physics"]
    },
    {
      title: "Chemistry Olympiad",
      description: "Comprehensive preparation for theoretical and practical chemistry challenges.",
      icon: <Globe className="w-10 h-10" style={{ color: brandColors.mediumBlue }} />,
      category: "chemistry",
      features: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Methods"]
    },
    {
      title: "Informatics Olympiad",
      description: "Algorithm design, programming skills, and computational thinking for coding competitions.",
      icon: <Trophy className="w-10 h-10" style={{ color: brandColors.mediumBlue }} />,
      category: "informatics",
      features: ["Algorithms", "Data Structures", "Problem Solving", "Competitive Programming"]
    },
    {
      title: "Biology Olympiad",
      description: "Exploration of molecular, cellular, and ecological concepts for biology competitions.",
      icon: <GraduationCap className="w-10 h-10" style={{ color: brandColors.mediumBlue }} />,
      category: "biology",
      features: ["Molecular Biology", "Genetics", "Ecology", "Human Physiology"]
    },
    {
      title: "Astronomy Olympiad",
      description: "Deep dive into celestial mechanics, astrophysics, and observational astronomy.",
      icon: <Star className="w-10 h-10" style={{ color: brandColors.mediumBlue }} />,
      category: "astronomy",
      features: ["Celestial Mechanics", "Astrophysics", "Cosmology", "Observational Techniques"]
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      achievement: "International Math Olympiad Gold Medalist",
      quote: "The structured approach and challenging problems helped me develop the critical thinking skills needed to excel at IMO.",
      avatar: "/api/placeholder/100/100",
      university: "MIT"
    },
    {
      name: "Sophia Wang",
      achievement: "National Physics Olympiad Silver Medalist",
      quote: "The instructors' expertise and personalized feedback transformed my understanding of complex physics concepts.",
      avatar: "/api/placeholder/100/100",
      university: "Stanford University"
    },
    {
      name: "Michael Kim",
      achievement: "International Chemistry Olympiad Bronze Medalist",
      quote: "The laboratory practice sessions and problem sets were instrumental in my success at the international level.",
      avatar: "/api/placeholder/100/100",
      university: "Harvard University"
    },
    {
      name: "Aisha Patel",
      achievement: "International Informatics Olympiad Finalist",
      quote: "The algorithmic thinking skills I developed through this program continue to serve me in my computer science career.",
      avatar: "/api/placeholder/100/100",
      university: "UC Berkeley"
    },
  ];

  const stats = [
    { value: "95%", label: "Acceptance Rate to Top Universities" },
    { value: "200+", label: "International Medals" },
    { value: "500+", label: "National Champions" },
    { value: "10+", label: "Years of Excellence" },
  ];

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "Our programs are designed for students aged 12-18, with different tracks based on experience level rather than age. We have beginner, intermediate, and advanced courses in each discipline."
    },
    {
      question: "How are the classes structured?",
      answer: "Classes include theoretical lectures, problem-solving sessions, practical labs (for Physics and Chemistry), and mock competitions. Our approach combines conceptual understanding with extensive practice."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both in-person and online classes. Our virtual learning environment includes interactive problem-solving tools, virtual labs, and live sessions with instructors."
    },
    {
      question: "How do students qualify for international competitions?",
      answer: "Students progress through regional and national selection rounds. Our training prepares them for these qualifying competitions, and additional specialized coaching is provided for those who advance to international levels."
    },
    {
      question: "What is your instructor selection process?",
      answer: "Our instructors are former Olympiad medalists, academics, and industry professionals with extensive experience in their fields. They undergo rigorous training in our teaching methodology before joining our faculty."
    },
  ];

  const teamMembers = [
    {
      name: "Dr. James Wilson",
      position: "Academic Director",
      bio: "Former IMO gold medalist and Mathematics Professor with 15 years of experience coaching Olympic teams.",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Prof. Sarah Johnson",
      position: "Physics Department Head",
      bio: "Theoretical physicist with publications in quantum mechanics and experience mentoring national physics teams.",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Robert Chen",
      position: "Chemistry Program Lead",
      bio: "Chemistry researcher and former IChO coach with expertise in laboratory techniques and problem design.",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Lisa Zhang, Ph.D.",
      position: "Informatics Director",
      bio: "Computer scientist specializing in algorithms and competitive programming, with experience at major tech companies.",
      avatar: "/api/placeholder/150/150"
    },
  ];

  const upcomingEvents = [
    {
      title: "Mathematics Open House",
      date: "April 5, 2025",
      description: "Introduction to our mathematics program with sample classes and Q&A with instructors.",
      category: "math"
    },
    {
      title: "Physics Workshop: Mechanics Deep Dive",
      date: "April 12, 2025",
      description: "Intensive workshop focusing on advanced mechanics concepts for competition preparation.",
      category: "physics"
    },
    {
      title: "Summer Olympiad Preparation Camp",
      date: "June 15-30, 2025",
      description: "Two-week intensive camp covering all Olympic disciplines with specialized tracks.",
      category: "all"
    },
    {
      title: "Algorithmic Problem Solving Webinar",
      date: "April 20, 2025",
      description: "Online session focusing on advanced algorithmic techniques for programming contests.",
      category: "informatics"
    },
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

  const filteredEvents = activeTab === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === activeTab || event.category === 'all');

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/50 backdrop-blur-md transition-all duration-200 shadow-sm"
              style={{ backgroundColor: brandColors.darkBlue, color: brandColors.white }}>
        <div className="flex h-20 items-center justify-between px-8 py-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8" style={{ color: brandColors.white }} />
            <span className="text-2xl font-bold" style={{ color: brandColors.white }}>
              GIFTED
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About Us", "Programs", "Success Stories", "Events", "Contact"].map((item, index) => (
              <ScrollLink 
                key={index}
                to={item.toLowerCase().replace(/\s+/g, '-')} 
                smooth={true}
                duration={800}
                offset={-80}
                className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                style={{
                  color: brandColors.white, 
                  ':hover': { color: brandColors.mediumBlue },
                  '::after': { backgroundColor: brandColors.mediumBlue }
                }}
              >
                {item}
              </ScrollLink>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            style={{ color: brandColors.white }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <button 
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                style={{ color: brandColors.mediumBlue, border: `1px solid ${brandColors.mediumBlue}` }}
              >
                Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button 
                className="px-5 py-2 text-sm font-medium text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: brandColors.mediumBlue }}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute w-full backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="py-4 space-y-3 px-8">
            {["Home", "About Us", "Programs", "Success Stories", "Events", "Contact"].map((item, index) => (
              <ScrollLink 
                key={index}
                to={item.toLowerCase().replace(/\s+/g, '-')} 
                smooth={true}
                duration={800}
                offset={-80}
                className="block py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: brandColors.darkBlue }}
              >
                {item}
              </ScrollLink>
            ))}
            <div className="flex items-center gap-2 pt-2 px-4">
              <Link to="/login" className="w-full">
                <button 
                  className="w-full px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ color: brandColors.mediumBlue, border: `1px solid ${brandColors.mediumBlue}` }}
                >
                  Login
                </button>
              </Link>
              <Link to="/sign-up" className="w-full">
                <button 
                  className="w-full px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ color: brandColors.mediumBlue, border: `1px solid ${brandColors.mediumBlue}` }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="w-full py-24 md:py-32 relative overflow-hidden"
               style={{ background: `linear-gradient(135deg, ${brandColors.darkBlue}, ${brandColors.mediumBlue})` }}>
        <div className="absolute w-full h-full top-0 left-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: brandColors.navy }}></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full" style={{ backgroundColor: brandColors.navy }}></div>
        </div>
        
        <div className="px-8 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-7/12 text-white mb-12 md:mb-0" data-aos="fade-right">
              <div className="inline-block py-1 rounded-full text-sm font-medium mb-6"
                  style={{ backgroundColor: `rgba(255, 255, 255, 0.1)`, border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Empowering Young Minds Since 2015
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Excel in <span style={{ color: brandColors.white }}>Academic Competitions</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
                Specialized training for Mathematics, Physics, Chemistry, and Informatics Olympiads designed to help students reach their full potential and compete on the world stage.
              </p>
              <div className="flex flex-wrap gap-4">
                <ScrollLink to="programs" smooth={true} duration={800} offset={-80}>
                  <button className="px-6 py-3 text-base font-medium rounded-lg flex items-center gap-2 group transition-all duration-300 hover:shadow-lg hover:scale-105"
                         style={{ backgroundColor: brandColors.mediumBlue, color: brandColors.white }}>
                    Explore Programs 
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </ScrollLink>
                <ScrollLink to="success-stories" smooth={true} duration={800} offset={-80}>
                  <button className="px-6 py-3 text-base font-medium bg-transparent border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300 text-white">
                    Success Stories
                  </button>
                </ScrollLink>
              </div>
            </div>
            
            <div className="md:w-5/12" data-aos="fade-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-mediumBlue/20 to-navy/20 rounded-lg transform rotate-3 backdrop-blur-md"></div>
                <img src={lpImage} alt="Students working on olympiad problems" 
                     className="relative rounded-lg shadow-2xl z-10" style={{ height: '410px', width: '400px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform"
                     style={{ color: index % 2 === 0 ? brandColors.mediumBlue : brandColors.darkBlue }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 bg-gray-50">
        <div className="px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mediumBlue/20 to-navy/20 rounded-lg transform -rotate-2"></div>
                <img src="/api/placeholder/600/400" alt="Our campus and facilities" 
                     className="relative rounded-lg shadow-xl z-10" />
              </div>
            </div>
            
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                   style={{ color: brandColors.mediumBlue, backgroundColor: `${brandColors.mediumBlue}15` }}>
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cultivating Excellence in Academic Competitions</h2>
              <p className="text-gray-600 mb-6">
                Founded by former Olympiad medalists and passionate educators, Olympiad Edu Center is dedicated to nurturing the next generation of academic talent through specialized training, personalized coaching, and a supportive learning environment.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5" style={{ color: brandColors.mediumBlue }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Instruction</h3>
                    <p className="text-gray-600">Our faculty consists of former Olympiad medalists, university professors, and industry leaders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5" style={{ color: brandColors.mediumBlue }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Methodology</h3>
                    <p className="text-gray-600">Our structured curriculum builds both conceptual understanding and problem-solving skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5" style={{ color: brandColors.mediumBlue }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Global Network</h3>
                    <p className="text-gray-600">Connect with like-minded peers and alumni studying at prestigious universities worldwide.</p>
                  </div>
                </div>
              </div>
              <ScrollLink to="team" smooth={true} duration={800} offset={-80}>
                <button className="px-6 py-3 text-base font-medium rounded-lg flex items-center gap-2 group transition-all duration-300 bg-white border hover:shadow-md"
                       style={{ borderColor: brandColors.mediumBlue, color: brandColors.mediumBlue }}>
                  Meet Our Team
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                 style={{ color: brandColors.mediumBlue, backgroundColor: `${brandColors.mediumBlue}15` }}>
              Our Offerings
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Olympiad Programs</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColors.mediumBlue }}></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Specialized training for different olympiad disciplines, designed to develop deep conceptual understanding and advanced problem-solving skills.
            </p>
          </div>
          
          {/* Program Category Tabs */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-4" data-aos="fade-up">
            <div className="flex space-x-2 p-1 rounded-lg bg-gray-100">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'all' ? 'text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                style={{ backgroundColor: activeTab === 'all' ? brandColors.mediumBlue : 'transparent' }}
              >
                All Programs
              </button>
              <button 
                onClick={() => setActiveTab('math')} 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'math' ? 'text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                style={{ backgroundColor: activeTab === 'math' ? brandColors.mediumBlue : 'transparent' }}
              >
                Mathematics
              </button>
              <button 
                onClick={() => setActiveTab('physics')} 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'physics' ? 'text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                style={{ backgroundColor: activeTab === 'physics' ? brandColors.mediumBlue : 'transparent' }}
              >
                Physics
              </button>
              <button 
                onClick={() => setActiveTab('chemistry')} 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'chemistry' ? 'text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                style={{ backgroundColor: activeTab === 'chemistry' ? brandColors.mediumBlue : 'transparent' }}
              >
                Chemistry
              </button>
              <button 
                onClick={() => setActiveTab('informatics')} 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'informatics' ? 'text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                style={{ backgroundColor: activeTab === 'informatics' ? brandColors.mediumBlue : 'transparent' }}
              >
                Informatics
              </button>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="p-8">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-mediumBlue transition-colors">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">Key Topics</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColors.mediumBlue }}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <ScrollLink to={program.title.toLowerCase().replace(/\s+/g, '-')} smooth={true} duration={800} offset={-80}>
                    <button className="inline-flex items-center font-medium text-sm group-hover:underline"
                           style={{ color: brandColors.mediumBlue }}>
                      Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </ScrollLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-50">
        <div className="px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                 style={{ color: brandColors.mediumBlue, backgroundColor: `${brandColors.mediumBlue}15` }}>
              Our Faculty
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Led by Industry Experts</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColors.mediumBlue }}></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our team consists of former Olympiad medalists, university professors, and industry professionals with a passion for teaching and mentoring.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm mb-3" style={{ color: brandColors.mediumBlue }}>{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-24 bg-white">
        <div className="px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                 style={{ color: brandColors.mediumBlue, backgroundColor: `${brandColors.mediumBlue}15` }}>
              Student Success
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Champions and Their Stories</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColors.mediumBlue }}></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Hear from our students who have achieved excellence in national and international competitions and gone on to prestigious universities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" style={{ color: brandColors.mediumBlue }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.achievement}</p>
                      <p className="text-xs text-gray-500">{testimonial.university}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-gray-50">
        <div className="px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                 style={{ color: brandColors.mediumBlue, backgroundColor: `${brandColors.mediumBlue}15` }}>
              Upcoming Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Learning Community</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColors.mediumBlue }}></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Participate in workshops, seminars, and competitions to enhance your skills and connect with like-minded peers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium" style={{ color: brandColors.mediumBlue }}>
                      {event.category === 'all' ? 'General' : event.category}
                    </div>
                    <Calendar className="h-5 w-5 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <ScrollLink to={event.title.toLowerCase().replace(/\s+/g, '-')} smooth={true} duration={800} offset={-80}>
                    <button className="inline-flex items-center font-medium text-sm mt-4 group-hover:underline"
                           style={{ color: brandColors.mediumBlue }}>
                      Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </ScrollLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                 style={{ color: brandColors.mediumBlue, backgroundColor: `${brandColors.mediumBlue}15` }}>
              Have Questions?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColors.mediumBlue }}></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Find answers to common questions about our programs, admissions, and more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                 style={{ color: brandColors.mediumBlue, backgroundColor: `${brandColors.mediumBlue}15` }}>
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColors.mediumBlue }}></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Have questions or need more information? Reach out to us, and we'll be happy to assist you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6" data-aos="fade-right">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: `${brandColors.mediumBlue}15` }}>
                  <Phone className="h-6 w-6" style={{ color: brandColors.mediumBlue }} />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: `${brandColors.mediumBlue}15` }}>
                  <Mail className="h-6 w-6" style={{ color: brandColors.mediumBlue }} />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">info@olympiadedu.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: `${brandColors.mediumBlue}15` }}>
                  <MapPin className="h-6 w-6" style={{ color: brandColors.mediumBlue }} />
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">123 Education Street, Knowledge City, CA 12345</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8" data-aos="fade-left">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mediumBlue focus:border-mediumBlue transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mediumBlue focus:border-mediumBlue transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mediumBlue focus:border-mediumBlue transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mediumBlue focus:border-mediumBlue transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 text-base font-medium text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: brandColors.mediumBlue }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" style={{ backgroundColor: brandColors.darkBlue }}>
        <div className="px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-8 w-8" style={{ color: brandColors.white }} />
                <span className="text-xl font-bold">Olympiad Edu Center</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students to achieve academic excellence through specialized olympiad training.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Programs", "Success Stories", "Events", "Contact"].map((item, index) => (
                  <li key={index}>
                    <ScrollLink 
                      to={item.toLowerCase().replace(/\s+/g, '-')} 
                      smooth={true}
                      duration={800}
                      offset={-80}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@olympiadedu.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Education Street, Knowledge City, CA 12345</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            © 2025 Olympiad Edu Center. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 invisible"
        style={{ backgroundColor: brandColors.mediumBlue }}
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Home;