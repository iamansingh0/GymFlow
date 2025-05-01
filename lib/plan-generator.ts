import { WorkoutPlan, Day, Exercise } from '@/types/workout';

// Example exercise database
const exerciseDatabase = {
  beginner: {
    chest: [
      {
        name: "Push-Ups",
        muscleGroup: "Chest, Triceps, Shoulders",
        type: "strength",
        instructions: "Start in a plank position with hands slightly wider than shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.",
        tips: ["Keep your body in a straight line", "Engage your core", "Lower your chest all the way down"],
        variations: ["Knee Push-Ups", "Incline Push-Ups", "Wide Push-Ups"],
        equipment: "minimal"
      },
      {
        name: "Dumbbell Bench Press",
        muscleGroup: "Chest, Triceps, Shoulders",
        type: "strength",
        instructions: "Lie on a bench holding dumbbells at chest level. Press the weights up until your arms are extended, then lower back down with control.",
        tips: ["Keep wrists straight", "Don't arch your back excessively", "Control the weight throughout"],
        variations: ["Incline Dumbbell Press", "Decline Dumbbell Press", "Alternating Press"],
        equipment: "home"
      },
      {
        name: "Machine Chest Press",
        muscleGroup: "Chest, Triceps",
        type: "strength",
        instructions: "Sit at the chest press machine, grasp the handles and press forward until your arms are extended. Slowly return to starting position.",
        tips: ["Adjust the seat height properly", "Keep shoulders back", "Don't lock elbows at the top"],
        variations: ["Single Arm Press", "Narrow Grip Press", "Tempo Press"],
        equipment: "gym"
      }
    ],
    back: [
      {
        name: "Dumbbell Rows",
        muscleGroup: "Back, Biceps",
        type: "strength",
        instructions: "Place one knee and hand on a bench, with the other foot on the floor. Hold a dumbbell in your free hand, pull it up to your hip, then lower it with control.",
        tips: ["Keep your back flat", "Pull the weight toward your hip, not your chest", "Squeeze your shoulder blade at the top"],
        variations: ["Two-Arm Bent Over Row", "Supported Row", "Renegade Row"],
        equipment: "home"
      },
      {
        name: "Lat Pulldown",
        muscleGroup: "Back, Biceps",
        type: "strength",
        instructions: "Sit at the lat pulldown machine, grasp the bar with a wide grip. Pull the bar down to your upper chest, then slowly release back up.",
        tips: ["Keep chest up", "Pull with your elbows, not your hands", "Engage your lats throughout"],
        variations: ["Close Grip Pulldown", "Single Arm Pulldown", "V-Bar Pulldown"],
        equipment: "gym"
      }
    ],
    legs: [
      {
        name: "Bodyweight Squats",
        muscleGroup: "Quadriceps, Glutes, Hamstrings",
        type: "strength",
        instructions: "Stand with feet shoulder-width apart, lower your body as if sitting in a chair, then stand back up.",
        tips: ["Keep weight on heels", "Don't let knees collapse inward", "Aim for parallel depth"],
        variations: ["Sumo Squats", "Pulse Squats", "Jump Squats"],
        equipment: "minimal"
      },
      {
        name: "Leg Press",
        muscleGroup: "Quadriceps, Glutes, Hamstrings",
        type: "strength",
        instructions: "Sit on the leg press machine, feet shoulder-width apart on the platform. Lower the weight by bending your knees, then press back up.",
        tips: ["Don't lock knees at the top", "Keep lower back against the seat", "Control the weight throughout"],
        variations: ["Wide Stance Press", "Single Leg Press", "Calf Press"],
        equipment: "gym"
      }
    ],
    cardio: [
      {
        name: "Walking",
        muscleGroup: "Full Body",
        type: "cardio",
        instructions: "Walk at a brisk pace on a treadmill or outdoors, maintaining good posture.",
        tips: ["Swing arms naturally", "Take purposeful strides", "Maintain good posture"],
        variations: ["Incline Walking", "Interval Walking", "Outdoor Terrain"],
        equipment: "minimal"
      },
      {
        name: "Stationary Bike",
        muscleGroup: "Lower Body",
        type: "cardio",
        instructions: "Adjust the bike to your height, then pedal at a moderate intensity, adjusting resistance as needed.",
        tips: ["Adjust seat height properly", "Keep slight bend in knees at bottom of stroke", "Maintain good posture"],
        variations: ["Interval Cycling", "Hill Climbs", "Tempo Rides"],
        equipment: "gym"
      }
    ]
  },
  intermediate: {
    chest: [
      {
        name: "Barbell Bench Press",
        muscleGroup: "Chest, Triceps, Shoulders",
        type: "strength",
        instructions: "Lie on a bench, grip the barbell with hands slightly wider than shoulder-width apart. Lower the bar to your chest, then press back up.",
        tips: ["Keep wrists straight", "Plant feet firmly on the ground", "Keep glutes on the bench"],
        variations: ["Incline Bench Press", "Close Grip Bench Press", "Pause Bench Press"],
        equipment: "gym"
      },
      {
        name: "Incline Dumbbell Flyes",
        muscleGroup: "Upper Chest, Shoulders",
        type: "strength",
        instructions: "Lie on an incline bench holding dumbbells extended above chest. Lower weights out to sides in an arc motion, then bring them back up.",
        tips: ["Maintain a slight bend in elbows", "Focus on the stretch", "Control the weights throughout"],
        variations: ["Flat Flyes", "Decline Flyes", "Cable Flyes"],
        equipment: "home"
      }
    ],
    back: [
      {
        name: "Pull-Ups",
        muscleGroup: "Back, Biceps",
        type: "strength",
        instructions: "Hang from a pull-up bar with hands wider than shoulder-width apart. Pull your body up until your chin is over the bar, then lower with control.",
        tips: ["Engage your lats before pulling", "Keep shoulders down and back", "Control the descent"],
        variations: ["Chin-Ups", "Neutral Grip Pull-Ups", "Assisted Pull-Ups"],
        equipment: "home"
      },
      {
        name: "Cable Rows",
        muscleGroup: "Mid Back, Biceps",
        type: "strength",
        instructions: "Sit at a cable row machine, grab the attachment, and pull it toward your midsection while keeping your back straight.",
        tips: ["Keep chest up", "Pull with elbows", "Squeeze shoulder blades together"],
        variations: ["Wide Grip Rows", "Single Arm Rows", "Face Pulls"],
        equipment: "gym"
      }
    ],
    legs: [
      {
        name: "Barbell Squats",
        muscleGroup: "Quadriceps, Glutes, Hamstrings",
        type: "strength",
        instructions: "Place a barbell across your upper back, feet shoulder-width apart. Bend knees and hips to lower into a squat, then stand back up.",
        tips: ["Keep chest up", "Drive through heels", "Reach proper depth"],
        variations: ["Front Squats", "Box Squats", "Pause Squats"],
        equipment: "gym"
      },
      {
        name: "Romanian Deadlifts",
        muscleGroup: "Hamstrings, Glutes, Lower Back",
        type: "strength",
        instructions: "Hold a barbell in front of your thighs, hinge at the hips to lower the weight while keeping a slight bend in knees. Return to standing.",
        tips: ["Keep back flat", "Feel stretch in hamstrings", "Maintain neutral spine"],
        variations: ["Dumbbell RDL", "Single Leg RDL", "Snatch Grip RDL"],
        equipment: "home"
      }
    ],
    cardio: [
      {
        name: "Running",
        muscleGroup: "Full Body",
        type: "cardio",
        instructions: "Run at a moderate pace on a treadmill or outdoors, maintaining good form.",
        tips: ["Land midfoot", "Keep shoulders relaxed", "Maintain short, quick strides"],
        variations: ["Interval Sprints", "Hill Runs", "Tempo Runs"],
        equipment: "minimal"
      },
      {
        name: "Rowing Machine",
        muscleGroup: "Full Body",
        type: "cardio",
        instructions: "Sit on the rower, strap feet in, grasp the handle. Push with legs, then pull with arms, and reverse the sequence to return.",
        tips: ["Drive with legs first", "Keep arms straight until legs are extended", "Maintain good posture"],
        variations: ["Interval Rowing", "Long Steady Rows", "Power Strokes"],
        equipment: "gym"
      }
    ]
  },
  advanced: {
    chest: [
      {
        name: "Weighted Dips",
        muscleGroup: "Chest, Triceps, Shoulders",
        type: "strength",
        instructions: "Hold yourself between parallel bars with added weight, lower until your shoulders are below your elbows, then press back up.",
        tips: ["Lean forward for more chest emphasis", "Keep elbows close to body", "Control the descent"],
        variations: ["Ring Dips", "Bench Dips", "Tempo Dips"],
        equipment: "gym"
      },
      {
        name: "Incline Bench Press",
        muscleGroup: "Upper Chest, Shoulders, Triceps",
        type: "strength",
        instructions: "Lie on an incline bench, grip the barbell with hands slightly wider than shoulder-width. Lower to upper chest, then press up.",
        tips: ["Keep wrists straight", "Tuck elbows at 45 degrees", "Control the bar path"],
        variations: ["Incline Dumbbell Press", "Close Grip Incline Press", "Pause Reps"],
        equipment: "gym"
      }
    ],
    back: [
      {
        name: "Weighted Pull-Ups",
        muscleGroup: "Back, Biceps",
        type: "strength",
        instructions: "Attach weight to a belt, hang from a pull-up bar with hands wider than shoulder-width. Pull your body up until chin clears the bar.",
        tips: ["Engage core throughout", "Pull with elbows, not biceps", "Control the descent"],
        variations: ["Mixed Grip Pull-Ups", "L-Sit Pull-Ups", "Tempo Pull-Ups"],
        equipment: "gym"
      },
      {
        name: "Barbell Rows",
        muscleGroup: "Mid Back, Lats, Biceps",
        type: "strength",
        instructions: "Bend at hips with a barbell hanging in front of you. Pull the bar to your lower ribs while keeping back flat.",
        tips: ["Keep shoulders down", "Pull with elbows, not hands", "Maintain neutral spine"],
        variations: ["Pendlay Rows", "Meadows Rows", "Yates Rows"],
        equipment: "gym"
      }
    ],
    legs: [
      {
        name: "Bulgarian Split Squats",
        muscleGroup: "Quadriceps, Glutes, Hamstrings",
        type: "strength",
        instructions: "Stand with one foot on a bench behind you. Lower your back knee toward the floor, then push through front foot to stand.",
        tips: ["Keep front knee aligned with toes", "Stay upright", "Control the movement"],
        variations: ["Weighted Split Squats", "Elevated Front Foot", "Deficit Split Squats"],
        equipment: "home"
      },
      {
        name: "Barbell Deadlifts",
        muscleGroup: "Hamstrings, Glutes, Back",
        type: "strength",
        instructions: "Stand with feet hip-width apart, barbell over midfoot. Hinge at hips to grab the bar, then stand up by driving hips forward.",
        tips: ["Keep bar close to body", "Maintain neutral spine", "Drive through heels"],
        variations: ["Sumo Deadlifts", "Deficit Deadlifts", "Trap Bar Deadlifts"],
        equipment: "gym"
      }
    ],
    cardio: [
      {
        name: "HIIT Sprint Intervals",
        muscleGroup: "Full Body",
        type: "cardio",
        instructions: "Alternate between 30 seconds of maximum effort sprinting and 60-90 seconds of walking/light jogging recovery.",
        tips: ["Warm up thoroughly", "Focus on proper running form", "Maintain intensity during work periods"],
        variations: ["Hill Sprints", "Treadmill Intervals", "Track Workouts"],
        equipment: "minimal"
      },
      {
        name: "Assault Bike",
        muscleGroup: "Full Body",
        type: "cardio",
        instructions: "Sit on the assault bike, grasp the handles and place feet on pedals. Push and pull with both arms and legs simultaneously.",
        tips: ["Engage core throughout", "Use full range of motion", "Find sustainable rhythm for intervals"],
        variations: ["30-second max efforts", "Tabata intervals", "Endurance rides"],
        equipment: "gym"
      }
    ]
  }
};

// Function to generate a workout plan based on user preferences
export function generatePlan(userPreferences: any): WorkoutPlan {
  const { fitnessLevel, fitnessGoal, workoutDays, calorieIntake, proteinIntake, equipment } = userPreferences;
  
  const planName = getPlanName(fitnessLevel, fitnessGoal);
  const days = generateWorkoutDays(fitnessLevel, workoutDays, equipment);
  
  return {
    name: planName,
    level: fitnessLevel,
    goal: fitnessGoal,
    days: days,
    equipment: equipment,
    nutrition: {
      calories: calorieIntake,
      protein: proteinIntake,
      recommendations: getNutritionRecommendations(fitnessGoal, calorieIntake)
    }
  };
}

// Helper function to generate a plan name
function getPlanName(level: string, goal: string): string {
  const levelNames = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  };
  
  const goalNames = {
    'lose-weight': 'Fat Loss',
    'gain-muscle': 'Muscle Building',
    'maintain': 'Maintenance',
    'improve-fitness': 'Overall Fitness'
  };
  
  return `${levelNames[level as keyof typeof levelNames]} ${goalNames[goal as keyof typeof goalNames]} Plan`;
}

// Generate workout days based on user preferences
function generateWorkoutDays(level: string, numDays: number, userEquipment: string): Day[] {
  const days: Day[] = [];
  
  // Define split pattern based on number of days per week
  let splitPattern: string[] = [];
  
  if (numDays === 1) {
    splitPattern = ['fullbody'];
  } else if (numDays === 2) {
    splitPattern = ['upper', 'lower'];
  } else if (numDays === 3) {
    splitPattern = ['push', 'pull', 'legs'];
  } else if (numDays === 4) {
    splitPattern = ['chest+triceps', 'back+biceps', 'legs', 'shoulders+abs'];
  } else if (numDays === 5) {
    splitPattern = ['chest', 'back', 'legs', 'shoulders', 'arms'];
  } else if (numDays >= 6) {
    splitPattern = ['chest', 'back', 'legs', 'shoulders', 'arms', 'cardio'];
    if (numDays === 7) {
      splitPattern.push('rest');
    }
  }
  
  // Generate days and exercises
  for (let i = 0; i < numDays; i++) {
    const dayIndex = i % splitPattern.length;
    const focus = splitPattern[dayIndex];
    
    if (focus === 'rest') {
      days.push({
        name: `Day ${i + 1} - Rest`,
        focus: 'Recovery',
        exercises: []
      });
      continue;
    }
    
    const dayName = `Day ${i + 1} - ${focus.charAt(0).toUpperCase() + focus.slice(1)}`;
    
    // Generate exercises for the day
    const exercises = getExercisesForDay(level, focus, userEquipment);
    
    days.push({
      name: dayName,
      focus: focus.charAt(0).toUpperCase() + focus.slice(1).replace('+', ' & '),
      exercises
    });
  }
  
  return days;
}

// Get suitable exercises for a specific day
function getExercisesForDay(level: string, focus: string, userEquipment: string): Exercise[] {
  const exercises: Exercise[] = [];
  const exerciseDb = exerciseDatabase[level as keyof typeof exerciseDatabase];
  
  let muscleGroups: string[] = [];
  
  // Map focus to muscle groups
  if (focus === 'fullbody') {
    muscleGroups = ['chest', 'back', 'legs', 'cardio'];
  } else if (focus === 'upper') {
    muscleGroups = ['chest', 'back'];
  } else if (focus === 'lower') {
    muscleGroups = ['legs'];
  } else if (focus === 'push') {
    muscleGroups = ['chest'];
  } else if (focus === 'pull') {
    muscleGroups = ['back'];
  } else if (focus === 'legs') {
    muscleGroups = ['legs'];
  } else if (focus.includes('chest')) {
    muscleGroups = ['chest'];
  } else if (focus.includes('back')) {
    muscleGroups = ['back'];
  } else if (focus.includes('shoulders')) {
    muscleGroups = ['chest', 'back']; // Simplified since we don't have a dedicated shoulder group
  } else if (focus.includes('arms')) {
    muscleGroups = ['chest', 'back']; // Simplified for arms
  } else if (focus === 'cardio') {
    muscleGroups = ['cardio'];
  }
  
  // Get exercises for each muscle group
  for (const muscleGroup of muscleGroups) {
    if (exerciseDb[muscleGroup as keyof typeof exerciseDb]) {
      const availableExercises = exerciseDb[muscleGroup as keyof typeof exerciseDb].filter(ex => {
        // Filter by equipment level
        if (userEquipment === 'minimal') {
          return ex.equipment === 'minimal';
        } else if (userEquipment === 'home') {
          return ex.equipment === 'minimal' || ex.equipment === 'home';
        } else {
          return true; // For 'gym', all exercises are available
        }
      });
      
      // Select 1-3 exercises per muscle group
      const numExercises = muscleGroups.length > 2 ? 1 : (level === 'advanced' ? 3 : 2);
      
      for (let i = 0; i < Math.min(numExercises, availableExercises.length); i++) {
        const exercise = availableExercises[i];
        
        // Set reps and sets based on level and type
        let sets = 3;
        let reps = '8-12';
        let rest = 60;
        let weight = 'Moderate';
        
        if (level === 'beginner') {
          sets = exercise.type === 'cardio' ? 1 : 3;
          reps = exercise.type === 'cardio' ? '5 mins' : '10-15';
          rest = exercise.type === 'cardio' ? 60 : 45;
          weight = 'Light to Moderate';
        } else if (level === 'intermediate') {
          sets = exercise.type === 'cardio' ? 1 : 4;
          reps = exercise.type === 'cardio' ? '10-15 mins' : '8-12';
          rest = exercise.type === 'cardio' ? 90 : 60;
          weight = 'Moderate to Heavy';
        } else if (level === 'advanced') {
          sets = exercise.type === 'cardio' ? 1 : 5;
          reps = exercise.type === 'cardio' ? '20-30 mins' : '6-10';
          rest = exercise.type === 'cardio' ? 120 : 90;
          weight = 'Heavy';
        }
        
        // Add exercise to day
        exercises.push({
          ...exercise,
          sets,
          reps,
          rest,
          weight
        });
      }
    }
  }
  
  return exercises;
}

// Get nutrition recommendations based on goals
function getNutritionRecommendations(goal: string, calorieIntake: number): string[] {
  const recommendations = [];
  
  if (goal === 'lose-weight') {
    recommendations.push('Create a calorie deficit of 300-500 calories per day');
    recommendations.push('Increase protein intake to preserve muscle mass');
    recommendations.push('Focus on nutrient-dense, high-fiber foods to stay full');
    recommendations.push('Consider intermittent fasting approach');
  } else if (goal === 'gain-muscle') {
    recommendations.push('Eat in a caloric surplus of 250-500 calories per day');
    recommendations.push('Consume 1.6-2.2g of protein per kg of bodyweight');
    recommendations.push('Time carbohydrate intake around workouts');
    recommendations.push('Include sufficient healthy fats for hormone optimization');
  } else if (goal === 'maintain') {
    recommendations.push('Eat at maintenance calories');
    recommendations.push('Consume balanced macronutrients');
    recommendations.push('Focus on nutrient timing around workouts');
    recommendations.push('Emphasize food quality and variety');
  } else if (goal === 'improve-fitness') {
    recommendations.push('Consume adequate calories to fuel performance');
    recommendations.push('Focus on pre and post-workout nutrition');
    recommendations.push('Stay well hydrated throughout the day');
    recommendations.push('Consider carb cycling based on workout intensity');
  }
  
  return recommendations;
}