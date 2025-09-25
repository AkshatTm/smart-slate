"use client";

import { Bell, User, LogOut, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-50/90 to-slate-100/90 backdrop-blur-lg border-b border-white/20 px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-30 blur animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Smart Slate
            </h1>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              Intelligent Scheduling Platform
            </p>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-white/50 transition-all duration-300 rounded-xl group"
              >
                <Bell className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs animate-bounce"
                  style={{ animationDuration: "2s" }}
                >
                  4
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-80 bg-white/95 backdrop-blur-lg border-0 shadow-2xl rounded-xl"
            >
              <DropdownMenuLabel className="text-center py-3 border-b border-gray-100">
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Notifications
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[
                {
                  title: "Assignment Due Tomorrow",
                  desc: "Mathematics Homework - Chapter 5",
                  time: "1 hour ago",
                  urgent: true,
                },
                {
                  title: "New Grade Posted",
                  desc: "Physics Quiz - Score: 85/100",
                  time: "3 hours ago",
                  urgent: false,
                },
                {
                  title: "Class Schedule Change",
                  desc: "Chemistry moved to Lab B",
                  time: "5 hours ago",
                  urgent: false,
                },
              ].map((notification, index) => (
                <DropdownMenuItem
                  key={`notification-${index}`}
                  className="flex-col items-start space-y-1 p-4 hover:bg-gray-50/70 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className={`font-medium text-sm ${
                        notification.urgent ? "text-red-600" : "text-gray-800"
                      }`}
                    >
                      {notification.title}
                    </div>
                    {notification.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {notification.desc}
                  </div>
                  <div className="text-xs text-gray-400">
                    {notification.time}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-12 w-12 rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <Avatar className="h-10 w-10 ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
                  <AvatarImage src="/api/placeholder/40/40" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 text-white font-semibold">
                    AS
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-white/95 backdrop-blur-lg border-0 shadow-2xl rounded-xl"
            >
              <DropdownMenuLabel className="font-normal p-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-semibold leading-none text-gray-800">
                    Alex Smith
                  </p>
                  <p className="text-xs leading-none text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
                    Grade 11 - Science Stream
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-50/70 rounded-lg mx-2 my-1 transition-all duration-200">
                <User className="mr-3 h-4 w-4 text-blue-500" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50/70 rounded-lg mx-2 my-1 transition-all duration-200">
                <Settings className="mr-3 h-4 w-4 text-gray-500" />
                <span>Preferences</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50/70 rounded-lg mx-2 my-1 transition-all duration-200">
                <HelpCircle className="mr-3 h-4 w-4 text-green-500" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 hover:bg-red-50/70 rounded-lg mx-2 my-1 transition-all duration-200">
                <LogOut className="mr-3 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
