export interface Activity {
  activity_name: string;
  impact: number;
}

export interface Step {
  step_description: string;
  time_estimate_hours: number;
}

export interface Milestone {
  milestone_name: string;
  due_date: string;
}

export interface Strategy {
  strategy_name: string;
  time_frame_years: number;
}

export interface Task {
  task_name: string;
  due_date: string;
}

export interface Objective {
  objective_name: string;
  due_date: string;
  strategies: {
    strategy_name: string;
    tasks: Task[];
  }[];
}