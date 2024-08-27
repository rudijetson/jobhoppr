import { validateField } from '../lib/utils';
import { initialResumeState, initialErrorState } from '../lib/initialStates';

export const updateField = (setResume, setErrors) => (section, field, value, index = null) => {
  setResume(prev => {
    if (index !== null) {
      return {
        ...prev,
        [section]: prev[section].map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      };
    }
    return {
      ...prev,
      [section]: typeof prev[section] === 'object' ? { ...prev[section], [field]: value } : value
    };
  });

  if (['name', 'email', 'phone'].includes(field)) {
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  }
};

export const addItem = (setResume) => (section) => {
  setResume(prev => ({
    ...prev,
    [section]: [...prev[section], initialResumeState[section][0]]
  }));
};

export const deleteItem = (setResume) => (section, index) => {
  setResume(prev => ({
    ...prev,
    [section]: prev[section].filter((_, i) => i !== index)
  }));
};

export const clearContent = (setResume, setErrors) => () => {
  setResume(initialResumeState);
  setErrors(initialErrorState);
};
