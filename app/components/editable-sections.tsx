import React, { useState, useRef } from 'react';
import { Edit, MoreVertical, Plus, FileText } from 'lucide-react';
import { IconButton } from './button';
import { useNavigate } from 'react-router-dom';
import { Path } from '../constant';


export const EditableSections = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState([
    { id: 'section-1', title: 'General Overview',    documents: [
      { id: "doc1", name: "filename.pdf", type: "PDF" },
      { id: "doc2", name: "filename.pdf", type: "PDF" },
      { id: "doc3", name: "filename.pdf", type: "PDF" },
      { id: "doc4", name: "filenamelon...pdf", type: "PDF" },
      { id: "doc5", name: "filename.pdf", type: "PDF" },
    ], objective: 'The objective of this section is to provide an overview of the project\'s goals, scope, and target outcomes. It establishes the project\'s alignment with USAID\'s strategic priorities, the geographical focus, and the desired impact on local communities in rural Vietnam.' },
    { id: 'section-2',    documents: [
      { id: "doc1", name: "filename.pdf", type: "PDF" },
      { id: "doc2", name: "filename.pdf", type: "PDF" },
      { id: "doc3", name: "filename.pdf", type: "PDF" },
      { id: "doc4", name: "filenamelon...pdf", type: "PDF" },
      { id: "doc5", name: "filename.pdf", type: "PDF" },
    ], title: 'Technical Requirements', objective: 'The objective of this technical section is to outline the methodologies and technologies that will be implemented to improve soil health, enhance water management, and introduce climate-resilient farming practices in rural Vietnam. These solutions will be tailored to local conditions to ensure long-term sustainability and adaptability to climate change.' },
    { id: 'section-3',    documents: [
      { id: "doc1", name: "filename.pdf", type: "PDF" },
      { id: "doc2", name: "filename.pdf", type: "PDF" },
      { id: "doc3", name: "filename.pdf", type: "PDF" },
      { id: "doc4", name: "filenamelon...pdf", type: "PDF" },
      { id: "doc5", name: "filename.pdf", type: "PDF" },
    ],  title: 'Personnel Requirements', objective: 'The objective of this section is to detail the qualifications and roles of key personnel involved in the project, ensuring that the team has the expertise necessary to implement sustainable agricultural practices and meet the project\'s technical and operational goals.' },
  ]);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (e, index) => {
    dragItem.current = index;
    e.target.style.opacity = '0.5';
  };

  const handleDragEnter = (e, index) => {
    dragOverItem.current = index;
    e.target.style.backgroundColor = '#f0f0f0';
  };

  const handleDragLeave = (e) => {
    e.target.style.backgroundColor = '';
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    e.target.style.backgroundColor = '';
    const newSections = [...sections];
    const draggedItemContent = newSections[dragItem.current];
    newSections.splice(dragItem.current, 1);
    newSections.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setSections(newSections);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      documents: [],
      title: `New Section ${sections.length + 1}`,
      objective: 'Enter the objective for this new section.',
    };
    setSections([...sections, newSection]);
  };

  return (
<div className="max-w-4xl mx-auto p-4 h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Proposed Structure</h1>
        <IconButton
         
            text={"Continue"}
            bordered={false}
            type="primary"
            onClick={() => navigate(Path.CorpCapEditor)}
          />

      </div>
      {/* <div className="max-w-4xl mx-auto p-4 h-screen overflow-y-auto"> */}
      <div className="flex justify-end items-center mb-4">
      <button
          onClick={addSection}
          style={{ border: '1px solid #e2e8f0' }}
          className="bg-white text-gray-700 px-4 py-2 rounded-md flex items-center"
        >
          <Plus className="mr-2" size={20} />
          Add Section
        </button>
        </div>
      <ul className="list-none p-0 space-y-4">
        {sections.map((section, index) => (
     <li
     key={section.id}
     draggable
     onDragStart={(e) => handleDragStart(e, index)}
     onDragEnter={(e) => handleDragEnter(e, index)}
     onDragLeave={handleDragLeave}
     onDragEnd={handleDragEnd}
     onDragOver={handleDragOver}
     style={{ border: '1px solid #e2e8f0' }}
     className="bg-white rounded-xl p-5"
   >
     <div className="flex justify-between items-center mb-2">
       <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
       <div className="flex items-center space-x-2">
         <button style={{ border: '1px solid #e2e8f0' }} className="p-1 bg-white rounded hover:bg-gray-100">
           <Edit size={18} className="text-gray-600" />
         </button>
         <button style={{ border: '1px solid #e2e8f0' }} className="p-1 bg-white rounded cursor-move hover:bg-gray-100">
           <MoreVertical size={18} className="text-gray-600" />
         </button>
       </div>
     </div>
   
     <div className="flex justify-between">
       {/* Left side - Overview */}
       <div className="w-1/2 pr-4">
         <h3 className="font-medium text-gray-700 mb-1">Objective:</h3>
         <p className="text-gray-600 text-sm">{section.objective}</p>
       </div>
   
       {/* Right side - Retrieved Documents */}
       <div className="w-1/2 pl-4">
         <h3 className="font-medium text-gray-700 mb-2">Retrieved Documents</h3>
         <div className="flex flex-wrap gap-2">
           {section.documents.map((doc) => (
             <div key={doc.id} className="flex items-center bg-gray-100 rounded px-2 py-1">
               <FileText size={16} className="text-red-500 mr-1" />
               <span className="text-xs text-gray-600">{doc.name}</span>
             </div>
           ))}
         </div>
       </div>
     </div>
   </li>
        ))}
      </ul>
    </div>
  );
};