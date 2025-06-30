
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { PatientHeader } from "@/components/PatientHeader";
import { PatientOverview } from "@/components/PatientOverview";
import { AIAssistant } from "@/components/AIAssistant";

export const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <PatientHeader />
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <PatientOverview />
          </div>
          <AIAssistant />
        </div>
      </div>
    </div>
  );
};
