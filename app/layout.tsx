import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';
import { MainNav } from '@/components/main-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GymFlow - Personalized Workout Plans',
  description: 'Create personalized workout plans based on your fitness level, goals, and nutritional intake',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center w-full mx-auto">
                <MainNav />
              </div>
            </header>
            {children}
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}