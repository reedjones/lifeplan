import React from 'react';

interface WeightedTaskProps {
  task_name: string;
  priority: number;
  time_required_hours: number;
  due_date: string;
}

const WeightedTask: React.FC<WeightedTaskProps> = ({
  task_name,
  priority,
  time_required_hours,
  due_date,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Task: {task_name}</h2>
      <p>Priority: {priority}/10</p>
      <p>Time Required: {time_required_hours} hours</p>
      <p>Due Date: {new Date(due_date).toLocaleString()}</p>
    </div>
  );
};

export default WeightedTask;