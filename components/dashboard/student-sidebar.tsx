"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CalendarDays,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  BookOpen,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function StudentSidebar() {
  const [mounted, setMounted] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState({
    math: 0,
    physics: 0,
    chemistry: 0,
    english: 0,
  });

  const finalProgress = {
    math: 85,
    physics: 78,
    chemistry: 92,
    english: 88,
  };

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setAnimatedProgress(finalProgress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-6 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-64 bg-gray-200/50 rounded-lg backdrop-blur-sm"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Today's Classes */}
      <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
              <CalendarDays className="h-5 w-5 text-blue-600" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Today's Classes
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              subject: "Mathematics",
              teacher: "Mr. Johnson",
              room: "Room 101",
              time: "11:00",
              color: "blue",
            },
            {
              subject: "Physics Lab",
              teacher: "Dr. Wilson",
              room: "Lab B",
              time: "14:00",
              color: "purple",
            },
            {
              subject: "History",
              teacher: "Mr. Brown",
              room: "Room 105",
              time: "15:00",
              color: "orange",
            },
          ].map((classItem, index) => (
            <div
              key={`class-${index}`}
              className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/90 hover:shadow-md transition-all duration-300 group/item transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full bg-${classItem.color}-500 group-hover/item:scale-125 transition-transform duration-200`}
                ></div>
                <div>
                  <div className="font-medium text-sm group-hover/item:text-gray-900 transition-colors">
                    {classItem.subject}
                  </div>
                  <div className="text-xs text-gray-500 group-hover/item:text-gray-600 transition-colors">
                    {classItem.teacher} • {classItem.room}
                  </div>
                </div>
              </div>
              <Badge
                className={`bg-${classItem.color}-100 text-${classItem.color}-700 hover:bg-${classItem.color}-100 group-hover/item:scale-105 transition-transform duration-200 font-mono`}
              >
                {classItem.time}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Academic Progress with Enhanced Animation */}
      <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Academic Progress
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {[
            {
              subject: "Mathematics",
              progress: animatedProgress.math,
              color: "blue",
              icon: "📐",
            },
            {
              subject: "Physics",
              progress: animatedProgress.physics,
              color: "purple",
              icon: "⚡",
            },
            {
              subject: "Chemistry",
              progress: animatedProgress.chemistry,
              color: "red",
              icon: "🧪",
            },
            {
              subject: "English",
              progress: animatedProgress.english,
              color: "green",
              icon: "📚",
            },
          ].map((item, index) => (
            <div key={`progress-${index}`} className="space-y-3 group/progress">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium group-hover/progress:font-semibold transition-all duration-200">
                    {item.subject}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 font-mono group-hover/progress:text-gray-700 transition-colors">
                    {item.progress}%
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full bg-${item.color}-500 group-hover/progress:scale-125 transition-transform duration-200`}
                  ></div>
                </div>
              </div>
              <div className="relative">
                <Progress
                  value={item.progress}
                  className="h-3 transition-all duration-1000 ease-out group-hover/progress:h-4"
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)`,
                    animation: `shimmer 2s infinite ${index * 0.5}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Assignments with Better Visual Hierarchy */}
      <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Assignments Due
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "Math Homework Ch.5",
              due: "Tomorrow",
              priority: "high",
              icon: AlertCircle,
              iconColor: "text-red-500",
              completed: false,
            },
            {
              title: "Physics Lab Report",
              due: "Friday",
              priority: "medium",
              icon: AlertCircle,
              iconColor: "text-orange-500",
              completed: false,
            },
            {
              title: "Chemistry Quiz",
              due: "Completed",
              priority: "completed",
              icon: CheckCircle2,
              iconColor: "text-green-500",
              completed: true,
            },
            {
              title: "History Essay",
              due: "Next Monday",
              priority: "low",
              icon: AlertCircle,
              iconColor: "text-yellow-500",
              completed: false,
            },
          ].map((assignment, index) => (
            <div
              key={`assignment-${index}`}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/60 transition-all duration-300 group/assignment cursor-pointer transform hover:-translate-y-0.5"
            >
              <div className="mt-0.5 group-hover/assignment:scale-110 transition-transform duration-200">
                <assignment.icon
                  className={`h-4 w-4 ${assignment.iconColor} ${
                    assignment.priority === "high" ? "animate-pulse" : ""
                  } flex-shrink-0`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className={`text-sm font-medium group-hover/assignment:font-semibold transition-all duration-200 ${
                    assignment.completed
                      ? "line-through decoration-green-500 text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {assignment.title}
                </div>
                <div className="text-xs text-gray-500 group-hover/assignment:text-gray-600 transition-colors mt-0.5">
                  Due: {assignment.due}
                </div>
              </div>
              {assignment.priority === "high" && !assignment.completed && (
                <Badge variant="destructive" className="text-xs animate-pulse">
                  Urgent
                </Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
