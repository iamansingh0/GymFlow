"use client";

import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Exercise } from '@/types/workout';

interface ExerciseCardProps {
  exercise: Exercise;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  const searchExercise = () => {
    const searchTerm = encodeURIComponent(`${exercise.name}`);
    window.open(`https://www.google.com/search?q=${searchTerm}`, '_blank');
  };
  
  return (
    <Card className={`transition-all duration-200 ${expanded ? 'border-primary/50' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{exercise.name}</CardTitle>
            <CardDescription className="mt-1">{exercise.muscleGroup}</CardDescription>
          </div>
          <Badge variant={exercise.type === 'strength' ? 'default' : 'outline'}>
            {exercise.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 text-sm">
          <div className="space-y-1">
            <p className="text-muted-foreground">Sets</p>
            <p className="font-medium">{exercise.sets}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Reps</p>
            <p className="font-medium">{exercise.reps}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Rest</p>
            <p className="font-medium">{exercise.rest}s</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Weight</p>
            <p className="font-medium">{exercise.weight}</p>
          </div>
        </div>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t">
            <h4 className="font-medium mb-2">Instructions</h4>
            <p className="text-sm text-muted-foreground mb-4">{exercise.instructions}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium mb-1">Tips</h5>
                <ul className="list-disc list-inside text-muted-foreground">
                  {exercise.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-1">Variations</h5>
                <ul className="list-disc list-inside text-muted-foreground">
                  {exercise.variations.map((variation, index) => (
                    <li key={index}>{variation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)}
          className="gap-1"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span>Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span>More</span>
            </>
          )}
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={searchExercise}
          className="gap-1"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Search</span>
        </Button>
      </CardFooter>
    </Card>
  );
}