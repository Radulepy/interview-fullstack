import React from 'react';

interface DemoProps {
    title: string;
    count: number;
  }

const TestComponent: React.FC<DemoProps> = ({ title, count }) => (
  <div>
    <h2>{title}</h2>
    <p>Count: {count}</p>
  </div>
);

export default TestComponent;