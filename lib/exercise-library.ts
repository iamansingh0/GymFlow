import { Exercise } from '@/types/workout';

// Comprehensive exercise library for reference and search
export const exerciseLibrary: Exercise[] = [
  // Chest Exercises
  {
    name: "Push-Ups",
    muscleGroup: "Chest, Triceps, Shoulders",
    type: "strength",
    instructions: "Start in a plank position with hands slightly wider than shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.",
    sets: 3,
    reps: "10-15",
    rest: 60,
    weight: "Bodyweight",
    tips: ["Keep your body in a straight line", "Engage your core", "Lower your chest all the way down"],
    variations: ["Knee Push-Ups", "Incline Push-Ups", "Wide Push-Ups"],
    equipment: "minimal"
  },
  {
    name: "Dumbbell Bench Press",
    muscleGroup: "Chest, Triceps, Shoulders",
    type: "strength",
    instructions: "Lie on a bench holding dumbbells at chest level. Press the weights up until your arms are extended, then lower back down with control.",
    sets: 3,
    reps: "8-12",
    rest: 60,
    weight: "Moderate",
    tips: ["Keep wrists straight", "Don't arch your back excessively", "Control the weight throughout"],
    variations: ["Incline Dumbbell Press", "Decline Dumbbell Press", "Alternating Press"],
    equipment: "home"
  },
  {
    name: "Barbell Bench Press",
    muscleGroup: "Chest, Triceps, Shoulders",
    type: "strength",
    instructions: "Lie on a bench, grip the barbell with hands slightly wider than shoulder-width apart. Lower the bar to your chest, then press back up.",
    sets: 4,
    reps: "6-10",
    rest: 90,
    weight: "Heavy",
    tips: ["Keep wrists straight", "Plant feet firmly on the ground", "Keep glutes on the bench"],
    variations: ["Incline Bench Press", "Close Grip Bench Press", "Pause Bench Press"],
    equipment: "gym"
  },
  
  // Back Exercises
  {
    name: "Pull-Ups",
    muscleGroup: "Back, Biceps",
    type: "strength",
    instructions: "Hang from a pull-up bar with hands wider than shoulder-width apart. Pull your body up until your chin is over the bar, then lower with control.",
    sets: 3,
    reps: "6-10",
    rest: 90,
    weight: "Bodyweight",
    tips: ["Engage your lats before pulling", "Keep shoulders down and back", "Control the descent"],
    variations: ["Chin-Ups", "Neutral Grip Pull-Ups", "Assisted Pull-Ups"],
    equipment: "home"
  },
  {
    name: "Dumbbell Rows",
    muscleGroup: "Back, Biceps",
    type: "strength",
    instructions: "Place one knee and hand on a bench, with the other foot on the floor. Hold a dumbbell in your free hand, pull it up to your hip, then lower it with control.",
    sets: 3,
    reps: "8-12",
    rest: 60,
    weight: "Moderate",
    tips: ["Keep your back flat", "Pull the weight toward your hip, not your chest", "Squeeze your shoulder blade at the top"],
    variations: ["Two-Arm Bent Over Row", "Supported Row", "Renegade Row"],
    equipment: "home"
  },
  {
    name: "Lat Pulldown",
    muscleGroup: "Back, Biceps",
    type: "strength",
    instructions: "Sit at the lat pulldown machine, grasp the bar with a wide grip. Pull the bar down to your upper chest, then slowly release back up.",
    sets: 3,
    reps: "8-12",
    rest: 75,
    weight: "Moderate",
    tips: ["Keep chest up", "Pull with your elbows, not your hands", "Engage your lats throughout"],
    variations: ["Close Grip Pulldown", "Single Arm Pulldown", "V-Bar Pulldown"],
    equipment: "gym"
  },
  
  // Leg Exercises
  {
    name: "Bodyweight Squats",
    muscleGroup: "Quadriceps, Glutes, Hamstrings",
    type: "strength",
    instructions: "Stand with feet shoulder-width apart, lower your body as if sitting in a chair, then stand back up.",
    sets: 3,
    reps: "15-20",
    rest: 60,
    weight: "Bodyweight",
    tips: ["Keep weight on heels", "Don't let knees collapse inward", "Aim for parallel depth"],
    variations: ["Sumo Squats", "Pulse Squats", "Jump Squats"],
    equipment: "minimal"
  },
  {
    name: "Lunges",
    muscleGroup: "Quadriceps, Glutes, Hamstrings",
    type: "strength",
    instructions: "Stand upright, then step forward with one leg and lower your hips until both knees are bent at about 90 degrees. Return to starting position and repeat with other leg.",
    sets: 3,
    reps: "10-12 per leg",
    rest: 60,
    weight: "Bodyweight or Light",
    tips: ["Keep torso upright", "Step far enough forward", "Keep front knee aligned with toes"],
    variations: ["Reverse Lunges", "Walking Lunges", "Lateral Lunges"],
    equipment: "minimal"
  },
  {
    name: "Barbell Squats",
    muscleGroup: "Quadriceps, Glutes, Hamstrings",
    type: "strength",
    instructions: "Place a barbell across your upper back, feet shoulder-width apart. Bend knees and hips to lower into a squat, then stand back up.",
    sets: 4,
    reps: "6-10",
    rest: 120,
    weight: "Heavy",
    tips: ["Keep chest up", "Drive through heels", "Reach proper depth"],
    variations: ["Front Squats", "Box Squats", "Pause Squats"],
    equipment: "gym"
  },
  
  // Shoulder Exercises
  {
    name: "Dumbbell Shoulder Press",
    muscleGroup: "Shoulders, Triceps",
    type: "strength",
    instructions: "Sit or stand holding dumbbells at shoulder height. Press the weights upward until arms are extended, then lower with control.",
    sets: 3,
    reps: "8-12",
    rest: 60,
    weight: "Moderate",
    tips: ["Keep core engaged", "Don't arch lower back", "Fully extend arms at top"],
    variations: ["Seated Press", "Arnold Press", "Alternating Press"],
    equipment: "home"
  },
  {
    name: "Lateral Raises",
    muscleGroup: "Lateral Deltoids",
    type: "strength",
    instructions: "Stand holding dumbbells at your sides. Raise the weights out to the sides until arms are parallel to the floor, then lower with control.",
    sets: 3,
    reps: "10-15",
    rest: 60,
    weight: "Light",
    tips: ["Keep slight bend in elbows", "Raise with lateral deltoids, not traps", "Control the movement"],
    variations: ["Front Raises", "Bent-Over Raises", "Cable Raises"],
    equipment: "home"
  },
  
  // Arm Exercises
  {
    name: "Bicep Curls",
    muscleGroup: "Biceps",
    type: "strength",
    instructions: "Stand holding dumbbells at your sides, palms facing forward. Bend at the elbows to curl the weights toward your shoulders, then lower with control.",
    sets: 3,
    reps: "10-15",
    rest: 60,
    weight: "Moderate",
    tips: ["Keep elbows close to torso", "Don't swing the weights", "Fully extend arms at bottom"],
    variations: ["Hammer Curls", "Concentration Curls", "Preacher Curls"],
    equipment: "home"
  },
  {
    name: "Tricep Dips",
    muscleGroup: "Triceps",
    type: "strength",
    instructions: "Sit on the edge of a bench or chair, hands gripping the edge. Slide hips off the bench and lower body by bending elbows, then push back up.",
    sets: 3,
    reps: "10-15",
    rest: 60,
    weight: "Bodyweight",
    tips: ["Keep shoulders down", "Don't go too deep if you have shoulder issues", "Keep elbows pointed backward"],
    variations: ["Bench Dips", "Modified Dips", "Straight Bar Dips"],
    equipment: "minimal"
  },
  
  // Core Exercises
  {
    name: "Plank",
    muscleGroup: "Core, Shoulders, Back",
    type: "strength",
    instructions: "Start in a push-up position but with forearms on the ground. Hold the position with body in a straight line from head to heels.",
    sets: 3,
    reps: "30-60 seconds",
    rest: 60,
    weight: "Bodyweight",
    tips: ["Don't let hips sag", "Don't hold breath", "Engage glutes and quads"],
    variations: ["Side Plank", "Plank Shoulder Taps", "Up-Down Plank"],
    equipment: "minimal"
  },
  {
    name: "Russian Twists",
    muscleGroup: "Obliques, Core",
    type: "strength",
    instructions: "Sit on the floor with knees bent, feet elevated. Lean back slightly, then twist torso to touch the ground on each side.",
    sets: 3,
    reps: "20-30 total",
    rest: 60,
    weight: "Bodyweight or Light",
    tips: ["Keep chest up", "Rotate from waist", "Control the movement"],
    variations: ["Weighted Russian Twists", "Feet-Down Variation", "Medicine Ball Twists"],
    equipment: "minimal"
  },
  
  // Cardio Exercises
  {
    name: "Running",
    muscleGroup: "Full Body",
    type: "cardio",
    instructions: "Run at a moderate pace on a treadmill or outdoors, maintaining good form.",
    sets: 1,
    reps: "20-30 minutes",
    rest: 0,
    weight: "N/A",
    tips: ["Land midfoot", "Keep shoulders relaxed", "Maintain short, quick strides"],
    variations: ["Interval Sprints", "Hill Runs", "Tempo Runs"],
    equipment: "minimal"
  },
  {
    name: "Jumping Jacks",
    muscleGroup: "Full Body",
    type: "cardio",
    instructions: "Stand with feet together and arms at sides. Jump while spreading legs and raising arms, then return to starting position.",
    sets: 3,
    reps: "30-60 seconds",
    rest: 30,
    weight: "Bodyweight",
    tips: ["Land softly", "Keep core engaged", "Maintain rhythm"],
    variations: ["Cross Jacks", "Star Jumps", "Low-Impact Jacks"],
    equipment: "minimal"
  }
];