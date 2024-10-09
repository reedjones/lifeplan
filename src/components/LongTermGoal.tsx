import React from 'react';
import { Strategy } from '../types';

interface LongTermGoalProps {
  goal_name: string;
  due_date: string;
  strategies: Strategy[];
}

const LongTermGoal: React.FC<LongTermGoalProps> = ({ goal_name, due_date, strategies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Long Term Goal: {goal_name}</h2>
      <p>Due Date: {new Date(due_date).toLocaleString()}</p>
      <h3 className="font-semibold mt-4 mb-2">Strategies:</h3>
      <ul>
        {strategies.map((strategy, index) => (
          <li key={index}>
            {strategy.strategy_name} - Time Frame: {strategy.time_frame_years} years
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LongTermGoal;