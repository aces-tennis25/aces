import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const socials = [
  {
    path: "https://web.facebook.com/p/ACES-Tennis-100067608345147/?_rdc=1&_rdr#",
    icon: <FaFacebook  />,
    bgColor: "bg-blue-600"
  },
  {
    name: "https://www.linkedin.com/in/abel-ubiebi-b8157719/",
    icon: <FaLinkedin  />,
    bgColor: "bg-blue-700"
  },
  {
    path: "https://www.instagram.com/aces_tennis?utm_source=ig_web_button_share_sheet&igsh=MXVpY2p0YTI0eng2cw==",
    icon: <FaInstagram  />,
    bgColor: "bg-pink-600"
  },
  {
    path: "https://wa.me/13124937113",
    icon: <FaWhatsapp />,
    bgColor: "bg-green-500"
  },
];

const links = [
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Top Students",
    path: "/students",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const services = [
  {
    path: "/services",
    name: "Private Sessions",
  },
  {
    path: "/services",
    name: "Group Sessions",
  },
  {
    path: "/services",
    name: "Consultations",
  },
];

const contact = [
  {
    name: "290 Westwood Dr, Park Forest, IL 60466, United States.",
    icon: <GrLocationPin className="text-pink-600 "/>
  },
   {
    name: "+1(312) 493-7113",
    icon: <MdOutlinePhone />,
    path: "https://wa.me/13124937112"
  },
   {
    name: "acestennis@yahoo.com",
    icon: <CiMail />,
    path: "mailto:acestennis@yahoo.com"
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col  space-x-2 mb-4">
              <div className="">
                <Image src="/aces.png" alt="logo" width={50} height={50} />
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Transforming tennis worldwide with expert coaching and world
                class facilities
              </p>

              {/* social media links */}
              <div className={`flex gap-3 `}>
                {socials.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={`${item.path}`}
                      className= {`text-white text-lg w-10 h-10 bg-gray-800 rounded-full p-3 flex items-center justify-center transition-colors duration-300 hover:${item.bgColor}`}
                    >
                      {item.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="flex flex-col space-y-2">
              {services.map((item, index) => (
                <Link key={index} href={item.path} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div>
              {contact.map((item, index) => {
                return <div key={index} className="flex flex-col space-y-3">
                  <Link href={`${item.path}`} className="flex gap-3">
                  {item.icon} <span className="text-sm text-gray-400 hover:text-white transition-colors">{item.name}</span>
                  </Link>
                  
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
