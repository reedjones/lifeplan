import React from 'react';
import { Objective, Strategy, Task } from '../types';

interface RoadmapProps {
  roadmap_name: string;
  objectives: Objective[];
}

const Roadmap: React.FC<RoadmapProps> = ({ roadmap_name, objectives }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Roadmap: {roadmap_name}</h2>
      {objectives.map((objective, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{objective.objective_name}</h3>
          <p>Due Date: {new Date(objective.due_date).toLocaleString()}</p>
          <h4 className="font-semibold mt-2">Strategies:</h4>
          <ul>
            {objective.strategies.map((strategy, strategyIndex) => (
              <li key={strategyIndex}>
                <p>{strategy.strategy_name}</p>
                <ul className="ml-4">
                  {strategy.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>
                      {task.task_name} - Due: {new Date(task.due_date).toLocaleString()}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;