import { Link } from "react-router-dom";
import Header from "../mycomponent/header/header";
import React from 'react';
import image from "../assets/img/law1.jpg"
import "./about.css"
function About() {
    return (<>
        <Header />
        <div className="w-full flex justify-center font-1" >
            <div className="w-4/5" >
                <div className=" flex">
                    <div className="mr-4">
                        <h3 className="mt-4 mb-4 ml-3">About Us</h3>
                        <p >
                            <ul className="list-disc font-1">
                                <li >Welcome to <b>Law & Order</b>, your centralized destination for accessing a comprehensive array of legal services in India. At <b>Law & Order</b>,
                                    we understand the importance of having access to reliable and efficient legal assistance when navigating through various legal matters. Whether you're
                                    seeking advocates, mediators, arbitrators, document readers, or notaries, we've got you covered.</li>
                            </ul>
                        </p></div>
                    <div className="ml-5"><h3 className="mt-4 mb-4 ml-3">Our Mission</h3>
                        <p >
                            <ul className="list-disc">
                                <li>Our mission at <b>Law & Order</b> is to streamline the process of finding legal service providers, making it easier and more convenient for
                                    individuals and businesses alike to access the expertise they need. We aim to bridge the gap between legal service seekers and providers by offering a user-friendly
                                    platform that facilitates seamless connections and interactions.</li>
                            </ul>
                        </p></div>
                </div>
                <div className=" flex flex-row">
                    <div className="mr-4"><h3 className="mt-4 mb-4 ml-3">What Sets Us Apart</h3>
                        <p>
                            <ul className="list-disc">
                                <li>Comprehensive Directory: We have curated a comprehensive directory of legal service providers across different specialties, ensuring that you can find the right professional for your
                                    specific needs.</li>
                                <li>Interactive Platform: Our platform goes beyond just listing service providers. Users can engage directly with legal professionals through our integrated
                                    chat feature, enabling real-time communication and collaboration.</li>
                                <li>AI-Powered Solutions: Leveraging cutting-edge technology, we offer AI-powered tools such as legal notice summarization, providing users
                                    with valuable insights and assistance in navigating legal documents more efficiently.</li>
                            </ul>
                        </p></div>
                    <div><h3 className="mt-4 mb-4 ml-3">Why Choose <b>Law & Order</b>?</h3>
                        <p>
                            <ul className="list-disc">
                                <li>Convenience: Say goodbye to endless searches and phone calls. With <b>Law & Order</b>, finding and connecting with legal
                                    service providers is quick, easy, and hassle-free.</li>
                                <li>Reliability: We take pride in partnering with reputable and experienced legal professionals, ensuring that our users
                                    receive high-quality services and expert guidance every step of the way.</li>
                                <li>Transparency: We believe in transparency and strive to provide clear and concise information about our listed service
                                    providers, empowering users to make informed decisions.</li>

                            </ul>
                        </p></div>
                </div>
                <div className="w-full flex justify-between mt-4 mb-4">
                    <div className="w-[600px]">
                        <h3 className="mt-2 mb-4">Get Started Today</h3>
                        <p>
                            Whether you're facing a legal challenge, seeking professional advice, or simply exploring your options, <b>Law & Order</b> is here
                            to help. Join our community today and experience the convenience of accessing top-notch legal services at your fingertips.
                        </p>
                        <p>Have questions or feedback? We'd love to hear from you! Contact our team at <b className="text-blue-300 underline">Contact</b>.</p>
                    </div>
        
                    <div className="w-[400px] flex justify-center mr-8">
                        <img src={image} alt="" className="h-[250px]  rounded-xl" />
                    </div>

                </div>

            </div>
        </div>
    </>
    );
}
export default About;