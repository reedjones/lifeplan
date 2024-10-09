import React from 'react';
import { Step } from '../types';

interface ShortTermGoalProps {
  goal_name: string;
  due_date: string;
  steps: Step[];
}

const ShortTermGoal: React.FC<ShortTermGoalProps> = ({ goal_name, due_date, steps }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Short Term Goal: {goal_name}</h2>
      <p>Due Date: {new Date(due_date).toLocaleString()}</p>
      <h3 className="font-semibold mt-4 mb-2">Steps:</h3>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            {step.step_description} - {step.time_estimate_hours} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortTermGoal;