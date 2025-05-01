"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { WorkoutPlan } from '@/types/workout';
import { ExerciseCard } from '@/components/exercise-card';
import { NutritionSummary } from '@/components/nutrition-summary';

export default function WorkoutPlanPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [selectedDay, setSelectedDay] = useState("day1");
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    const storedPlan = localStorage.getItem('currentPlan');
    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    } else {
      // No plan exists, redirect to create plan page
      router.push('/create-plan');
    }
  }, [router]);

  function savePlan() {
    if (!plan) return;
    
    // Get existing saved plans
    const savedPlansJson = localStorage.getItem('savedPlans');
    const savedPlans = savedPlansJson ? JSON.parse(savedPlansJson) : [];
    
    // Add current plan with timestamp
    const planToSave = {
      ...plan,
      id: Date.now().toString(),
      savedAt: new Date().toISOString()
    };
    
    savedPlans.push(planToSave);
    
    // Save updated plans list
    localStorage.setItem('savedPlans', JSON.stringify(savedPlans));
    
    toast({
      title: "Plan Saved",
      description: "Your workout plan has been saved to your collection.",
    });
  }

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  if (!plan) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[60vh] mx-auto">
        <h2 className="text-2xl font-bold mb-2">No Active Workout Plan</h2>
        <p className="text-muted-foreground mb-6">Create a plan to get started</p>
        <Button onClick={() => router.push('/create-plan')}>Create a Plan</Button>
      </div>
    );
  }

  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className='px-4 sm:px-0'>
            <h1 className="text-3xl font-bold">{plan.name}</h1>
            <p className="text-muted-foreground">
              {plan.days.length} day plan focused on {plan.goal}
            </p>
          </div>
          <div className="flex gap-2 px-4 sm:px-0">
            <Button variant="outline" onClick={() => router.push('/create-plan')}>
              Edit Plan
            </Button>
            <Button onClick={savePlan}>Save Plan</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-0">
          <div className="lg:col-span-3">
            <Tabs defaultValue={selectedDay} onValueChange={setSelectedDay} className="w-full">
              <div className="overflow-x-auto pb-2">
                <TabsList className="mb-4 inline-flex w-auto">
                  {plan.days.map((day, index) => (
                    <TabsTrigger key={`day${index + 1}`} value={`day${index + 1}`}>
                      {day.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {plan.days.map((day, dayIndex) => (
                <TabsContent key={`day${dayIndex + 1}`} value={`day${dayIndex + 1}`} className="space-y-4 px-4 sm:px-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{day.name}</h2>
                      <p className="text-muted-foreground">{day.focus}</p>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {day.exercises.length} exercises
                    </Badge>
                  </div>
                  
                  <div className="grid gap-4">
                    {day.exercises.map((exercise, exIndex) => (
                      <ExerciseCard 
                        key={`${dayIndex}-${exIndex}`}
                        exercise={exercise}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Plan Summary</CardTitle>
                <CardDescription>Your workout and nutrition details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Level</p>
                    <p className="font-medium capitalize">{plan.level}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Goal</p>
                    <p className="font-medium capitalize">{plan.goal.replace('-', ' ')}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Equipment</p>
                    <p className="font-medium capitalize">{plan.equipment}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Days/Week</p>
                    <p className="font-medium">{plan.days.length}</p>
                  </div>
                </div>
                
                <NutritionSummary 
                  calories={plan.nutrition.calories}
                  protein={plan.nutrition.protein}
                  goal={plan.goal}
                />
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Nutrition Tips</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Nutrition Recommendations</DialogTitle>
                      <DialogDescription>
                        Based on your fitness goals and current intake
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <h4 className="font-semibold">Macronutrient Breakdown</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Protein: {plan.nutrition.protein}g ({Math.round(plan.nutrition.protein * 4 / plan.nutrition.calories * 100)}% of calories)</li>
                        <li>Carbs: {Math.round((plan.nutrition.calories * 0.5) / 4)}g (50% of calories)</li>
                        <li>Fats: {Math.round((plan.nutrition.calories * 0.25) / 9)}g (25% of calories)</li>
                      </ul>
                      
                      <h4 className="font-semibold">Tips for {plan.goal.replace('-', ' ')}</h4>
                      {plan.goal === 'lose-weight' && (
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Focus on high-protein foods to preserve muscle mass</li>
                          <li>Prioritize whole foods and fiber to stay full longer</li>
                          <li>Consider intermittent fasting if it suits your schedule</li>
                          <li>Stay hydrated - aim for 3-4 liters of water daily</li>
                        </ul>
                      )}
                      {plan.goal === 'gain-muscle' && (
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Eat in a caloric surplus of 300-500 calories</li>
                          <li>Consume protein frequently throughout the day</li>
                          <li>Focus on nutrient-dense carbs around workouts</li>
                          <li>Include healthy fats for hormone optimization</li>
                        </ul>
                      )}
                      {plan.goal === 'improve-fitness' && (
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Balance macronutrients for steady energy</li>
                          <li>Time carbs around your workout sessions</li>
                          <li>Stay consistent with meal timing</li>
                          <li>Focus on recovery nutrition after workouts</li>
                        </ul>
                      )}
                    </div>
                    <DialogFooter>
                      <Button type="button">Save Recommendations</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}