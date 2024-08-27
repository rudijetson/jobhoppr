import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResumeContext = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
    },
    professionalSummary: '',
    experience: [],
    skills: [],
    education: [],
  });

  const updateResumeData = (newData) => {
    setResumeData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const updateSection = (section, data) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const addExperience = (newExperience) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, newExperience],
    }));
  };

  const removeExperience = (index) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: prevData.experience.filter((_, i) => i !== index),
    }));
  };

  const addEducation = (newEducation) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [...prevData.education, newEducation],
    }));
  };

  const removeEducation = (index) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index),
    }));
  };

  const addSkill = (newSkill) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, newSkill],
    }));
  };

  const removeSkill = (index) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateResumeData,
        updateSection,
        addExperience,
        removeExperience,
        addEducation,
        removeEducation,
        addSkill,
        removeSkill,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};