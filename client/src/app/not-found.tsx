"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HouseIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  Lightning,
} from "@phosphor-icons/react";
export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4'>
      <div className='max-w-2xl mx-auto text-center space-y-8'>
        {/* 404 Illustration */}
        <div className='relative'>
          <div className='text-9xl md:text-[12rem] font-bold text-primary/20 dark:text-primary/10 select-none'>
            404
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-primary/10 dark:bg-primary/5 rounded-full p-6 backdrop-blur-sm'>
              <MagnifyingGlassIcon className='w-16 h-16 text-primary animate-pulse' />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
            Page Not Found
          </h1>
          <p className='text-xl text-muted-foreground max-w-md mx-auto'>
            Oops! The page you're looking for seems to have wandered off into
            the digital void.
          </p>
        </div>

        {/* Action Cards */}
        <div className='grid md:grid-cols-2 gap-4 mt-8'>
          <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20'>
            <CardContent className='p-6 text-center space-y-4'>
              <div className='bg-primary/10 dark:bg-primary/5 rounded-full w-12 h-12 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform'>
                <HouseIcon className='w-6 h-6 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>Go Home</h3>
                <p className='text-sm text-muted-foreground'>
                  Return to the main page
                </p>
              </div>
              <Button
                asChild
                className='w-full'>
                <Link href='/'>
                  <HouseIcon className='w-4 h-4 mr-2' />
                  Take Me Home
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20'>
            <CardContent className='p-6 text-center space-y-4'>
              <div className='bg-primary/10 dark:bg-primary/5 rounded-full w-12 h-12 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform'>
                <ArrowLeftIcon className='w-6 h-6 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>Go Back</h3>
                <p className='text-sm text-muted-foreground'>
                  Return to previous page
                </p>
              </div>
              <Button
                variant='outline'
                className='w-full'
                onClick={() => window.history.back()}>
                <ArrowLeftIcon className='w-4 h-4 mr-2' />
                Go Back
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <Card className='bg-muted/30 border-dashed'>
          <CardContent className='p-6'>
            <div className='flex items-center justify-center space-x-2 mb-4'>
              <Lightning className='w-5 h-5 text-primary' />
              <span className='font-medium'>Need Help?</span>
            </div>
            <p className='text-sm text-muted-foreground mb-4'>
              If you believe this is an error, please check the URL or contact
              support.
            </p>
            <div className='flex flex-wrap gap-2 justify-center'>
              <Button
                variant='ghost'
                size='sm'
                asChild>
                <Link href='/contact'>Contact Support</Link>
              </Button>
              <Button
                variant='ghost'
                size='sm'
                asChild>
                <Link href='/help'>Help Center</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className='text-sm text-muted-foreground'>
          <p>Error Code: 404 | Page Not Found</p>
        </div>
      </div>
    </div>
  );
}
