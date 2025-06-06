
import React from 'react';

interface AuthorBioProps {
  author: string;
  language: string;
}

const AuthorBio = ({ author, language }: AuthorBioProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-serif font-semibold mb-4">
        {language === 'sv' ? 'Om författaren' : 'About the Author'}
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
              ? (language === 'sv' ? 'Grundare & Programdirektör' : 'Founder & Program Director')
              : (language === 'sv' ? 'Fältkoordinator' : 'Field Coordinator')}
          </p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        {author === 'Yoseph Berhane'
          ? (language === 'sv' 
            ? 'Yoseph har arbetat med humanitära insatser i Tigray i över ett decennium och leder Ternafits program för utbildning och påverkansarbete.'
            : 'Yoseph has worked in humanitarian response in Tigray for over a decade and leads Ternafit\'s education and advocacy programs.')
          : (language === 'sv'
            ? 'Med erfarenhet från lokala och internationella NGOs är författaren dedikerad till att dokumentera verkliga berättelser från samhällen påverkade av konflikten.'
            : 'With experience in local and international NGOs, the author is dedicated to documenting real stories from communities affected by the conflict.')}
      </p>
    </div>
  );
};

export default AuthorBio;
