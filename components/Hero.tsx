"use client";

// import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SlPeople } from "react-icons/sl";
import { GrTrophy } from "react-icons/gr";
import { MdOutlineAccessAlarms } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import TestimonialCarousel from "@/components/TestimonialCarousel";

import { motion } from "framer-motion";

// const images = ["/hero1.jpg", "/hero2.jpeg"];
const sessions = [
  {
    icon: <SlPeople />,
    name: "Private Sessions",
    text: "One-on-one coaching with personalised attention to accelerate your progress and perfection technique",
    button: "Learn More",
  },
  {
    icon: <GrTrophy />,
    name: "Group Sessions",
    text: "Our group sessions is motivating and challenging and it comes with form while learning with competitive strategies.",
    button: "Learn More",
  },
  {
    icon: <MdOutlineAccessAlarms />,
    name: "Consultations",
    text: "Strategic planning sessions to develop your tennis career path and developing school programs with certification on behalf of PTR.",
    button: "Learn More",
  },
];
const gallery = [
  {
    alt: "first",
    image: "/training8.jpg",
  },
  {
    alt: "first",
    image: "/training.jpg",
  },
  {
    alt: "first",
    image: "/training10.jpg",
  },
  {
    alt: "first",
    image: "/training2.jpg",
  },
  {
    alt: "first",
    image: "/training4.jpg",
  },
  {
    alt: "first",
    image: "/new.jpg",
  },
  {
    alt: "first",
    image: "/training6.jpg",
  },
  {
    alt: "first",
    image: "/training9.jpg",
  },
];

const Hero = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      <section
        className="2xl:h-[900px] max-xl:h-screen bg-cover bg-center  transition-all duration-500 ease-in-out"
        // style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/tennis2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-green-950/70 "></div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center   mt-20 max-xl:mt-10 p-40"
        >
          <h1 className="2xl:text-7xl 2xl:w-[600px] text-5xl  text-white font-bold">
            Best <span className="text-green-600">Tennis Training </span>
            Program
          </h1>
          <p className="text-white w-full 2xl:max-w-[700px] max-xl:w-[350px] text-lg mt-4">
            Welcome to the ultimate tennis destination. Whether you&apos;re new
            to the game or an experienced player, our expert coaches help you
            grow, compete, and thrive—every step of the way.
          </p>
          <Button className="group bg-green-600 hover:bg-green-700 text-white text-lg rounded-xl px-8 py-6 mt-5">
            <Link href="/contact">Register Now</Link>
          </Button>
        </motion.div>
      </section>

      {/* services home */}
      <section className="py-15  px-20 sm:px-10 mt-30  ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl max-xl:text-base text-gray-600 w-full max-w-[600px] max-xl:max-w-[580px]">
            Excellent tennis training programs doctored to your level and goals
          </p>
        </div>

        {/* card section */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mt-5 ">
          {sessions.map((item, index) => (
            <Card
              key={index}
              className="group shadow-lg hover:shadow-xl transition-all border-0 w-full max-xl:w-[350px] md:max-lg:w-[400px]"
            >
              <CardContent className="p-8 sm:p-10">
                <div className="w-14 h-14 bg-green-100 rounded-full flex text-center items-center justify-center group-hover:bg-green-600 transition-colors mb-6">
                  <span className="h-8 w-8 text-3xl text-green-600 group-hover:text-white">
                    {" "}
                    {item.icon}{" "}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 ">
                  {item.name}
                </h3>
                <p className="text-gray-600 tracking-wide mb-4 text-sm sm:text-base">
                  {item.text}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 border-gray-400 bg-transparent 
                sm:w-auto"
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-15  mt-20 flex flex-col items-center justify-center">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mt-10">Academy Life</h1>
            <p className="text-xl max-xl:text-lg text-gray-600 mt-4">
              Experience the energy and passion of our tennis community
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 py-10">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={`Academy gallery ${index}`}
                  width={300}
                  height={300}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className="absolute bg-green-600/0 inset-0 group-hover:bg-green-600/20 transition-colors
                duration-300"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* students reviews */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-gray-900 font-bold ">
              What Our Students Say
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Hear from our satisfied clients and their success story
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Ready */}
      <section className="py-16 bg-green-600 flex flex-col justify-center items-center">
        <div className="container flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Ready to start your Tennis Journey?
          </h1>
          <p className="text-white text-lg sm:text-xl mt-3 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join Hundreds of satisfied students who have transformed their game
            with our expert coaching.
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
    </div>
  );
};

export default Hero;
