import React from 'react';
import { AlertTriangle, Users, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CrisisUpdate = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">
              Tigray Crisis: The Situation Today
            </h2>
            <p className="text-red-700 text-lg">
              Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-red-600">5.4M</div>
              <div className="text-sm text-gray-600">People Need Aid</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Heart className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-600">2.1M</div>
              <div className="text-sm text-gray-600">Children at Risk</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Zap className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600">89%</div>
              <div className="text-sm text-gray-600">Lack Basic Services</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-600">URGENT</div>
              <div className="text-sm text-gray-600">Action Needed</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4">Current Challenges:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Limited access to healthcare and medical supplies</li>
              <li>• Disrupted education for over 1.7 million children</li>
              <li>• Food insecurity affecting 89% of the population</li>
              <li>• Damaged infrastructure limiting aid delivery</li>
              <li>• Ongoing need for psychosocial support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisUpdate;