"use client";

import { useState } from "react";
import Completed from "./Completed";
import Ongoing from "./Ongoing";

export function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const tabs = [
    {
      title: "Ongoing",
      value: "Ongoing",
      content: (
        <div className="pl-6 pt-6">
          <h2 className="text-3xl text-[#00464d] font-bold mb-2">Ongoing Projects</h2>
          <Ongoing />
        </div>
      ),
    },
    {
      title: "Completed",
      value: "Completed",
      content: (
        <div className="pl-6 pt-6">
          <h2 className="text-3xl text-[#00464d] font-bold mb-2">Completed Projects</h2>
          <Completed />
        </div>
      ),
    },
    {
      title: "Other",
      value: "Other",
      content: (
        <div className="pl-6 pt-6">
          <h2 className="text-3xl text-[#00464d] font-bold mb-2">Other</h2>
          <p>Here is the content for playground.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-4">
      {/* Tabs Header */}
      <div className="flex justify-center space-x-4 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === tab.value
                ? "bg-[#00464d] text-white"
                : "bg-gray-200 text-[#00464d]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="bg-transparent p-6 rounded-lg ">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
}
