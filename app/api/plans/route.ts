import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import WorkoutPlan from '@/models/workoutPlan';
import User from '@/models/user';

export async function POST(req: Request) {
  try {
    await connectDB();

    const { userId, ...planData } = await req.json();
    console.log('user: ', userId)

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Create and save the workout plan
    const newPlan = await WorkoutPlan.create({ ...planData, user: userId });

    // Update the user's savedPlans
    await User.findByIdAndUpdate(userId, {
      $push: { savedPlans: newPlan._id },
    });

    return NextResponse.json(newPlan, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save the plan' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const userId = req.headers.get('Authorization')?.split(' ')[1]; // Extract user ID from the Authorization header

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Fetch all workout plans for the user
    const plans = await WorkoutPlan.find({ user: userId });

    return NextResponse.json(plans, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch plans' }, { status: 500 });
  }
}