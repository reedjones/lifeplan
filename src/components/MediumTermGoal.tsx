import React from 'react';
import { Milestone } from '../types';

interface MediumTermGoalProps {
  goal_name: string;
  due_date: string;
  milestones: Milestone[];
}

const MediumTermGoal: React.FC<MediumTermGoalProps> = ({ goal_name, due_date, milestones }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Medium Term Goal: {goal_name}</h2>
      <p>Due Date: {new Date(due_date).toLocaleString()}</p>
      <h3 className="font-semibold mt-4 mb-2">Milestones:</h3>
      <ul>
        {milestones.map((milestone, index) => (
          <li key={index}>
            {milestone.milestone_name} - Due: {new Date(milestone.due_date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediumTermGoal;