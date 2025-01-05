import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card } from "../components/ui/card";
import { Mail, Phone, Shield, Settings, LogOut } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

export const UserProfile = () => {
  const navigate = useNavigate(); 

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="h-12 w-20 rounded-full p-0 flex items-center justify-center"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="User Avatar"
              />
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <Card className="border-0 shadow-md rounded-lg bg-white">
            <div className="p-6 pb-3 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="User"
                  />
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    John Doe
                  </h2>
                  <p className="text-sm text-gray-500">Account ID: #123456</p>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-gray-500" />
                <span className="text-sm">john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-gray-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-green-600">
                <Shield size={18} className="text-green-500" />
                <span className="text-sm">Account Active</span>
              </div>
            </div>

            <div className="p-4 pt-0 space-y-3">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 text-gray-700 hover:bg-gray-100"
                onClick={() => console.log("Settings clicked")}
              >
                <Settings size={18} className="text-gray-500" />
                <span className="text-sm">Account Settings</span>
              </Button>
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 text-red-600 hover:text-red-700 hover:bg-red-100"
                onClick={() => {
                  console.log("Logout clicked");
                  navigate("/"); 
                }}
              >
                <LogOut size={18} className="text-red-500" />
                <span className="text-sm">Sign Out</span>
              </Button>
            </div>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
};
