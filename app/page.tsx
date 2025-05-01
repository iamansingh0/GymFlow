import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { MainNav } from '@/components/main-nav';
import FitnessLevelCards from '@/components/fitness-plan-card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Your Personal <span className="text-primary">Gym Assistant</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create customized workout plans based on your goals, fitness level, and nutritional needs
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/create-plan">
                  <Button size="lg" className="w-full sm:w-auto animate-pulse">Get Started</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <FitnessLevelCards />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted mb-4">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How It Works
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Our intelligent system creates personalized workout plans based on your unique profile and goals.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">1</div>
                    <span>Enter your fitness profile and nutritional information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">2</div>
                    <span>Specify your fitness goals (weight loss, muscle gain, etc.)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">3</div>
                    <span>Choose your preferred workout split and available equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">4</div>
                    <span>Get your personalized workout plan instantly</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Features</h3>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Personalized workout plans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Detailed exercise information</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Nutritional guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Progress tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 ">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 GymFlow. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}