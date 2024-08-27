import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/Accordion';
import { Button } from './ui/Button';
import { toast } from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications

export function ResumeImport({ onImport }) {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const handleImport = async () => {
    setIsLoading(true);
    setApiResponse(null);
    console.log('Starting import process...');

    try {
      console.log('Sending request to API...');
      const response = await fetch('/api/analyze-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume, jobDescription }),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (!response.ok) {
        throw new Error(`Failed to analyze resume: ${response.status} ${responseText}`);
      }

      const data = JSON.parse(responseText);
      console.log('Received API response:', data);
      
      setApiResponse(data);
      
      if (typeof onImport === 'function') {
        onImport(data);
      }
    } catch (error) {
      console.error('Error analyzing resume:', error);
      setApiResponse({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 mb-16">
      <Accordion type="single" collapsible>
        <AccordionItem value="import">
          <AccordionTrigger>Import Resume and Job Description</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                <textarea
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  className="w-full h-40 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Paste your resume here..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full h-40 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Paste the job description here..."
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        onClick={handleImport}
        variant="secondary"
        size="sm"
        className="mt-4"
        disabled={isLoading}
      >
        {isLoading ? 'Analyzing...' : 'Import and Analyze'}
      </Button>
      
      {/* Display API response or error */}
      {apiResponse && (
        <div className="mt-4 p-4 border rounded-md">
          <h3 className="font-bold mb-2">API Response:</h3>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}