import React from 'react';
import { Button } from '../ui/Button';

const Skills = ({ skills, updateSkill, deleteSkill, addSkill }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="mr-2 text-lg">•</span>
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => updateSkill(index, e.target.value)}
              className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              onClick={() => deleteSkill(index)}
              variant="destructive"
              size="sm"
              className="ml-2"
              aria-label="Delete skill"
            >
              ×
            </Button>
          </div>
        ))}
      </div>
      <Button
        onClick={addSkill}
        variant="secondary"
        size="sm"
        className="mt-4"
      >
        + Add Skill
      </Button>
    </div>
  );
};

export default Skills;