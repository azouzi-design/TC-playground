import React from 'react';

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800';
  const sizeClass = size === 'large' ? 'py-3 px-6 text-lg' : 'py-2 px-4 text-base';
  
  return (
    <button
      type="button"
      className={`rounded-md font-medium ${mode} ${sizeClass}`}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};