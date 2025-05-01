import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import WorkoutPlan from '@/models/workoutPlan';

export async function POST(req: Request) {
  try {
    await connectDB();

    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Fetch the most recent workout plan for the user
    const plan = await WorkoutPlan.findOne({ user: userId }).sort({ createdAt: -1 });

    if (!plan) {
      return NextResponse.json({ error: 'No workout plan found' }, { status: 404 });
    }

    return NextResponse.json(plan, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch the workout plan' }, { status: 500 });
  }
}