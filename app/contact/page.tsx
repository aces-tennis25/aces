"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/public/aboutImg.jpg";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { MdAlarm } from "react-icons/md";

const InputLabel = [
  {
    label: "First Name",
    placeholder: "Enter your first name",
    id: "firstName",
    required: true,
  },
  { label: "Last Name", placeholder: "Enter your last name", id: "lastName" },
  { label: "Email", placeholder: "Enter your email address", id: "email" },
  { label: "Phone Number", placeholder: "Enter phone number", id: "phone" },
  {
    label: "Age(if booking for yourself)",
    placeholder: "Enter age",
    id: "age",
    required: true,
  },
  {
    label: "Tennis Experience Level",
    placeholder: "Enter experience level",
    id: "experience",
    selectItems: [
      "Beginner (Never Played)",
      "Novice (Some Experience)",
      "Intermediate (1-3 years)",
      "Advanced (3+ years)",
      "Competitive Player",
    ],
    required: true,
  },
  {
    label: "Service Interested In",
    placeholder: "Select a service",
    id: "service",
    selectItems: [
      "Private Sessions",
      "Group Sessions",
      "Consultation",
      "Other",
    ],
    required: true,
  },
  {
    label: "Message",
    placeholder:
      "Tell us about your tennis goals, availability, or any questions you have.",
    id: "message",
    isTextarea: true,
    required: true,
  },
];

const contactInfo = [
  {
    icon: <LuMapPin />,
    title: "Address",
    description: "123, Tennis Court Lane, Chicago",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    description: ["Main: +1 (312) 493-7113", "Emergency: +1 (312) 493-7113"],
  },
  {
    icon: <CiMail />,
    title: "Email",
    description: [
      "General: acestennis@yahoo.com",
      "Bookings: acestennis@yahoo.com",
    ],
  },
  {
    icon: <MdAlarm />,
    title: "Operating Hours",
    description: [
      "Monday  - Friday: 6:00 Am - !0;00 PM",
      "Saturday: 7:00 Am - 8: 00 PM",
      "Sunday: 8:00 Am - 6:00 PM",
    ],
  },
];

const questionsInfo = [
  {
    title: "What Should I bring to my first session?",
    response:
      "Just bring cofortable athletic wear, tennis shoes, and a water bottle. We provide rackets for beginners during trial sessions",
  },
  {
    title: "What age groups do you accept?",
    response:
      "We welcome students from age 6 to adults. Our programs are tailored to different age groups and skill levels.",
  },
  {
    title: "Do you offer trial sessions?",
    response:
      "Yes! We offer a complimentary 30-minute trial session for new students to experience our coaching style and facilities.",
  },
  {
    title: "How do I book a session?",
    response:
      "You can book through our contact form above, call us directly, or visit our facility. We'll help you choose the best program for your needs.",
  },
];
const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData.entries());

      const response = await fetch("https://formspree.io/f/xeozaplz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        const errorData = await response.text();
        console.error("Response status:", response.status);
        console.error("Response data:", errorData);
        throw new Error(`Failed to submit form: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("There was an error submitting your form. Please try again later.");
    }
    setIsSubmitting(false);
  };
  return (
    <div className="min-h-scren">
      <div className="relative h-[500px] w-full group cursor-pointer overflow-hidden">
        <Image
          src={aboutImg}
          alt="img"
          className="w-full min-h-[500px] object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 mx-auto max-w-4xl"
        >
          <h1 className="text-white font-bold text-5xl">Get In Touch</h1>
          <p className="text-white leading-relaxed text-lg sm:text-xl">
            From beginner fundamentals to advanced competitive training, we
            offer personalized programs designed to elevate your game to the
            next level.
          </p>
        </motion.div>
      </div>
      {/* contact form and info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* contact form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600 text-sm sm:text-base tracking-wide">
                  {" "}
                  Fill out the form and we&#39;ll get back to you within 24
                  hours
                </p>
                <CardContent className="space-y-4 sm:space-y-6">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600">
                        {" "}
                        Your message has been sent successfully. We&#39;ll get
                        back to you within 24 hours.{" "}
                      </p>
                    </div>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="hidden"
                          name="_subject"
                          value="New Aces Tennis Academy Inquiry"
                        />
                        <input type="hidden" name="_next" value="thank-you" />
                        <div className="space-y-4 sm:space-y-6">
                          {InputLabel.map((input) => (
                            <div key={input.id} className="space-y-2">
                              <Label
                                htmlFor={input.id}
                                className="text-gray-900 text-sm font-bold"
                              >
                                {input.label}
                              </Label>
                              {input.isTextarea ? (
                                <Textarea
                                  id={input.id}
                                  name={input.id}
                                  rows={6}
                                  placeholder={input.placeholder}
                                  className="w-full"
                                />
                              ) : input.selectItems ? (
                                <Select>
                                  <SelectTrigger className="w-full border-gray-300 focus:border-black/50 focus:ring-black/50">
                                    <SelectValue
                                      placeholder={input.placeholder}
                                    />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white">
                                    {input.selectItems.map((item, index) => (
                                      <SelectItem
                                        key={index}
                                        value={item}
                                        className="hover:bg-gray-100"
                                      >
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              ) : (
                                <Input
                                  id={input.id}
                                  name={input.id}
                                  type={input.id === "email" ? "email" : "text"}
                                  placeholder={input.placeholder}
                                  className="w-full border-gray-300 focus:border-black focus:ring-black"
                                />
                              )}
                            </div>
                          ))}
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                          >
                            {isSubmitting ? "Submitting..." : "Send Message"}
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </CardContent>
              </CardHeader>
            </Card>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base tracking-wide leading-relaxed">
                  Get in touch with us through any of the following
                  methods.We&#39;re here to help you start your tennis journey!
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className=" w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                          <span className="text-green-600 h-5 w-5 sm:h-6 sm:w-6">
                            {info.icon}{" "}
                          </span>
                        </div>
                        <div>
                          <h3 className="mb-1 text-sm sm:text-base font-semibold text-gray-900">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            {Array.isArray(info.description)
                              ? info.description.map((desc, i) => (
                                  <span
                                    key={i}
                                    className="block text-xs sm:text-sm"
                                  >
                                    {desc}
                                  </span>
                                ))
                              : info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <section className="py-20 bg-white sm:mt-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Quick answers to common questions
                </p>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                {questionsInfo.map((question, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className=" font-semibold text-gray-900 mb-2">
                        {question.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base tracking-wide">
                        {question.response}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Page;
