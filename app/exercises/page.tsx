"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from 'lucide-react';
import { exerciseLibrary } from '@/lib/exercise-library';

export default function ExercisesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredExercises = exerciseLibrary.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         exercise.muscleGroup.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || 
                       (activeTab === 'strength' && exercise.type === 'strength') ||
                       (activeTab === 'cardio' && exercise.type === 'cardio') ||
                       (activeTab === 'gym' && exercise.equipment === 'gym') ||
                       (activeTab === 'home' && exercise.equipment === 'home') ||
                       (activeTab === 'minimal' && exercise.equipment === 'minimal');
    
    return matchesSearch && matchesTab;
  });
  
  function searchExercise(name: string) {
    const searchTerm = encodeURIComponent(`${name}`);
    window.open(`https://www.google.com/search?q=${searchTerm}`, '_blank');
  }
  
  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Exercise Library</h1>
          <p className="text-muted-foreground">
            Browse our collection of exercises with detailed instructions
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:max-w-sm"
          />
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full md:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="cardio">Cardio</TabsTrigger>
              <TabsTrigger value="gym">Gym</TabsTrigger>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="minimal">Minimal</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.length > 0 ? (
            filteredExercises.map((exercise, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{exercise.name}</CardTitle>
                    <Button variant="ghost" size="icon" onClick={() => searchExercise(exercise.name)}>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize">
                      {exercise.type}
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize">
                      {exercise.equipment}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm font-medium">Target Muscles</p>
                  <p className="text-sm text-muted-foreground mb-4">{exercise.muscleGroup}</p>
                  
                  <p className="text-sm font-medium">Instructions</p>
                  <p className="text-sm text-muted-foreground mb-4">{exercise.instructions}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Tips</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {exercise.tips.slice(0, 2).map((tip, i) => (
                          <li key={i} className="text-xs">{tip}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Variations</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {exercise.variations.slice(0, 2).map((variation, i) => (
                          <li key={i} className="text-xs">{variation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <p className="text-xl font-semibold mb-2">No exercises found</p>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}