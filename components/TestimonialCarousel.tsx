"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { CiStar } from "react-icons/ci";

const reviews = [
  {
    name: "Precious Morgan",
    role: "Parent of Student",
    Image: "/sarah.jpg",
    Content:
      "Coach Abel has been coaching Nhylan Westmoreland since the age of 9. He is a professional and highly skilled tennis instructor, dedicated to teaching players both the technical and mental aspects of the game. Coach Abel always emphasizes giving 100% effort, whether you win or lose.His approach goes beyond tennis, he provides young athletes with valuable mental and physical training that benefits them in any sport.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Parent of Student",
    Image: "/sarah.jpg",
    Content:
      "Enrolling at this club was the best decision for my son. His confidence on and off the court has soared, thanks to the supportive coaching staff and friendly environment.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Parent of Student",
    Image: "/sarah.jpg",
    Content:
      "The facilities are top-notch and the training is well-structured. I've seen steady progress in my game since joining. Definitely a great place to grow as a player.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Parent of Student",
    Image: "/sarah.jpg",
    Content:
      "From the first day, we felt welcomed. My daughter looks forward to every session and her skills have improved faster than we imagined.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Parent of Student",
    Image: "/sarah.jpg",
    Content:
      "As an adult beginner, I was nervous at first, but the coaches made learning fun and effective. I now play confidently and even compete in local matches.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="border-0 shadow-xl  ">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-4 sm:mb-6">
              {Array.from({ length: reviews[currentIndex].rating }).map(
                (_, i) => (
                  <CiStar
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                )
              )}
            </div>
            <blockquote className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              &quot;{reviews[currentIndex].Content}&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <Image
                src={reviews[currentIndex].Image}
                alt={reviews[currentIndex].name}
                width={50}
                height={50}
                className="w-12 h-12 sm:w-15 sm:h-15 rounded-full"
              />
              <div className="text-left mt-4">
                <p className="text-gray-900">{reviews[currentIndex].name}</p>
                <p className="text-gray-700">{reviews[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* buttons */}
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full bg-transparent w-8 h-8 sm:w-8 sm:h-8 border-gray-400 hover:bg-gray-200"
        >
          <MdOutlineChevronLeft />
        </Button>
        <div className="flex space-x-1">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full bg-transparent w-8 h-8 sm:w-8 sm:h-8 border-gray-400 hover:bg-gray-200"
        >
          <MdOutlineChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
