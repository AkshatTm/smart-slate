"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      time: "14:00",
    },
    {
      id: "4",
      subject: "History",
      room: "Room 105",
      teacher: "Mr. Brown",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      time: "15:00",
    },
  ],
  Tuesday: [
    {
      id: "5",
      subject: "Chemistry",
      room: "Lab A",
      teacher: "Dr. Smith",
      color: "bg-red-100 text-red-800 border-red-200",
      time: "10:00",
    },
    {
      id: "6",
      subject: "Mathematics",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      time: "12:00",
    },
    {
      id: "7",
      subject: "Physical Education",
      room: "Gymnasium",
      teacher: "Coach Miller",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      time: "14:00",
    },
    {
      id: "8",
      subject: "Art",
      room: "Art Studio",
      teacher: "Ms. Garcia",
      color: "bg-pink-100 text-pink-800 border-pink-200",
      time: "16:00",
    },
  ],
  Wednesday: [
    {
      id: "9",
      subject: "Biology",
      room: "Lab C",
      teacher: "Dr. Anderson",
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
      time: "09:00",
    },
    {
      id: "10",
      subject: "English",
      room: "Room 203",
      teacher: "Ms. Davis",
      color: "bg-green-100 text-green-800 border-green-200",
      time: "11:00",
    },
    {
      id: "11",
      subject: "Mathematics",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      time: "13:00",
    },
  ],
  Thursday: [
    {
      id: "12",
      subject: "Physics",
      room: "Lab B",
      teacher: "Dr. Wilson",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      time: "10:00",
    },
    {
      id: "13",
      subject: "Geography",
      room: "Room 208",
      teacher: "Mr. Taylor",
      color: "bg-teal-100 text-teal-800 border-teal-200",
      time: "12:00",
    },
    {
      id: "14",
      subject: "Chemistry",
      room: "Lab A",
      teacher: "Dr. Smith",
      color: "bg-red-100 text-red-800 border-red-200",
      time: "15:00",
    },
  ],
  Friday: [
    {
      id: "15",
      subject: "Computer Science",
      room: "Computer Lab",
      teacher: "Mr. Lee",
      color: "bg-indigo-100 text-indigo-800 border-indigo-200",
      time: "09:00",
    },
    {
      id: "16",
      subject: "Literature",
      room: "Room 204",
      teacher: "Ms. White",
      color: "bg-violet-100 text-violet-800 border-violet-200",
      time: "11:00",
    },
    {
      id: "17",
      subject: "Mathematics",
      room: "Room 101",
      teacher: "Mr. Johnson",
      color: "bg-blue-100 text-blue-800 border-blue-200",
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

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function StudentTimetable() {
  const getClassForTimeSlot = (day: string, time: string) => {
    const dayClasses = timetableData[day] || [];
    return dayClasses.find((cls) => cls.time === time);
  };

  return (
    <Card className="p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          My Weekly Schedule
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Your class schedule for this week
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-6 gap-px bg-gray-200 rounded-lg overflow-hidden min-w-[800px]">
          {/* Header */}
          <div className="bg-gray-50 p-3 font-medium text-gray-700">Time</div>
          {days.map((day) => (
            <div
              key={day}
              className="bg-gray-50 p-3 font-medium text-gray-700 text-center"
            >
              {day}
            </div>
          ))}

          {/* Time Slots */}
          {timeSlots.map((time) => (
            <>
              <div
                key={time}
                className="bg-white p-3 font-medium text-gray-600 text-center"
              >
                {time}
              </div>
              {days.map((day) => {
                const classData = getClassForTimeSlot(day, time);
                return (
                  <div key={`${day}-${time}`} className="bg-white p-2 h-20">
                    {classData && (
                      <div
                        className={`${classData.color} rounded-md p-2 h-full border-2 transition-all hover:shadow-md cursor-pointer`}
                      >
                        <div className="text-xs font-semibold truncate">
                          {classData.subject}
                        </div>
                        <div className="text-xs text-gray-600 truncate mt-1">
                          {classData.teacher}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {classData.room}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ))}
        </div>
      </div>
    </Card>
  );
}
