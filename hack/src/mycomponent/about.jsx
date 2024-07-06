import { Link } from "react-router-dom";
import Header from "./header/header";
import React from 'react';

function About() {
    return (
      <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
        <div className="pt-20 pb-5  flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">About Us</h1>
              <p className="text-gray-600">
                Welcome to <b>Law & Order</b>, your centralized destination for accessing a comprehensive array of legal services in India. At <b>Law & Order</b>,
                we understand the importance of having access to reliable and efficient legal assistance when navigating through various legal matters. Whether you're
                seeking advocates, mediators, arbitrators, document readers, or notaries, we've got you covered.
              </p>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600">
                Our mission at <b>Law & Order</b> is to streamline the process of finding legal service providers, making it easier and more convenient for
                individuals and businesses alike to access the expertise they need. We aim to bridge the gap between legal service seekers and providers by offering a user-friendly
                platform that facilitates seamless connections and interactions.
              </p>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">What Sets Us Apart</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">
                  <b>Comprehensive Directory:</b> We have curated a comprehensive directory of legal service providers across different specialties, ensuring that you can find the right professional for your
                  specific needs.
                </li>
                <li className="mb-2">
                  <b>Interactive Platform:</b> Our platform goes beyond just listing service providers. Users can engage directly with legal professionals through our integrated
                  chat feature, enabling real-time communication and collaboration.
                </li>
                <li className="mb-2">
                  <b>AI-Powered Solutions:</b> Leveraging cutting-edge technology, we offer AI-powered tools such as legal notice summarization, providing users
                  with valuable insights and assistance in navigating legal documents more efficiently.
                </li>
              </ul>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose <b>Law & Order</b>?</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">
                  <b>Convenience:</b> Say goodbye to endless searches and phone calls. With <b>Law & Order</b>, finding and connecting with legal
                  service providers is quick, easy, and hassle-free.
                </li>
                <li className="mb-2">
                  <b>Reliability:</b> We take pride in partnering with reputable and experienced legal professionals, ensuring that our users
                  receive high-quality services and expert guidance every step of the way.
                </li>
                <li className="mb-2">
                  <b>Transparency:</b> We believe in transparency and strive to provide clear and concise information about our listed service
                  providers, empowering users to make informed decisions.
                </li>
              </ul>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 mb-4">
                Whether you're facing a legal challenge, seeking professional advice, or simply exploring your options, <b>Law & Order</b> is here
                to help. Join our community today and experience the convenience of accessing top-notch legal services at your fingertips.
              </p>
              <p className="text-gray-600">
                Have questions or feedback? We'd love to hear from you! Contact our team at <Link to="/contact" className="text-blue-500 underline">Contact</Link>.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default About;