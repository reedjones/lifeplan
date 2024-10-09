import React from 'react';
import { Activity } from '../types';

interface RolesImpactActivitiesProps {
  role: string;
  activities: Activity[];
}

const RolesImpactActivities: React.FC<RolesImpactActivitiesProps> = ({ role, activities }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Role: {role}</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{activity.activity_name}:</span> Impact - {activity.impact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RolesImpactActivities;