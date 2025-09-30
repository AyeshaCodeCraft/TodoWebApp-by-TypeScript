
// src/pages/Dashboard/components/TaskStatus/TaskStatus.tsx
import React from "react";
import dotGreen from "/assets/greendot.png";
import dotBlue from "/assets/bluedot.png";
import dotRed from "/assets/reddot.png";
import inProgressIcon from "/assets/Task Complete.png";

interface CircularProgressProps {
  percentage: number;
  color: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, color }) => {
  const radius = 15.9155; // SVG radius
  const dashArray = 100;
  const dashOffset = dashArray - percentage;


  return (
    <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
      {/* Background circle */}
      <path
        className="fill-none stroke-gray-300 stroke-[3]"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      {/* Progress circle */}
      <path
        className="fill-none stroke-[3] stroke-linecap-round transition-[stroke-dashoffset] duration-500"
        stroke={color}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      {/* Percentage text */}
      <text
        x="18"
        y="18"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-black rotate-90 origin-center font-inter font-normal text-[10px]"
      >
        {percentage}%
      </text>
    </svg>
  );
};

interface TaskStatusProps {
  completedPct: number;
  inProgressPct: number;
  notStartedPct: number;
}

const TaskStatus: React.FC<TaskStatusProps> = ({ completedPct, inProgressPct, notStartedPct }) => {
  const circles = [
    { percentage: completedPct, color: "#4CAF50", label: "Completed", dot: dotGreen },
    { percentage: inProgressPct, color: "#2196F3", label: "In Progress", dot: dotBlue },
    { percentage: notStartedPct, color: "#F44336", label: "Not Started", dot: dotRed },
  ];

  return (
    <div className="rounded-xl p-4 shadow-sm flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <img src={inProgressIcon} alt="in-progress" className="w-5 h-5" />
        <span className="text-red-500 font-inter font-normal text-sm">Task Status</span>
      </div>

      {/* Circles */}
      <div className="flex justify-around gap-5">
        {circles.map((circle) => (
          <div key={circle.label} className="flex flex-col items-center">
            <CircularProgress percentage={circle.percentage} color={circle.color} />
            <div className="flex items-center gap-1.5 mt-1 text-sm">
              <img src={circle.dot} alt={circle.label} className="w-2 h-2" />
              <span>{circle.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
