import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react'; // Using lucide-react for icons, common with ShadCN
import { useLanguage } from '@/contexts/LanguageContext';

const DonationSuccessPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-md">
        <CardHeader className="items-center text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <CardTitle className="text-2xl font-bold">{t('donate.success.title')}</CardTitle>
          <CardDescription>{t('donate.success.description')}</CardDescription>
        </CardHeader>
        {/* Removed CardContent that displayed sessionId */}
        <CardFooter className="flex justify-center pt-6"> {/* Added pt-6 for spacing */}
          <Button asChild>
            <Link to="/">{t('donate.success.returnHome')}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonationSuccessPage;
