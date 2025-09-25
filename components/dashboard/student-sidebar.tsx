"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CalendarDays,
  BookOpen,
  Trophy,
  Clock,
  AlertCircle,
  CheckCircle2,
  GraduationCap,
  FileText,
} from "lucide-react";

export default function StudentSidebar() {
  return (
    <div className="space-y-6">
      {/* Today's Classes */}
      <Card className="bg-gray-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-blue-600" />
            Today's Classes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
              <div className="font-medium text-sm">Mathematics</div>
              <div className="text-xs text-gray-500">
                Mr. Johnson • Room 101
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              11:00
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
              <div className="font-medium text-sm">Physics Lab</div>
              <div className="text-xs text-gray-500">Dr. Wilson • Lab B</div>
            </div>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              14:00
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
              <div className="font-medium text-sm">History</div>
              <div className="text-xs text-gray-500">Mr. Brown • Room 105</div>
            </div>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
              15:00
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Academic Progress */}
      <Card className="bg-gray-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-green-600" />
            Academic Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Mathematics</span>
              <span className="text-gray-500">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Physics</span>
              <span className="text-gray-500">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Chemistry</span>
              <span className="text-gray-500">92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>English</span>
              <span className="text-gray-500">88%</span>
            </div>
            <Progress value={88} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Assignments */}
      <Card className="bg-gray-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            Assignments Due
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium">Math Homework Ch.5</div>
              <div className="text-xs text-gray-500">Due: Tomorrow</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium">Physics Lab Report</div>
              <div className="text-xs text-gray-500">Due: Friday</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium">Chemistry Quiz</div>
              <div className="text-xs text-gray-500">Completed</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium">History Essay</div>
              <div className="text-xs text-gray-500">Due: Next Monday</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="bg-gray-50/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
              <div className="text-sm font-medium">Physics Quiz</div>
              <div className="text-xs text-gray-500">Excellent Performance</div>
            </div>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              95%
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
              <div className="text-sm font-medium">Perfect Attendance</div>
              <div className="text-xs text-gray-500">This Month</div>
            </div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              30/30
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
              <div className="text-sm font-medium">Math Competition</div>
              <div className="text-xs text-gray-500">School Level</div>
            </div>
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
              2nd
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
