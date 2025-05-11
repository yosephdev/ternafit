import React from 'react';
import { Link } from 'react-router-dom'; // Removed useSearchParams as sessionId is not displayed
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { XCircle } from 'lucide-react'; // Using XCircle for cancellation

const DonationCancelPage: React.FC = () => {
  // const [searchParams] = useSearchParams(); // Not needed if session_id is not displayed
  // const sessionId = searchParams.get('session_id');

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-md">
        <CardHeader className="items-center text-center">
          <XCircle className="w-16 h-16 text-red-500 mb-4" />
          <CardTitle className="text-2xl font-bold">Donation Cancelled</CardTitle>
          <CardDescription>
            Your donation process was cancelled. You have not been charged.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">
            If you encountered any issues or have questions, please feel free to contact us.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <Button asChild variant="outline">
            <Link to="/donate">Try Donating Again</Link>
          </Button>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonationCancelPage;
