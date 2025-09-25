"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface TimeSlot {
  id: string;
  subject: string;
  room: string;
  teacher: string;
  color: string;
  time: string;
}

interface TimetableData {
  [key: string]: TimeSlot[];
}

const timetableData: TimetableData = {
  Monday: [
    {
      id: "1",
      subject: "Mathematics",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      time: "09:00",
    },
    {
      id: "2",
      subject: "English",
      room: "Room 203",
      teacher: "Ms. Davis",
      color: "bg-green-100 text-green-800 border-green-200",
      time: "11:00",
    },
    {
      id: "3",
      subject: "Physics",
      room: "Lab B",
      teacher: "Dr. Wilson",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      time: "13:00",
    },
    {
      id: "4",
      subject: "History",
      room: "Room 105",
      teacher: "Mr. Brown",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      time: "15:00",
    },
    {
      id: "5",
      subject: "Art",
      room: "Art Studio",
      teacher: "Ms. Garcia",
      color: "bg-pink-100 text-pink-800 border-pink-200",
      time: "16:00",
    },
  ],
  Tuesday: [
    {
      id: "6",
      subject: "Chemistry",
      room: "Lab A",
      teacher: "Dr. Smith",
      color: "bg-red-100 text-red-800 border-red-200",
      time: "09:00",
    },
    {
      id: "7",
      subject: "Mathematics",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      time: "10:00",
    },
    {
      id: "8",
      subject: "Biology",
      room: "Lab C",
      teacher: "Dr. Anderson",
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
      time: "12:00",
    },
    {
      id: "9",
      subject: "Physical Education",
      room: "Gymnasium",
      teacher: "Coach Miller",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      time: "14:00",
    },
    {
      id: "10",
      subject: "Computer Science",
      room: "Computer Lab",
      teacher: "Mr. Lee",
      color: "bg-indigo-100 text-indigo-800 border-indigo-200",
      time: "15:00",
    },
  ],
  Wednesday: [
    {
      id: "11",
      subject: "Biology",
      room: "Lab C",
      teacher: "Dr. Anderson",
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
      time: "09:00",
    },
    {
      id: "12",
      subject: "English",
      room: "Room 203",
      teacher: "Ms. Davis",
      color: "bg-green-100 text-green-800 border-green-200",
      time: "11:00",
    },
    {
      id: "13",
      subject: "Mathematics",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      time: "13:00",
    },
    {
      id: "14",
      subject: "Geography",
      room: "Room 208",
      teacher: "Mr. Taylor",
      color: "bg-teal-100 text-teal-800 border-teal-200",
      time: "14:00",
    },
    {
      id: "15",
      subject: "Music",
      room: "Music Room",
      teacher: "Ms. Wilson",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      time: "16:00",
    },
  ],
  Thursday: [
    {
      id: "16",
      subject: "Physics",
      room: "Lab B",
      teacher: "Dr. Wilson",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      time: "10:00",
    },
    {
      id: "17",
      subject: "Chemistry",
      room: "Lab A",
      teacher: "Dr. Smith",
      color: "bg-red-100 text-red-800 border-red-200",
      time: "11:00",
    },
    {
      id: "18",
      subject: "Geography",
      room: "Room 208",
      teacher: "Mr. Taylor",
      color: "bg-teal-100 text-teal-800 border-teal-200",
      time: "13:00",
    },
    {
      id: "19",
      subject: "Literature",
      room: "Room 204",
      teacher: "Ms. White",
      color: "bg-violet-100 text-violet-800 border-violet-200",
      time: "15:00",
    },
    {
      id: "20",
      subject: "Physical Education",
      room: "Gymnasium",
      teacher: "Coach Miller",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      time: "16:00",
    },
  ],
  Friday: [
    {
      id: "21",
      subject: "Computer Science",
      room: "Computer Lab",
      teacher: "Mr. Lee",
      color: "bg-indigo-100 text-indigo-800 border-indigo-200",
      time: "09:00",
    },
    {
      id: "22",
      subject: "Literature",
      room: "Room 204",
      teacher: "Ms. White",
      color: "bg-violet-100 text-violet-800 border-violet-200",
      time: "11:00",
    },
    {
      id: "23",
      subject: "Mathematics",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      time: "12:00",
    },
    {
      id: "24",
      subject: "History",
      room: "Room 105",
      teacher: "Mr. Brown",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      time: "14:00",
    },
    {
      id: "25",
      subject: "Art",
      room: "Art Studio",
      teacher: "Ms. Garcia",
      color: "bg-pink-100 text-pink-800 border-pink-200",
      time: "15:00",
    },
  ],
  Saturday: [
    {
      id: "26",
      subject: "Science Project",
      room: "Lab A",
      teacher: "Dr. Smith",
      color: "bg-cyan-100 text-cyan-800 border-cyan-200",
      time: "10:00",
    },
    {
      id: "27",
      subject: "Math Workshop",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      time: "11:00",
    },
    {
      id: "28",
      subject: "Study Hall",
      room: "Library",
      teacher: "Ms. Roberts",
      color: "bg-gray-100 text-gray-800 border-gray-200",
      time: "13:00",
    },
    {
      id: "29",
      subject: "Sports Club",
      room: "Gymnasium",
      teacher: "Coach Miller",
      color: "bg-green-100 text-green-800 border-green-200",
      time: "14:00",
    },
  ],
};

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function StudentTimetable() {
  const getClassForTimeSlot = (day: string, time: string) => {
    const dayClasses = timetableData[day] || [];
    return dayClasses.find((cls) => cls.time === time);
  };

  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          My Weekly Schedule
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Your class schedule for this week
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 gap-px bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden min-w-[900px] shadow-inner">
          {/* Header */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-3 font-semibold text-gray-700 border-b border-gray-200">
            Time
          </div>
          {days.map((day) => (
            <div
              key={day}
              className="bg-gradient-to-br from-slate-50 to-gray-100 p-3 font-semibold text-gray-700 text-center border-b border-gray-200"
            >
              {day}
            </div>
          ))}

          {/* Time Slots - FIXED: Added key to React.Fragment */}
          {timeSlots.map((time) => (
            <React.Fragment key={`time-slot-${time}`}>
              <div className="bg-white/90 backdrop-blur-sm p-3 font-medium text-gray-600 text-center border-r border-gray-100/50">
                <span className="text-sm font-mono">{time}</span>
              </div>
              {days.map((day) => {
                const classData = getClassForTimeSlot(day, time);
                return (
                  <div
                    key={`${day}-${time}`}
                    className="bg-white/90 backdrop-blur-sm p-2 h-20 border-r border-gray-50 last:border-r-0"
                  >
                    {classData && (
                      <div
                        className={`${classData.color} rounded-lg p-2 h-full border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group transform-gpu`}
                        style={{
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                          backdropFilter: "blur(2px)",
                        }}
                      >
                        <div className="text-xs font-semibold truncate group-hover:font-bold transition-all duration-200">
                          {classData.subject}
                        </div>
                        <div className="text-xs text-gray-600 truncate mt-0.5 group-hover:text-gray-800 transition-colors">
                          {classData.teacher}
                        </div>
                        <div className="text-xs text-gray-500 truncate group-hover:text-gray-700 transition-colors">
                          {classData.room}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  );
}
