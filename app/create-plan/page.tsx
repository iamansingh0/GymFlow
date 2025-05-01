"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useQueryParams } from '@/hooks/use-query-params';
import { generatePlan } from '@/lib/plan-generator';

const formSchema = z.object({
  fitnessLevel: z.enum(["beginner", "intermediate", "advanced"]),
  fitnessGoal: z.enum(["lose-weight", "gain-muscle", "maintain", "improve-fitness"]),
  workoutDays: z.number().min(1).max(7),
  calorieIntake: z.number().min(1000).max(5000),
  proteinIntake: z.number().min(0).max(500),
  equipment: z.enum(["home", "gym", "minimal"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreatePlanPage() {
  const router = useRouter();
  const { getQueryParam } = useQueryParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fitnessLevel: (getQueryParam('level') as any) || 'beginner',
      fitnessGoal: 'improve-fitness',
      workoutDays: 3,
      calorieIntake: 2000,
      proteinIntake: 100,
      equipment: 'gym',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const plan = generatePlan(data);
      console.log(plan)

      // Store plan in localStorage (in a real app, this would go to a database)
      localStorage.setItem('currentPlan', JSON.stringify(plan));
      
      toast({
        title: "Plan Created!",
        description: "Your custom workout plan has been generated.",
      });
      
      router.push('/workout-plan');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem creating your plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container max-w-4xl py-12 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create Your Custom Workout Plan</CardTitle>
          <CardDescription>
            Fill out the form below to generate a personalized workout plan based on your goals and fitness level.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fitnessLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Fitness Level</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="beginner" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Beginner (0-6 months of training)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="intermediate" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Intermediate (6 months - 2 years of training)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="advanced" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Advanced (2+ years of training)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fitnessGoal"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Fitness Goal</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="lose-weight" />
                          </FormControl>
                          <FormLabel className="font-normal">Lose Weight</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="gain-muscle" />
                          </FormControl>
                          <FormLabel className="font-normal">Gain Muscle</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="maintain" />
                          </FormControl>
                          <FormLabel className="font-normal">Maintain Current Physique</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="improve-fitness" />
                          </FormControl>
                          <FormLabel className="font-normal">Improve Overall Fitness</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workoutDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workout Days Per Week: {field.value}</FormLabel>
                    <FormControl>
                      <Slider
                        min={1}
                        max={7}
                        step={1}
                        defaultValue={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                        className="pt-2"
                      />
                    </FormControl>
                    <FormDescription>
                      Select how many days per week you can commit to working out.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="calorieIntake"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Daily Calorie Intake (kcal)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormDescription>
                        Your approximate daily calorie consumption.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="proteinIntake"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Daily Protein Intake (g)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormDescription>
                        Your approximate daily protein consumption in grams.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="equipment"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Available Equipment</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="gym" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Full Gym (Access to all equipment)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="home" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Home Gym (Basic equipment like dumbbells, bands)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="minimal" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Minimal (Bodyweight exercises only)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Creating Plan..." : "Create Workout Plan"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" onClick={() => form.reset()}>Reset Form</Button>
          <Button variant="ghost" onClick={() => router.back()}>Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
}