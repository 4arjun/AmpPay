import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { AlertOctagon, Upload, MapPin } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const IssueReporting = () => {
  const { toast } = useToast();

  const handleReport = () => {
    toast({
      title: "Issue Reported",
      description: "Your report has been submitted successfully.",
    });
  };

  return (
    <Card className="glass-card bg-gradient-to-br from-[#1A1F2C] via-[#2D3748] to-[#1A1F2C] p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <AlertOctagon className="text-red-500 w-6 h-6" />
        <h3 className="text-lg font-semibold text-gray-200">Report an Issue</h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 flex-1 border-gray-500 hover:border-gray-300 text-gray-300 hover:bg-gray-700"
            onClick={() =>
              toast({
                title: "Location Access",
                description: "Please enable location services to use this feature.",
              })
            }
          >
            <MapPin className="w-5 h-5" />
            <span>Tag Location</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 flex-1 border-gray-500 hover:border-gray-300 text-gray-300 hover:bg-gray-700"
            onClick={() =>
              toast({
                title: "Upload Photo",
                description: "Photo upload feature will be available soon.",
              })
            }
          >
            <Upload className="w-5 h-5" />
            <span>Upload Photo</span>
          </Button>
        </div>

        <textarea
          className="w-full p-4 rounded-lg bg-gray-700 border border-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-200"
          placeholder="Describe the issue..."
          rows={4}
        />

        <Button
          className="w-full bg-gray-600 hover:bg-gray-900 text-white font-medium py-3 rounded-lg transition-colors"
          onClick={handleReport}
        >
          Submit Report
        </Button>
      </div>
    </Card>
  );
};

export default IssueReporting;
