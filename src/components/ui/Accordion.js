import React, { useState } from 'react';

export const Accordion = ({ children, type = "single", defaultIndex, collapsible = true }) => {
  const [openIndexes, setOpenIndexes] = useState(
    defaultIndex ? [defaultIndex] : []
  );

  const toggleItem = (index) => {
    if (type === "single") {
      setOpenIndexes(
        openIndexes[0] === index && collapsible ? [] : [index]
      );
    } else {
      setOpenIndexes((currentIndexes) =>
        currentIndexes.includes(index)
          ? currentIndexes.filter((i) => i !== index)
          : [...currentIndexes, index]
      );
    }
  };

  return (
    <div className="w-full">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndexes.includes(index),
          onClick: () => toggleItem(index),
        })
      )}
    </div>
  );
};

export const AccordionItem = ({ children, value, isOpen, onClick }) => {
  return (
    <div className="border-b">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, onClick })
      )}
    </div>
  );
};

export const AccordionTrigger = ({ children, isOpen, onClick }) => {
  return (
    <button
      className="flex w-full justify-between items-center px-4 py-2 text-left text-sm font-medium focus:outline-none"
      onClick={onClick}
    >
      {children}
      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
  );
};

export const AccordionContent = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="px-4 py-2">
      {children}
    </div>
  );
};

export const ChevronDown = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);