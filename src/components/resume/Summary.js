import React from 'react';
import { Button } from '../ui/Button';  // Updated import
const Summary = ({ summary, updateSummary }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
      <textarea
        placeholder="Write a brief summary of your professional background and key skills..."
        value={summary}
        onChange={(e) => updateSummary(e.target.value)}
        className="w-full h-32 p-2 border rounded"
      />
    </div>
  );
};

export default Summary;