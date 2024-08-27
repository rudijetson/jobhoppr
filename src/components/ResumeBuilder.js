import React, { useState, useCallback } from 'react';
import { Button } from './ui/Button';
import { DatePicker } from './ui/DatePicker';
import { Alert, AlertDescription } from './ui/Alert';
import { ResumeImport } from './ResumeImport';

// Custom Components
import Contact from './resume/Contact';
import Summary from './resume/Summary';
import Experience from './resume/Experience';
import Skills from './resume/Skills';
import Education from './resume/Education';

// Utility Functions and Initial States
import { initialResumeState, initialErrorState } from '../lib/initialStates';
import { exportToPDF, exportToHTML } from '../lib/exportFunctions';
import { updateField, addItem, deleteItem, clearContent } from '../utils/resumeUtils';

import Header from './Header';
import Footer from './Footer';

const ResumeBuilder = () => {
  const [resume, setResume] = useState(initialResumeState);
  const [errors, setErrors] = useState(initialErrorState);

  const updateResumeField = useCallback((...args) => updateField(setResume, setErrors)(...args), [setResume, setErrors]);
  const addResumeItem = useCallback((...args) => addItem(setResume)(...args), [setResume]);
  const deleteResumeItem = useCallback((...args) => deleteItem(setResume)(...args), [setResume]);
  const clearResumeContent = useCallback(() => clearContent(setResume, setErrors), [setResume, setErrors]);

  const handleImport = (importedData) => {
    // Update the resume state with the imported data
    setResume(prevResume => ({
      ...prevResume,
      ...importedData
    }));
  };

  const handleClear = () => {
    clearResumeContent();
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <ResumeImport onImport={handleImport} />

        {Object.values(errors).some(error => error) && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>
              Please correct the errors in your form before proceeding.
            </AlertDescription>
          </Alert>
        )}

        <Contact 
          contactInfo={resume.contactInfo} 
          updateContact={useCallback((field, value) => updateResumeField('contactInfo', field, value), [updateResumeField])} 
          errors={errors} 
        />

        <Summary 
          summary={resume.summary} 
          updateSummary={useCallback((value) => updateResumeField('summary', 'summary', value), [updateResumeField])} 
        />

        <Experience 
          experience={resume.experience} 
          updateExperience={useCallback((index, field, value) => updateResumeField('experience', field, value, index), [updateResumeField])} 
          deleteExperience={useCallback((index) => deleteResumeItem('experience', index), [deleteResumeItem])}
          addExperience={useCallback(() => addResumeItem('experience'), [addResumeItem])}
          renderDateField={(value, onChange) => (
            <DatePicker
              selected={value}
              onChange={onChange}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          )}
        />

        <Skills 
          skills={resume.skills} 
          updateSkill={useCallback((index, value) => updateResumeField('skills', index, value), [updateResumeField])}
          deleteSkill={useCallback((index) => deleteResumeItem('skills', index), [deleteResumeItem])}
          addSkill={useCallback(() => addResumeItem('skills'), [addResumeItem])}
        />

        <Education 
          education={resume.education} 
          updateEducation={useCallback((index, field, value) => updateResumeField('education', field, value, index), [updateResumeField])}
          deleteEducation={useCallback((index) => deleteResumeItem('education', index), [deleteResumeItem])}
          addEducation={useCallback(() => addResumeItem('education'), [addResumeItem])}
        />

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            onClick={handleClear}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-red-600 border-red-600 hover:bg-red-50"
          >
            Clear
          </Button>
          <Button
            onClick={() => exportToPDF(resume)}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            PDF
          </Button>
          <Button
            onClick={() => exportToHTML(resume)}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            HTML
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResumeBuilder;