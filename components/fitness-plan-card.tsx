import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function FitnessLevelCards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg flex flex-col h-full">
            <div className="space-y-2 flex-grow">
              <h3 className="text-2xl font-bold">Beginner</h3>
              <p className="text-muted-foreground">
                Perfect for those just starting their fitness journey. Focus on proper form and building foundational strength.
              </p>
            </div>
            <Link href="/create-plan?level=beginner" className="mt-4 block">
              <Button className="w-full sm:w-auto">Start Plan</Button>
            </Link>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg flex flex-col h-full">
            <div className="space-y-2 flex-grow">
              <h3 className="text-2xl font-bold">Intermediate</h3>
              <p className="text-muted-foreground">
                Ready to push your limits and see greater results with more challenging workouts.
              </p>
            </div>
            <Link href="/create-plan?level=intermediate" className="mt-4 block">
              <Button className="w-full sm:w-auto">Start Plan</Button>
            </Link>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg flex flex-col h-full">
            <div className="space-y-2 flex-grow">
              <h3 className="text-2xl font-bold">Advanced</h3>
              <p className="text-muted-foreground">
                Intensive training regimens designed for experienced gym-goers seeking maximum results.
              </p>
            </div>
            <Link href="/create-plan?level=advanced" className="mt-4 block">
              <Button className="w-full sm:w-auto">Start Plan</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}