import React from 'react';

interface WeeklyStructureProps {
  day_of_week: string;
  morning_routine: string[];
  afternoon_routine: string[];
  evening_routine: string[];
}

const WeeklyStructure: React.FC<WeeklyStructureProps> = ({
  day_of_week,
  morning_routine,
  afternoon_routine,
  evening_routine,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{day_of_week} Routine</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Morning</h3>
          <ul>
            {morning_routine.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Afternoon</h3>
          <ul>
            {afternoon_routine.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Evening</h3>
          <ul>
            {evening_routine.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeeklyStructure;