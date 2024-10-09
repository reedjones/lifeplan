import React from 'react';

interface PriorityTimeManagementProps {
  priority_area: string;
  time_allocated_hours: number;
  importance: number;
  urgency: number;
}

const PriorityTimeManagement: React.FC<PriorityTimeManagementProps> = ({
  priority_area,
  time_allocated_hours,
  importance,
  urgency,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Priority: {priority_area}</h2>
      <p>Time Allocated: {time_allocated_hours} hours</p>
      <p>Importance: {importance}/10</p>
      <p>Urgency: {urgency}/10</p>
    </div>
  );
};

export default PriorityTimeManagement;