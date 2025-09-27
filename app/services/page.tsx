"use client";
import React, {useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import about from "@/public/about.jpg";

import { TbUsers } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FiMessageCircle, FiTarget } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoFitnessSharp } from "react-icons/io5";
import { MdAccessAlarm } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { LiaChildSolid } from "react-icons/lia";
import { FaCertificate } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const serviceData = [
  {
    name: "Private Sessions",
    icon: <FaRegUser />,
    text: "One-on-one coaching tailored to your specific needs, skill level, and goals. Get personalized attention and accelerated improvement.",
    services: [
      "Personalized training plan",
      "Video analysis included",
      "Flexible scheduling",
      "Progress tracking",
    ],
    price: "$100",
    time: "per hour session",
    btnText: "Book Private Session & Pay Now",
    isPopular: false,
    serviceType: "private" as const
  },
  {
    name: "Group Sessions",
    icon: <TbUsers />,
    text: "Train with peers in small groups (4-6 players) to develop competitive skills, teamwork, and match play strategies.",
    services: [
      "Small group training (4-6 players)",
      "Match Play Practice",
      "Competitive drills",
      "Social tennis environment",
    ],
    price: "$40",
    time: "per person/session",
    btnText: "Join Group Session & Pay Now",
    isPopular: false,
    serviceType: "group" as const
  },
  {
    name: "Cardio Tennis",
    icon: <IoFitnessSharp />,
    text: "Fun like fitness tennis session that improves your cardio while you improve your game and catch fun.",
    price: "$20",
    time: "per person/session",
    btnText: "Join Cardio Tennis & Pay Now",
    isPopular: false,
    serviceType: "cardio" as const
  },
  {
    name: "Consultations",
    icon: <FiMessageCircle />,
    text: "Strategic planning sessions to develop your tennis career path, tournament preparation, and competitive game planning.",
    services: [
      "Career path Planning",
      "Tournament strategy",
      "Mental game coaching",
      "Performance analysis",
    ],
    price: "$150",
    time: "per consultation",
    btnText: "Book Consultation & Pay Now",
    isPopular: false,
    serviceType: "consultation" as const
  },
];

const levelData = [
  {
    icon: <LiaChildSolid />,
    name: "Beginners (Children)",
    content: "",
    levels: [
      "Red Balls (Age 3-7): Played in a reduced courst size of 36 by 18 inches, Balls are larger and light, Smaller size of rackets.",
      "Orange Balls (Ages 7-8): Lighter to develop very good playing technique",
      "Green Balls (Ages 8-10): Higher comprehension than the red and orange balls. Plays full size tennis court.",
    ],
    isChild: true,
    badge: "Child 3-10",
  },
  {
    icon: <FiTarget />,
    name: "Beginner Level (Adult)",
    content:
      "Perfect for those new to tennis. Learn fundamental techniques, basic rules, and develop proper form from the ground up.",
    levels: [
      "Basic Stroke Techniques",
      "Match Play",
      "Scores counting",
      "Fun, encouragement environment",
    ],
    isBeginner: true,
    badge: "Adult Welcome",
  },
  {
    icon: <MdAccessAlarm />,
    name: "Intermediate Level",
    content:
      "For players with basic skills looking to improve consistency, strategy, and competitive play abilities.",
    levels: [
      "Advanced stroke refinements",
      "Match strategy development",
      "Fitness and conditioning",
      "Tournament preparation",
    ],
    isIntermediate: true,
    badge: "Players with prior knowledge & skill"
  },
  {
    icon: <GoTrophy />,
    name: "Advanced Level",
    content:
      "Elite training for competitive players aiming for tournaments, scholarships, or professional development.",
    levels: [
      "High-performance training",
      "Advanced tactical analysis",
      "Sports psychology",
      "High performance Fitness",
      "Professional pathway guidance",
    ],
    isAdvanced: true,
    badge: "Competitive Players",
  },
];

const extraServices = [
  {
    icon: <FiTarget />,
    name: "Video Analysis",
    text: "Detailed Breakdown of your technique and performance.",
  },
  {
    icon: <TbUsers />,
    name: "Summer camps",
    text: "Intensive training camps during school holidays.",
  },
  {
    icon: <FaCertificate />,
    name: "PTR Certification",
    text: "Earn a cerftificate directly from the Professional Tennis Registry."
  }
];

interface LevelItem {
  icon: React.ReactNode;
  name: string;
  content: string;
  levels: string[];
  isChild?: boolean;
  isBeginner?: boolean;
  isIntermediate?: boolean;
  isAdvanced?: boolean;
  badge: string;
}

