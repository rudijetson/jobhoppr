import React from 'react';
import { Button } from '../ui/Button';  // Updated import

const Education = ({ education, updateEducation, deleteEducation, addEducation }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 p-4 border rounded-md">
          <input
            type="text"
            placeholder="School"
            value={edu.school}
            onChange={(e) => updateEducation(index, 'school', e.target.value)}
            className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
            className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Graduation Year"
              value={edu.graduationYear}
              onChange={(e) => updateEducation(index, 'graduationYear', e.target.value)}
              className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              onClick={() => deleteEducation(index)}
              variant="destructive"
              size="sm"
              aria-label="Delete education"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
      <Button
        onClick={addEducation}
        variant="secondary"
        size="sm"
        className="mt-2"
      >
        + Add Education
      </Button>
    </div>
  );
};

export default Education;