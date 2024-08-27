import React from 'react';
import { Button } from '../ui/Button';  // Updated import

const Experience = ({ experience, updateExperience, deleteExperience, addExperience }) => {
  const formatDate = (date) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    return `${month}/${year}`;
  };

  const handleDateChange = (index, field, value) => {
    updateExperience(index, field, formatDate(value));
  };

  const addBulletPoint = (expIndex) => {
    const updatedExperience = [...experience];
    if (!updatedExperience[expIndex].bulletPoints) {
      updatedExperience[expIndex].bulletPoints = [];
    }
    updatedExperience[expIndex].bulletPoints.push('');
    updateExperience(expIndex, 'bulletPoints', updatedExperience[expIndex].bulletPoints);
  };

  const updateBulletPoint = (expIndex, bulletIndex, value) => {
    const updatedExperience = [...experience];
    updatedExperience[expIndex].bulletPoints[bulletIndex] = value;
    updateExperience(expIndex, 'bulletPoints', updatedExperience[expIndex].bulletPoints);
  };

  const deleteBulletPoint = (expIndex, bulletIndex) => {
    const updatedExperience = [...experience];
    updatedExperience[expIndex].bulletPoints.splice(bulletIndex, 1);
    updateExperience(expIndex, 'bulletPoints', updatedExperience[expIndex].bulletPoints);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4 p-4 border rounded-md">
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => updateExperience(index, 'company', e.target.value)}
            className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Position"
            value={exp.position}
            onChange={(e) => updateExperience(index, 'position', e.target.value)}
            className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between mb-2">
            <div className="w-[48%]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="month"
                value={exp.startDate ? exp.startDate.split('/').reverse().join('-') : ''}
                onChange={(e) => handleDateChange(index, 'startDate', e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-[48%]">
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="month"
                value={exp.endDate ? exp.endDate.split('/').reverse().join('-') : ''}
                onChange={(e) => handleDateChange(index, 'endDate', e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities</label>
            {exp.bulletPoints && exp.bulletPoints.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex items-center mb-2">
                <span className="mr-2">•</span>
                <input
                  type="text"
                  value={bullet}
                  onChange={(e) => updateBulletPoint(index, bulletIndex, e.target.value)}
                  className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  onClick={() => deleteBulletPoint(index, bulletIndex)}
                  variant="destructive"
                  size="sm"
                  className="ml-2"
                  aria-label="Delete bullet point"
                >
                  ×
                </Button>
              </div>
            ))}
            <Button
              onClick={() => addBulletPoint(index)}
              variant="secondary"
              size="sm"
              className="mt-2"
            >
              + Add Bullet Point
            </Button>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => deleteExperience(index)}
              variant="destructive"
              size="sm"
              aria-label="Delete experience"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
      <Button
        onClick={addExperience}
        variant="secondary"
        size="sm"
        className="mt-2"
      >
        + Add Experience
      </Button>
    </div>
  );
};

export default Experience;