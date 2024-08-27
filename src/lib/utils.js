import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const validateField = (field, value) => {
  switch (field) {
    case 'name':
      return value.trim().length > 0 ? '' : 'Please enter a valid name';
    case 'email':
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? '' : 'Please enter a valid email address';
    case 'phone':
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value) ? '' : 'Please enter a valid phone number';
    default:
      return '';
  }
};

export const extractFilledData = (resume) => {
  // This function should process the resume data and return only the filled fields
  // For now, we'll just return the entire resume object
  return resume;
};