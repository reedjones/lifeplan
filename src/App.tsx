import React from 'react';
import RolesImpactActivities from './components/RolesImpactActivities';
import PriorityTimeManagement from './components/PriorityTimeManagement';
import WeightedTask from './components/WeightedTask';
import WeeklyStructure from './components/WeeklyStructure';
import ShortTermGoal from './components/ShortTermGoal';
import MediumTermGoal from './components/MediumTermGoal';
import LongTermGoal from './components/LongTermGoal';
import Roadmap from './components/Roadmap';
import LifeCoachingQuestionnaire from './components/LifeCoachingQuestionnaire';

const App: React.FC = () => {
  const rolesData = {
    role: "Parent",
    activities: [
      { activity_name: "Help with Homework", impact: 8 },
      { activity_name: "Cook Dinner", impact: 6 }
    ]
  };

  const priorityData = {
    priority_area: "Health",
    time_allocated_hours: 10,
    importance: 5,
    urgency: 4
  };

  const taskData = {
    task_name: "Finish Project Proposal",
    priority: 9,
    time_required_hours: 5,
    due_date: "2024-10-15T17:00:00Z"
  };

  const weeklyStructureData = {
    day_of_week: "Monday",
    morning_routine: ["Meditation", "Exercise", "Check Emails"],
    afternoon_routine: ["Team Meeting", "Project Work"],
    evening_routine: ["Family Dinner", "Read"]
  };

  const shortTermGoalData = {
    goal_name: "Complete Blog Post",
    due_date: "2024-10-10T12:00:00Z",
    steps: [
      { step_description: "Research topic", time_estimate_hours: 2 },
      { step_description: "Write draft", time_estimate_hours: 3 }
    ]
  };

  const mediumTermGoalData = {
    goal_name: "Launch Personal Website",
    due_date: "2024-12-01T12:00:00Z",
    milestones: [
      { milestone_name: "Design wireframes", due_date: "2024-10-20T12:00:00Z" },
      { milestone_name: "Develop site", due_date: "2024-11-15T12:00:00Z" }
    ]
  };

  const longTermGoalData = {
    goal_name: "Achieve Financial Independence",
    due_date: "2030-01-01T00:00:00Z",
    strategies: [
      { strategy_name: "Invest in diversified portfolio", time_frame_years: 5 },
      { strategy_name: "Build multiple income streams", time_frame_years: 3 }
    ]
  };

  const roadmapData = {
    roadmap_name: "Product Launch Roadmap",
    objectives: [
      {
        objective_name: "Market Research",
        due_date: "2024-11-01T12:00:00Z",
        strategies: [
          {
            strategy_name: "Survey Potential Users",
            tasks: [
              { task_name: "Create Survey", due_date: "2024-10-15T12:00:00Z" },
              { task_name: "Distribute Survey", due_date: "2024-10-20T12:00:00Z" }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Productivity Management Dashboard</h1>
      <div className="max-w-4xl mx-auto">
        <RolesImpactActivities {...rolesData} />
        <PriorityTimeManagement {...priorityData} />
        <WeightedTask {...taskData} />
        <WeeklyStructure {...weeklyStructureData} />
        <ShortTermGoal {...shortTermGoalData} />
        <MediumTermGoal {...mediumTermGoalData} />
        <LongTermGoal {...longTermGoalData} />
        <Roadmap {...roadmapData} />
        <LifeCoachingQuestionnaire />
      </div>
    </div>
  );
};

export default App;