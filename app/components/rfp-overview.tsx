import React from 'react';
import { IconButton } from './button';
import { Path } from '../constant';
import { useNavigate } from 'react-router-dom';

const projectData = {
  projectTitle: "Enhancing Sustainable Agriculture in Rural Vietnam",
  projectOverview: "USAID seeks proposals for a project aimed at improving sustainable agricultural practices in rural regions of Vietnam. The project will focus on reducing environmental impact while increasing productivity for smallholder farmers. Key areas include soil health, water management, crop diversification, and the integration of climate-resilient farming techniques.",
  objectives: [
    "Implement sustainable farming practices that improve soil quality and reduce the use of harmful chemicals.",
    "Introduce climate-resilient crops to mitigate the effects of climate change.",
    "Develop a water management system to optimize irrigation and reduce waste.",
    "Provide training and capacity-building for local farmers on best practices for sustainable agriculture.",
    "Promote market access for smallholder farmers through improved value chains."
  ],
  targetLocations: "Northern and Central Highlands of Vietnam, with a focus on regions affected by soil degradation and inconsistent rainfall patterns.",
  winOutcomes: [
    "Improved agricultural productivity and income for at least 5,000 smallholder farmers.",
    "Enhanced resilience to climate change for rural farming communities.",
    "20% reduction in the use of synthetic fertilizers and pesticides in target regions.",
    "Development of farmer cooperatives to ensure continued support and market access."
  ],
  timeline: "This project is expected to last for 36 months, with a mid-term evaluation at 18 months."
};

export const RFPOverview = () => {
  const navigate = useNavigate();
  return (

    
    <div className="max-w-4xl mx-auto h-screen flex flex-col bg-white shadow-lg rounded-lg">

      <div className="p-6 overflow-y-auto flex-grow">
      <div className="flex justify-end">
  <IconButton
    bordered={false}
    text={"Continue"}
    type="primary"
    onClick={() => navigate(Path.EditableSections)}
  />
</div>
        <h1 className="text-2xl font-bold mb-2">Project Title:</h1>
        <p className="text-xl text-gray-600 mb-6">{projectData.projectTitle}</p>

        <h2 className="text-xl font-bold mb-2">Project Overview:</h2>
        <p className="text-gray-700 mb-6">{projectData.projectOverview}</p>

        <h2 className="text-xl font-bold mb-2">Objectives:</h2>
        <ul className="list-disc pl-6 mb-6">
          {projectData.objectives.map((objective, index) => (
            <li key={index} className="text-gray-700 mb-2">{objective}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-2">Target Locations:</h2>
        <p className="text-gray-700 mb-6">{projectData.targetLocations}</p>

        <h2 className="text-xl font-bold mb-2">Win Outcomes:</h2>
        <ul className="list-disc pl-6 mb-6">
          {projectData.winOutcomes.map((outcome, index) => (
            <li key={index} className="text-gray-700 mb-2">{outcome}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-2">Timeline:</h2>
        <p className="text-gray-700">{projectData.timeline}</p>
      </div>
    </div>
  );
}