"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { formatDistance } from 'date-fns';
import { ScrollArea } from "@/components/ui/scroll-area";
import { WorkoutPlan } from '@/types/workout';

export default function MyPlansPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [savedPlans, setSavedPlans] = useState<WorkoutPlan[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const plansJson = localStorage.getItem('savedPlans');
    if (plansJson) {
      setSavedPlans(JSON.parse(plansJson));
    }
  }, []);

  function loadPlan(plan: WorkoutPlan) {
    // Set as current plan
    localStorage.setItem('currentPlan', JSON.stringify(plan));

    toast({
      title: "Plan Loaded",
      description: "Your workout plan has been loaded.",
    });

    router.push('/workout-plan');
  }

  function deletePlan(id: string) {
    const updatedPlans = savedPlans.filter(plan => plan.id !== id);
    setSavedPlans(updatedPlans);
    localStorage.setItem('savedPlans', JSON.stringify(updatedPlans));

    toast({
      title: "Plan Deleted",
      description: "Your workout plan has been removed.",
    });
  }

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  if (savedPlans.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[60vh] mx-auto">
        <h2 className="text-2xl font-bold mb-2">No Saved Workout Plans</h2>
        <p className="text-muted-foreground mb-6">Create a plan to get started</p>
        <Button onClick={() => router.push('/create-plan')}>Create a Plan</Button>
      </div>
    );
  }

  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-col gap-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-3xl font-bold">My Saved Plans</h1>
          <p className="text-muted-foreground">
            Your collection of saved workout plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPlans.map((plan) => (
            <Card key={plan.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  {plan.days.length} day plan • {plan.level} level
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ScrollArea className="h-32">
                  <div className="space-y-2">
                    {plan.days.map((day, index) => (
                      <div key={index} className="text-sm">
                        <span className="font-medium">{day.name}</span>
                        <span className="text-muted-foreground"> - {day.exercises.length} exercises</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Goal:</span>
                    <span className="font-medium capitalize">{plan.goal.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Equipment:</span>
                    <span className="font-medium capitalize">{plan.equipment}</span>
                  </div>
                  {plan.savedAt && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Saved:</span>
                      <span className="font-medium">
                        {formatDistance(new Date(plan.savedAt), new Date(), { addSuffix: true })}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <div className="flex gap-2 w-full">
                  <Button variant="outline" className="flex-1" onClick={() => loadPlan(plan)}>
                    Load
                  </Button>
                  <Button variant="destructive" className="flex-1" onClick={() => deletePlan(plan.id!)}>
                    Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}