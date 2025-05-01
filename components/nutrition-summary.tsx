"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface NutritionSummaryProps {
  calories: number;
  protein: number;
  goal: string;
}

export function NutritionSummary({ calories, protein, goal }: NutritionSummaryProps) {
  // Calculate macros
  const proteinCalories = protein * 4;
  const fatCalories = calories * 0.25; // Example: 25% of calories from fat
  const carbCalories = calories - proteinCalories - fatCalories;

  // Create data for pie chart
  const data = [
    { name: 'Protein', value: Math.round(proteinCalories / calories * 100) },
    { name: 'Carbs', value: Math.round(carbCalories / calories * 100) },
    { name: 'Fats', value: Math.round(fatCalories / calories * 100) },
  ];

  // Define colors for chart segments
  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

  return (
    <div className="pt-2">
      <h3 className="font-medium mb-3">Nutrition Summary</h3>
      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <div className="space-y-1">
          <p className="text-muted-foreground">Daily Calories</p>
          <p className="font-medium">{calories} kcal</p>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground">Daily Protein</p>
          <p className="font-medium">{protein}g</p>
        </div>
      </div>
      
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-xs text-muted-foreground mt-2">
        <p>Recommended macros for {goal.replace('-', ' ')}</p>
      </div>
    </div>
  );
}