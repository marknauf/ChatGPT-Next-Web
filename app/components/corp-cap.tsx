import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import { Edit, Eye } from 'lucide-react';

const initialContent = `# Chemonics International Corporate Capabilities

## Project: Enhancing Sustainable Agriculture in Rural Vietnam

### Executive Summary

Chemonics International brings over 45 years of experience in implementing complex development projects worldwide. For the USAID project "Enhancing Sustainable Agriculture in Rural Vietnam," we offer a unique blend of technical expertise, local knowledge, and innovative approaches to sustainable agriculture. Our proposed solution addresses the critical needs of smallholder farmers in the Northern and Central Highlands of Vietnam, focusing on soil health, water management, crop diversification, and climate-resilient farming techniques.

### Relevant Experience

1. **Vietnam Agricultural Transformation Project (2015-2020)**
   - Improved agricultural productivity for 10,000+ smallholder farmers
   - Reduced synthetic fertilizer use by 30% through organic farming techniques
   - Established 15 farmer cooperatives, improving market access and income stability

2. **Climate-Resilient Agriculture in Southeast Asia (2018-2023)**
   - Introduced drought-resistant crop varieties in 5 countries, including Vietnam
   - Developed innovative water management systems, reducing water usage by 25%
   - Trained 20,000 farmers in climate-smart agricultural practices

3. **Soil Health Initiative in the Mekong Delta (2017-2021)**
   - Restored 50,000 hectares of degraded agricultural land
   - Increased crop yields by 40% through improved soil management techniques
   - Reduced chemical pesticide use by 50% through integrated pest management

### Technical Approach

Our approach to the "Enhancing Sustainable Agriculture in Rural Vietnam" project includes:

1. **Soil Health Management**
   - Implement comprehensive soil testing and mapping
   - Introduce organic soil amendments and cover cropping techniques
   - Promote crop rotation to enhance soil fertility and structure

2. **Water Management Optimization**
   - Deploy smart irrigation systems with soil moisture sensors
   - Construct rainwater harvesting structures
   - Train farmers in water-efficient farming techniques

3. **Climate-Resilient Crop Integration**
   - Introduce and trial drought-tolerant and flood-resistant crop varieties
   - Establish community seed banks for climate-resilient crops
   - Develop crop calendars adjusted for changing climate patterns

4. **Farmer Capacity Building**
   - Establish Farmer Field Schools for hands-on training
   - Develop mobile-based learning platforms for continuous education
   - Create peer-to-peer learning networks for knowledge sharing

5. **Market Access Enhancement**
   - Strengthen existing farmer cooperatives and establish new ones
   - Develop direct linkages with markets and value-added processors
   - Introduce digital platforms for market information and transactions

### Key Personnel

1. **Dr. Nguyen Van Anh - Chief of Party**
   - 20+ years of experience in agricultural development in Vietnam
   - Ph.D. in Agronomy from Vietnam National University of Agriculture

2. **Sarah Johnson - Senior Agricultural Economist**
   - 15 years of experience in agricultural value chain development
   - Led market access initiatives in Southeast Asia for USAID projects

3. **Dr. Tran Minh - Climate Resilience Specialist**
   - Expert in climate-smart agriculture with 10+ years of field experience
   - Developed climate adaptation strategies for smallholder farmers across Asia

### Monitoring and Evaluation Approach

Chemonics will implement a robust M&E system to track progress towards project objectives:

- Baseline, midline, and endline surveys to measure changes in farmer practices and outcomes
- Real-time data collection using mobile technologies for continuous monitoring
- Participatory M&E involving farmer groups for qualitative insights
- Regular reporting and adaptive management to ensure project targets are met

### Conclusion

Chemonics International is uniquely positioned to deliver exceptional results for the "Enhancing Sustainable Agriculture in Rural Vietnam" project. Our extensive experience in the region, technical expertise, and innovative approaches will ensure that we meet and exceed the project's objectives, creating lasting positive change for smallholder farmers in Vietnam.
`;

export const CorpCapEditor = () => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="h-screen p-10 flex flex-col">
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Corporate Capabilities Document</h1>
        <button
          onClick={toggleEditMode}
          style={{ border: '1px solid #e2e8f0' }}
          className="flex items-center px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 transition-colors"
        >
          {isEditing ? (
            <>
              <Eye size={18} className="mr-2" />
              Preview
            </>
          ) : (
            <>
              <Edit size={18} className="mr-2" />
              Edit
            </>
          )}
        </button>
      </div>
      
      <div className="flex-grow overflow-auto">
        {isEditing ? (
          <textarea
            value={content}
            onChange={handleContentChange}
            className="w-full h-full p-4 focus:outline-none resize-none"
            placeholder="Start typing your Markdown content here..."
          />
        ) : (
          <div className="prose max-w-none p-4 markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};