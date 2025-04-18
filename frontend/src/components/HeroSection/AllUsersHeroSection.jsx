import React from "react";
import { UserPlus, Phone } from "lucide-react";
import Camion from "../../assets/CamionDeLivraison.jpg";
import { motion } from "framer-motion";
import StatsCarousel from "../StatsCarousel";
import { Link } from "react-router-dom";

export const AllUsersHeroSection = () => {
  const scrollToContact = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <div className=" px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
            The Smart Solution
            <br className="hidden sm:block" /> for Transport in Tunisia
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-xl">
            Optimize your transportation costs and reduce your carbon footprint
            <br className="hidden sm:block" /> with our innovative matchmaking
            platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup">
              <button className="text-white py-3 px-6 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded-xl flex items-center shadow-lg">
                <UserPlus className="w-5 h-5 mr-2" />
                Sign up
              </button>
            </Link>
            <button
              onClick={scrollToContact}
              className="text-white py-3 px-6 border-blue-400/40 hover:border-blue-400 border-2 transition-colors duration-300 rounded-xl flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
          {/*stats*/}
          <StatsCarousel></StatsCarousel>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 ">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl"></div>
            <img
              src={Camion}
              alt="Camion de livraison"
              className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
