
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

interface AuthorBioProps {
  author: string;
}

const AuthorBio = ({ author }: AuthorBioProps) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-serif font-semibold mb-4">
        {t('authorBio.title')}
      </h3>
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-muted rounded-full overflow-hidden mr-4">
          <img 
            src={`/images/team/${author === 'Yoseph Berhane' ? 'yoseph.jpg' : 'julian.jpg'}`} 
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-muted-foreground">
            {author === 'Yoseph Berhane' 
              ? t('authorBio.founderRole')
              : t('authorBio.fieldCoordinatorRole')}
          </p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        {author === 'Yoseph Berhane'
          ? t('authorBio.yosephBio')
          : t('authorBio.genericBio')}
      </p>
    </div>
  );
};

export default AuthorBio;
