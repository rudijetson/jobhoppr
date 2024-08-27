import React from 'react';

const Textarea = ({ className = '', ...props }) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
  
  const classes = `${baseClasses} ${className}`;

  return (
    <textarea className={classes} {...props} />
  );
};

export default Textarea;