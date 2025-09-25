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
    <header className="bg-[#f8f9fa] border-b border-gray-200/60 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
            <span className="text-white font-bold text-lg">SS</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Smart Slate</h1>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
                >
                  4
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex-col items-start space-y-1 p-3">
                <div className="font-medium">Assignment Due Tomorrow</div>
                <div className="text-sm text-gray-500">
                  Mathematics Homework - Chapter 5
                </div>
                <div className="text-xs text-gray-400">1 hour ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex-col items-start space-y-1 p-3">
                <div className="font-medium">New Grade Posted</div>
                <div className="text-sm text-gray-500">
                  Physics Quiz - Score: 85/100
                </div>
                <div className="text-xs text-gray-400">3 hours ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex-col items-start space-y-1 p-3">
                <div className="font-medium">Class Schedule Change</div>
                <div className="text-sm text-gray-500">
                  Chemistry moved to Lab B
                </div>
                <div className="text-xs text-gray-400">5 hours ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex-col items-start space-y-1 p-3">
                <div className="font-medium">Library Book Reminder</div>
                <div className="text-sm text-gray-500">
                  "Advanced Physics" due in 2 days
                </div>
                <div className="text-xs text-gray-400">1 day ago</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/api/placeholder/40/40" alt="Profile" />
                  <AvatarFallback className="bg-blue-100 text-blue-700">
                    AS
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Alex Smith</p>
                  <p className="text-xs leading-none text-gray-500">
                    Grade 11 - Science
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
