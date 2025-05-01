import mongoose, { Document, model, Schema } from 'mongoose';
import { models } from 'mongoose';

// Exercise sub-schema
const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  muscleGroup: { type: String, required: true },
  type: { type: String, required: true },
  instructions: { type: String, required: true },
  tips: [{ type: String }],
  variations: [{ type: String }],
  equipment: {
    type: String,
    enum: ['minimal', 'home', 'gym'],
    required: true
  },
  sets: { type: Number, required: true },
  reps: { type: String, required: true },
  rest: { type: Number, required: true },
  weight: { type: String, required: true }
});

// Workout day sub-schema
const WorkoutDaySchema = new Schema({
  name: { type: String, required: true },
  focus: { type: String, required: true },
  exercises: [ExerciseSchema]
});

// Nutrition sub-schema
const NutritionSchema = new Schema({
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  recommendations: [{ type: String }]
});

// Main workout plan schema
const WorkoutPlanSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: { type: String, required: true },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true
  },
  goal: { type: String, required: true },
  days: [WorkoutDaySchema],
  equipment: {
    type: String,
    enum: ['minimal', 'home', 'gym'],
    required: true
  },
  nutrition: NutritionSchema,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to update the 'updatedAt' field
WorkoutPlanSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Interface for WorkoutPlan document
export interface IWorkoutPlan extends Document {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  goal: string;
  days: Array<{
    name: string;
    focus: string;
    exercises: Array<{
      name: string;
      muscleGroup: string;
      type: string;
      instructions: string;
      tips: string[];
      variations: string[];
      equipment: 'minimal' | 'home' | 'gym';
      sets: number;
      reps: string;
      rest: number;
      weight: string;
    }>;
  }>;
  equipment: 'minimal' | 'home' | 'gym';
  nutrition: {
    calories: number;
    protein: number;
    recommendations: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

// Create and export the model
const WorkoutPlan = models.WorkoutPlan || model('WorkoutPlan', WorkoutPlanSchema);
export default WorkoutPlan;