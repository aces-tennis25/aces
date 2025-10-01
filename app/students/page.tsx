"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import about from "@/public/about.jpg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import AchievementStats from "@/components/AchievementStats";
import { CiStar } from "react-icons/ci";
import { GoTrophy } from "react-icons/go";

// import { FiTarget } from "react-icons/fi";

const studentsInfo = [
  {
    name: "Oyinlomo Barakat Quadre",
    age: "22",
    image: "/oyin.jpg",
    // specialty: "Serve & Volley, Hard Court Specialist",
    achievements: [
      "African Games Bronze(2019)",
      "Multiple ITF Junior Titles",
      "Billie Jean King Cup for Nigeria",
      "WTA Ranking",
      "College tennis at FIU",
    ],
    ranking: "National Nigeria No.1",
  },
  {
    name: "Bulus Christopher",
    age: "25+",
    image: "/bulus.jpg",
    // specialty:
    //   "Powerful forehand, Hard Court Specialist, Aggressive baseline player",
    achievements: [
      "2025 Rainoil National Open Champion",
      "Nigeria Davies Cup representative",
      "College All-American (USA)",
      "ITF Junior Titles",
    ],
    ranking: "Former Nigerian #1",
  },
  {
    name: "Ronke Akingbade",
    age: "25+",
    image: "/ronke2.jpg",
    // specialty: "Doubles Specialist",
    achievements: [
      "Runner-up, 2017 Ikoyi Masters",
      "Former WTF-ranked player",
      "CBN winner",
    ],
    ranking: "NTF Singles:#8(2020)",
  },
  {
    name: "Joseph Imeh",
    age: "25+",
    image: "/joseph.jpg",
    // specialty: "Serve & Volley, Hard Court Specialist",
    achievements: [
      "Winner, 2017 Rainoil Open Champion",
      "Multiple national titles",
      "Multiple ITF Junior Titles",
      "Longtime national circuit top seed",
      "Nigeria Davies Cup representative",
    ],
    ranking: "NTF Men's Singles: #1(2020)",
  },
  {
    name: "Mariam Alli-Balogun",
    age: "22",
    image: "/mariam3.jpg",
    // specialty: "Serve & Volley, Doubles Specialist",
    achievements: [
      "Finalist",
      "Presidential Tennis Cup",
      "College All-American (USA)",
    ],
    ranking: "Lagos State top 5 (2019)",
  },
  {
    name: "Jumai Mohammed",
    age: "22",
    image: "/jumai.jpg",
    // specialty: "Serve & Volley, Hard Court Specialist",
    achievements: [
      "College Scholarship Recipient (USA)",
      "Singles and Doubles National Champion",
      "Winner, Presidential Tennis Cup",
    ],
    ranking: "Lagos State Junior #4 (2019)",
  },
];

const feedback = [
  {
    name: "Leena Manadan",
    feedback:
      "I have improved a lot after training with Coach Abel. The group sessions are so much fun and the coaches are very supportive. I enjoy coming to train and I am very inspired by Coach Abel.",
    image: "/maya.jpg",
    level: "Intermediate Level",
    Age: "14",
  },
  {
    name: "Lily Chen",
    feedback:
      "I love the group sessions! Training with other kids my age makes it so much fun while still being challenging.",
    image: "/lyla.jpg",
    level: "Intermediate Level",
    Age: "12",
  },
  {
    name: "Jake Morrison",
    feedback:
      "The mental training aspect is what sets this academy apart. I'm now confident competing at the state level.",
    image: "/luke.jpg",
    level: "Advanced Level",
    Age: "16",
  },
];

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] w-full group cursor-pointer overflow-hidden">
        <Image
          src={about}
          alt="img"
          className="w-full h-full min-h-[600px] object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:mt-25 p-10 mx-auto max-w-4xl mt-4">
          <Badge className="bg-green-100 text-green-800 font-bold rounded-2xl text-xs ">
            Our Champions
          </Badge>
          <h1 className="text-white font-bold text-5xl mt-3">
            Top Students & Success Stories
          </h1>
          <p className="text-white leading-relaxed text-lg sm:text-xl mt-3">
            Meet our exceptional who have achieved remarkable success through
            dedication, hard work and world-class coaching at Aces Tennis
            Academy.
          </p>
        </motion.div>
      </div>
      {/* <section>
        <AchievementStats />
      </section> */}

      {/* students grid */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Star Athletes
            </h2>
            <p className=" text-gray-600">
              Celebrating the achievements of our most dedicated students.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentsInfo.map((student, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white rounded-xl font-bold">
                      {student.ranking}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-gray-600">Age: {student.age}</p>
                  </div>
                  <div className="mb-4">
                    {/* <div className="flex items-center space-x-2 mb-2">
                      <FiTarget className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Specialty
                      </span>
                    </div> */}
                    {/* <p className="text-sm text-gray-600">{student.specialty}</p> */}
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <GoTrophy className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Key Achievements
                      </span>
                    </div>
                    <div className="space-y-1">
                      {student.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2 ">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {achievement}
                          </span>{" "}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <CiStar
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Badge
                      variant="outline"
                      className="border-green-600 text-green-600 rounded-xl font-bold"
                    >
                      Top Performer
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* students say */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600">
              Hear directly from our current students.
            </p>
          </div>
          {/* Testimonials will go here */}
          <div
            className="grid md:grid-cols-3 gap-8"
           
          >
            {feedback.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white"  data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CiStar
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">
                    {item.feedback}
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 ">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600">{item.level}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            <Link href="/contact">Start your journey</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-white border-white text-white hover:text-green-600 w-full sm:w-auto"
          >
            <Link href="/services">View Programs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default page;
