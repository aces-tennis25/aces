import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { BiAward } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import CountUp from "react-countup";



const achievements = [
  {
    icon: <GoTrophy />,
    title: "Tournament Wins",
    count: 150,
    isTrophy: true,
  },
  {
    icon: <BiAward />,
    title: "Scholarship Recepients",
    count: 20,
    isAward: true,
  },
  {
    icon: <IoStarOutline />,
    title: "State Champions",
    count: 30,
    isStar: true,
  },
  {
    icon: <FiTarget />,
    title: "Profesional Players",
    count: 25,
    isTarget: true,
  },
];

interface AchievementProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  isTrophy?: boolean;
  isAward?: boolean;
  isStar?: boolean;
  isTarget?: boolean;
}
const getIconBackground = (item: AchievementProps) => {
  if (item.isTrophy) return "bg-yellow-100";
  if (item.isAward) return "bg-blue-100";
  if (item.isStar) return "bg-purple-100";
  if (item.isTarget) return "bg-green-100";
};
const getIconColor = (item: AchievementProps) => {
  if (item.isTrophy) return "text-yellow-600";
  if (item.isAward) return "text-blue-600";
  if (item.isStar) return "text-purple-600";
  if (item.isTarget) return "text-green-600";
};

const AchievementStats = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getIconBackground(
                  item
                )}`}
              >
                <span className={`text-3xl ${getIconColor(item)}`}>
                  {item.icon}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <CountUp end={item.count} duration={5} delay={2} /> +
              </div>
              <p className="text-gray-600 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementStats;
