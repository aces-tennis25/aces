"use client";
import React from "react";
import CountUp from "react-countup";
import { GoTrophy } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { FiMapPin} from "react-icons/fi";

const Stats = () => {
  return (
    <div className="py-16 sm:py-20 flex gap-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TbUsers className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={500} duration={5} delay={2} /> +
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Satisfied Students
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMapPin className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={25} duration={5} delay={2} /> 
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Countries Served
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CiCalendar className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={15} duration={5} delay={2} /> +
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Years Of Excellence
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GoTrophy className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={150} duration={5} delay={2} /> +
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Championship won
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
