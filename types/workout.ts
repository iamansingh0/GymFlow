export interface Exercise {
  name: string;
  muscleGroup: string;
  type: 'strength' | 'cardio' | 'flexibility';
  instructions: string;
  sets: number;
  reps: string;
  rest: number;
  weight: string;
  tips: string[];
  variations: string[];
  equipment: 'minimal' | 'home' | 'gym';
}

export interface Day {
  name: string;
  focus: string;
  exercises: Exercise[];
}

export interface Nutrition {
  calories: number;
  protein: number;
  recommendations: string[];
}

export interface WorkoutPlan {
  name: string;
  level: string;
  goal: string;
  days: Day[];
  equipment: string;
  nutrition: Nutrition;
  id?: string;
  savedAt?: string;
}