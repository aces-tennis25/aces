"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// import Stats from "@/components/Stats";

import { BiAward } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import training2 from "@/public/training2.jpg";
import about from "@/public/about.jpg";
import coach from "@/public/coach.jpg";

const page = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[500px] ">
        <div className="absolute w-full h-full overflow-hidden">
          <div>
            <Image
              src={about}
              fill
              alt="about aces tennis"
              className="min-h-[600px] h-full w-full  object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute inset-0  flex flex-col items-center justify-center lg:mt-20 mx-auto text-center max-w-4xl px-4 "
          >
            <Badge className="bg-green-100 text-green-800 mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white ">
              About Aces Tennis Academy
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              For over 26 years, we&#39;ve been dedicaed to nuturing tennis
              talent and creating champions. Our training has become a beacon of
              excellence, serving students across the globe .{" "}
            </p>
          </motion.div>
        </div>
      </section>

      {/* stats */}
      <div className=" relative">{/* <Stats /> */}</div>
      

      {/* academy journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold">Our Academy&#39;s Journey</h2>
              <div className="space-y-6 text-gray-600 mt-5">
                <p className="text-lg leading-relaxed">
                  Founded in 2009, Aces Tennis Academy began as a small local
                  training center in Lagos, Nigeria with a big dream: to make
                  world-class tennis coaching accessible to players of all
                  levels. What started with few students has produced
                  internationally recognized champions.
                </p>

                <p className="text-lg leading-relaxed">
                  Our academy has consistently produced tournament winners,
                  college scholarship recipients, and professional players.
                  We&#39;ve built our reputation on personalized coaching and an
                  unwavering commitment to each student&#39;s success.
                </p>

                <p className="text-lg leading-relaxed">
                  Today, we&#39;re proud to say that out alumni students are
                  competing at national and international levels. Our training
                  programs take a holistic approach by combining technical
                  excellence, mental conditioning, and physical fitness.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={training2}
                alt="train"
                width={600}
                height={500}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Meet Our CEO
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl">
                The Visionary behind Aces Tennis Academy&#39;s Success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-8">
              <div className="relative order-2 lg:order-1">
                <Image
                  src={coach}
                  alt="ceo"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] shadow-xl object-cover"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-green-600 text-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-xl sm:text-sm font-bold">15+</div>
                    <div className="text-sm sm:text-sm">Years Leading</div>
                  </div>
                </div>
              </div>

              {/* about ceo */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Abel Ubiebi
                  </h2>
                  <p className="text-green-600 text-lg sm:text-xl mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    A former tennis player with over 20 years of coaching
                    experience, Abel founded Aces Tennis Academy with a vision
                    to revolutionize tennis education. His methodology and
                    dedication to student success have made him a Sort For
                    tennis coach in the Tennis Industry.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="border-gray-400">
                    <CardContent className="p-4 sm:p-6">
                      <BiAward className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-3" />
                      <h4 className="font-bold text-sm sm:text-base">
                        Achievements
                      </h4>
                      <ul className="list-disc text-xs sm:text-sm text-gray-600 space-y-1">
                        <li>
                          Has many Laurels as former Nigerian Junior Coach.
                        </li>
                        <li>
                          Produced Many International and National Players
                        </li>
                        <li>Certified Master Coach</li>
                        <li>Sports Psychology Degree</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-400">
                    <CardContent className="p-4 sm:p-6">
                      <FiTarget className="w-6 h-6 sm:w-8 text-green-600 mb-3" />
                      <h4 className="font-bold text-sm sm:text-base">
                        Philosophy
                      </h4>
                      <p className="text-xs text-gray-600 sm:text-sm space-y-1">
                        &quot;Every child is a Champion. Our role is to train
                        and guide our players to the path of success in tennis
                        and Education. &quot;
                      </p>
                    </CardContent>
                  </Card>

                  <div className="bg-green-50 rounded-xl p-4 sm:p-6 w-full lg:w-[550px]">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                      Recognition & Awards
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                      <div className="items-center justify-center mt-2">
                        <p>🏆 Coach of the Year</p>
                        {/* <p>🌟 Excellence in Tennis Education</p> */}
                      </div>
                      <div>
                        <p>🎖️ International Coaching Certfication</p>
                        <p>🎗️ Professional Tennis Coaching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mission and vision */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center justify-center text-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                    <FiTarget className="text-green-600 w-6 h-6 " />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To provide world-class tennis training that develops champs
                    both on and off the court who carry the values of
                    discipline, perseverance, and sportsmanship throughout their
                    lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center justify-center text-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                    <GoTrophy className="text-green-600 w-6 h-6  " />
                  </div>
                  <h2 className="font-bold text-2xl text-gray-900 mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To see that all our students are successful through tennis
                    and love the game throughout their lives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 flex flex-col justify-center items-center">
        <div className="container flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Join Our Tennis Family
          </h1>
          <p className="text-white text-lg sm:text-xl mt-3 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Become part of our legacy and start your journey to tennis
            excellence today
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
            <Link href="/services">Explore Programs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default page;
