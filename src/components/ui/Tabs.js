import React from 'react';

export const Tabs = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const TabsList = ({ children, ...props }) => (
  <div {...props} className="flex border-b border-gray-200">
    {children}
  </div>
);

export const TabsTrigger = ({ children, ...props }) => (
  <button
    {...props}
    className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
  >
    {children}
  </button>
);

export const TabsContent = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);