// const levelCards = () => {
const getIconBackground = (item: LevelItem): string => {
  if (item.isBeginner) return "bg-blue-100 text-blue-600";
  if (item.isIntermediate) return "bg-orange-100 text-orange-600";
  if (item.isAdvanced) return "bg-red-100 text-red-600";
  if (item.isChild) return "bg-pink-100 text-pink-600";
  return "bg-gray-100 text-gray-600";
};

const getIconColor = (item: LevelItem): string => {
  if (item.isBeginner) return "text-blue-600";
  if (item.isIntermediate) return "text-orange-600";
  if (item.isAdvanced) return "text-red-600";
  if (item.isChild) return "text-pink-600";
  return "text-gray-600";
};
const getBadgeColor = (item: LevelItem): string => {
  if (item.isBeginner) return "border-blue-600 text-blue-600 text-xs";
  if (item.isIntermediate) return "border-orange-600 text-orange-600 text-xs";
  if (item.isAdvanced) return "border-red-600 text-red-600 text-xs";
  if (item.isChild) return "border-pink-600 text-pink-600 text-xs";
  return "bg-gray-100 text-gray-600";
};
// };

const Page = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    serviceType: "private" as "private" | "group" | "cardio"| "consultation",
  })
  const openBookingModal = (serviceType: "private" | "group" | "cardio" | "consultation") => {
    setBookingModal({isOpen: true, serviceType})
  }

  const closeBookingModal = () => {
    setBookingModal({isOpen: false, serviceType: "private"})
  }

  
  return (
    <section className="min-h-screen">
      <div className="relative h-[500px] w-full group cursor-pointer overflow-hidden">
        <Image
          src={about}
          alt="img"
          className="w-full h-full min-h-[600px]  object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0 flex flex-col items-center justify-center lg:mt-20 text-center p-10 mx-auto max-w-4xl"
        >
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 font-bold text-xs rounded-2xl">
            Our Services
          </Badge>
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-3 ">
            Comprehensive Tennis Programs
          </h1>
          <p className="text-white leading-relaxed text-lg sm:text-xl mt-3">
            From beginner fundamentals to advanced competitive training, we
            offer personalized programs designed to upgrade your game to the
            next level.
          </p>
        </motion.div>
      </div>

      {/* main services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm-8">
            {/* private sessions */}
            {serviceData.map((item, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  item.isPopular ? " border-2 border-green-500" : ""
                }`}
              >
                {item.isPopular && (
                  <div className="p-3">
                    <Badge className=" rounded-3xl bg-green-600 hover:bg-green-600 text-white font-bold px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 text-3xl ">
                      {item.icon}
                    </span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-gray-900">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>

                  <ul className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col items-start space-x-2 space-y-3">
                      {item.services?.map((service, serviceIndex) => (
                        <li
                          key={serviceIndex}
                          className="flex items-start gap-3"
                        >
                          <IoMdCheckmarkCircleOutline className="h-3 w-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">
                            {service}
                          </span>
                        </li>
                      ))}
                    </div>
                  </ul>

                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          Starting from
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-4">
                          {item.time}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bod text-green-600 font-bold">
                          {item.price}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <Button className=" w-full bg-green-600 text-center text-white font-semibold hover:bg-green-700 cursor-pointer" onClick={() => openBookingModal(item.serviceType)}>
                    {/* <Link href="/payment">{item.btnText}</Link> */} {item.btnText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* levels */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto container px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Teaching Levels
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We cater to players of all skill levels with specialized programs
              designed for optimal progression
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gp-8">
            {levelData.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center text-center justify-center mx-auto mb-4 ${getIconBackground(
                      item
                    )}} `}
                  >
                    <span className={`w-8 h-8  text-3xl ${getIconColor(item)}`}>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    {item.content}
                  </p>

                  <ul className="text-left space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                    <div className="flex flex-col  space-y-3">
                      {item.levels.map((level, levelIndex) => (
                        <li key={levelIndex} className="list-disc">
                          {level}
                        </li>
                      ))}
                    </div>
                  </ul>

                  <Badge
                    className={`rounded-2xl font-bold ${getBadgeColor(item)}`}
                  >
                    {item.badge}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* additional training */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for your tennis journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
            {extraServices.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="h-6 w-6 text-green-600 text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="py-16 bg-green-600 flex flex-col justify-center items-center">
        <div className="container flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Ready to start your Tennis Journey?
          </h1>
          <p className="text-white text-lg sm:text-xl mt-3 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Choose the program that&#39;s right for you and take the first step
            towards tennis excellence
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-white text-gray-900 font-semibold w-full sm:w-auto"
          >
            <Link href="/contact">Book Your First Session</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-white border-white text-white hover:text-green-600 w-full sm:w-auto"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      <BookingModal isOpen={bookingModal.isOpen} onClose={closeBookingModal} serviceType={bookingModal.serviceType} />
    </section>
  );
};

export default Page;
