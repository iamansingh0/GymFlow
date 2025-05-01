import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import WorkoutPlan from '@/models/workoutPlan';
import User from '@/models/user';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: 'Plan ID is required' }, { status: 400 });
    }

    // Find the workout plan by ID
    const plan = await WorkoutPlan.findById(id);

    if (!plan) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
    }

    return NextResponse.json(plan, { status: 200 });
  } catch (error) {
    console.error('Error fetching plan:', error);
    return NextResponse.json({ error: 'Failed to fetch the plan' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: 'Plan ID is required' }, { status: 400 });
    }

    // Find and delete the workout plan
    const deletedPlan = await WorkoutPlan.findByIdAndDelete(id);

    if (!deletedPlan) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
    }

    // Remove the plan from the user's savedPlans
    await User.findByIdAndUpdate(deletedPlan.user, {
      $pull: { savedPlans: id },
    });

    return NextResponse.json({ message: 'Plan deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete the plan' }, { status: 500 });
  }
}