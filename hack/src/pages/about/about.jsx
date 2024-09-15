import { Link } from "react-router-dom";
import Header from "../../mycomponent/header/header";
import React from 'react';
import Footer from "../../mycomponent/footer/footer";
function About() {
    return (
        <>
        <div className="fixed top-0 bg-white left-0 w-full z-50">
            <Header />
        </div>
        <div className="pt-20 bg-gradient-to-r from-gray-50 to-blue-50  min-h-screen">
            <div className="container mx-auto py-12 px-6 lg:px-8 text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                    Welcome to <span className="font-bold">Law & Order</span>, your centralized destination for accessing comprehensive legal services in India. We make legal assistance accessible and efficient by connecting you with advocates, mediators, arbitrators, and more.
                </p>
            </div>
            
            {/* <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-6 rounded">Our Mission</h2>
                </div>
            </div> */}

            <div className="container mx-auto py-12 px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

                <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At <b>Law & Order</b>, we streamline the process of finding legal service providers, making it easier for individuals and businesses to access the expertise they need. Our platform fosters seamless connections between service seekers and providers.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="w-8 h-8 text-blue-500 flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <b className="text-gray-800">Convenience:</b> Finding and connecting with legal providers has never been easier. Get direct access to legal experts within a few clicks.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="w-8 h-8 text-blue-500 flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <b className="text-gray-800">Reliability:</b> We partner with only the most reputable legal professionals to ensure high-quality service.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="w-8 h-8 text-blue-500 flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <b className="text-gray-800">Transparency:</b> Detailed information and clear pricing from our listed service providers.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-500 text-white py-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
                <p className="text-lg mb-6">Join our community and explore top-notch legal services at your fingertips.</p>
                <Link to="/contact" className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition">Contact Us</Link>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default About;
