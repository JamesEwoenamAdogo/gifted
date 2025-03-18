import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Trophy, Menu, X } from 'lucide-react';

// Header Component
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    
    // Brand colors
    const brandColors = {
        darkBlue: '#1E40AF', // from-blue-600 in your original
        mediumBlue: '#3B82F6', // a medium blue
        white: '#FFFFFF'
    };

    return (
        <header className="sticky top-0 z-40 border-b bg-white/50 backdrop-blur-md transition-all duration-200 shadow-sm"
                style={{ backgroundColor: brandColors.darkBlue, color: brandColors.white }}>
            <div className="flex h-20 items-center justify-between px-8 py-4">
                <div className="flex items-center gap-2">
                    <Trophy className="h-8 w-8" style={{ color: brandColors.white }} />
                    <Link to="/" className="text-2xl font-bold" style={{ color: brandColors.white }}>
                        CompetitionPortal
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Competitions", path: "/competitions" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" }
                    ].map((item, index) => (
                        <Link 
                            key={index}
                            to={item.path}
                            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                            style={{ color: brandColors.white }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                
                {/* Mobile menu button */}
                <button 
                    className="md:hidden p-2 rounded-md hover:bg-opacity-20 hover:bg-white transition-colors"
                    onClick={toggleMobileMenu}
                    style={{ color: brandColors.white }}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login">
                        <button 
                            className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-opacity-10 hover:bg-white transition-colors"
                            style={{ color: brandColors.white, border: `1px solid ${brandColors.white}` }}
                        >
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button 
                            className="px-5 py-2 text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: brandColors.mediumBlue, color: brandColors.white }}
                        >
                            Register
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute w-full bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="py-4 space-y-3 px-8">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Competitions", path: "/competitions" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" }
                    ].map((item, index) => (
                        <Link 
                            key={index}
                            to={item.path}
                            className="block py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ color: brandColors.darkBlue }}
                        >
                            {item.name}
                        </Link>
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
                        <Link to="/register" className="w-full">
                            <button 
                                className="w-full px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                style={{ backgroundColor: brandColors.mediumBlue, color: brandColors.white }}
                            >
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white p-6 mt-auto">
            <div className="w-full max-w-screen-2xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">CompetitionPortal</h3>
                        <p className="text-gray-400">Join competitions and showcase your talent</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="text-gray-400">
                            <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                            <li><Link to="/competitions" className="hover:text-blue-300 transition-colors">Competitions</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} CompetitionPortal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize AOS animation library
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.warning('Please fill in all fields', { toastId: 'warning' });
            return;
        }
        
        setIsLoading(true);
        try {
            const response = await axios.post('/login', { email, password });
            const allCompetitionResponse = await axios.get('/all-competitions');
            localStorage.setItem('allCompetition', JSON.stringify(allCompetitionResponse.data.AllCompetitions));
            
            if (response.data.success) {
                toast.success('Login successful!', { toastId: 'success' });
                setTimeout(() => navigate('/user-dashboard'), 1000);
            } else {
                toast.error(response.data.message, { toastId: 'error' });
            }
        } catch (error) {
            console.log(error);
            toast.error('Login failed. Please try again.', { toastId: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">
            {/* <Header /> */}
            
            <div className="flex-grow flex w-full">
                <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-blue-400 to-indigo-600 relative">
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="max-w-lg"
                        >
                            <h2 className="text-4xl font-bold mb-6">Welcome to Gifted's Login Portal</h2>
                            <p className="text-xl mb-8">Access your dashboard to manage competitions, track progress, and connect with other participants.</p>
                            <div className="flex space-x-4">
                                <div className="flex items-center">
                                    <div className="bg-white/20 p-3 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span>Easy Registration</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-white/20 p-3 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <span>Secure Portal</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2 flex justify-center items-center p-4 md:p-8">
                    <div 
                        data-aos="fade-up"
                        className="w-full max-w-md"
                    >
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl shadow-2xl overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                                <h1 className="font-bold text-white text-2xl text-center">Account Login</h1>
                                <p className="text-blue-100 text-center mt-2">Sign in to continue to your dashboard</p>
                            </div>
                            
                            <motion.form 
                                onSubmit={handleSubmit} 
                                className="flex flex-col gap-6 p-8"
                            >
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
                                    <motion.input 
                                        id="email"
                                        type="text" 
                                        placeholder="Enter your email" 
                                        className="rounded-lg px-4 py-3 w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        whileFocus={{ scale: 1.01 }}
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
                                        <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <motion.input 
                                        id="password"
                                        type="password" 
                                        placeholder="Enter your password" 
                                        className="rounded-lg px-4 py-3 w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" 
                                        onChange={(e) => setPassword(e.target.value)}
                                        whileFocus={{ scale: 1.01 }}
                                    />
                                </div>
                                
                                <motion.button 
                                    type="submit" 
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 w-full text-white rounded-lg py-3 font-medium shadow-lg disabled:opacity-70"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Logging in...
                                        </span>
                                    ) : 'Login'}
                                </motion.button>
                                
                                <div className="text-center pt-2">
                                    <p className="text-gray-600">
                                        Don't have an account?{' '}
                                        <Link to="/register" className="text-blue-600 font-medium hover:underline">
                                            Register
                                        </Link>
                                    </p>
                                </div>
                                
                                <div className="relative my-2">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 gap-4">
                                    <motion.button
                                        type="button"
                                        className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09c1.97 3.92 6.02 6.62 10.71 6.62z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29v-3.09h-3.98c-.8 1.61-1.26 3.43-1.26 5.38s.46 3.77 1.26 5.38l3.98-3.09z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42c-2.07-1.94-4.78-3.13-8.02-3.13-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                                            />
                                        </svg>
                                        Google
                                    </motion.button>
                                    {/* <motion.button
                                        type="button"
                                        className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path
                                                fill="#1877F2"
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                            />
                                        </svg>
                                        Facebook
                                    </motion.button> */}
                                </div>
                            </motion.form>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="colored" />
        </div>
    );
};

export default Login;
