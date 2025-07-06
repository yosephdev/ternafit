import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center text-gray-800">{t('privacy.hero.title')}</h1>
          <p className="text-center mt-4 text-lg max-w-2xl mx-auto text-gray-600">{t('privacy.hero.subtitle')}</p>
        </div>
      </section>

      {/* Main content container */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xl prose lg:prose-xl">
          <h2 className="text-2xl font-semibold text-gray-700">{t('privacy.intro.title')}</h2>
          <p className="mb-4">
            {t('privacy.intro.text1')}
          </p>
      <p className="mb-4">
        {t('privacy.intro.text2')}
      </p>
      <p className="mb-6">
        {t('privacy.intro.text3')}
      </p>

      <h2 className="text-2xl font-semibold mb-4">{t('privacy.definitions.title')}</h2>
      <h3 className="text-xl font-semibold mb-2">{t('privacy.definitions.interpretation.title')}</h3>
      <p className="mb-4">
        {t('privacy.definitions.interpretation.text')}
      </p>

      <h3 className="text-xl font-semibold mb-2">{t('privacy.definitions.definitions.title')}</h3>
      <p className="mb-4">{t('privacy.definitions.definitions.intro')}</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>{t('privacy.definitions.definitions.account').split(':')[0]}:</strong> {t('privacy.definitions.definitions.account').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.affiliate').split(':')[0]}:</strong> {t('privacy.definitions.definitions.affiliate').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.organization').split(':')[0]}:</strong> {t('privacy.definitions.definitions.organization').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.cookies').split(':')[0]}:</strong> {t('privacy.definitions.definitions.cookies').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.country').split(':')[0]}:</strong> {t('privacy.definitions.definitions.country').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.device').split(':')[0]}:</strong> {t('privacy.definitions.definitions.device').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.personalData').split(':')[0]}:</strong> {t('privacy.definitions.definitions.personalData').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.service').split(':')[0]}:</strong> {t('privacy.definitions.definitions.service').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.serviceProvider').split(':')[0]}:</strong> {t('privacy.definitions.definitions.serviceProvider').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.usageData').split(':')[0]}:</strong> {t('privacy.definitions.definitions.usageData').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.website').split(':')[0]}:</strong> {t('privacy.definitions.definitions.website').split(':')[1]}
        </li>
        <li>
          <strong>{t('privacy.definitions.definitions.you').split(':')[0]}:</strong> {t('privacy.definitions.definitions.you').split(':')[1]}
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataCollection.title')}</h2>
      <h3 className="text-xl font-semibold mb-2">{t('privacy.dataCollection.types.title')}</h3>
      <h4 className="text-lg font-semibold mb-2">{t('privacy.dataCollection.personalData.title')}</h4>
      <p className="mb-4">
        {t('privacy.dataCollection.personalData.text')}
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>{t('privacy.dataCollection.personalData.email')}</li>
        <li>{t('privacy.dataCollection.personalData.usageData')}</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">{t('privacy.dataCollection.usageData.title')}</h4>
      <p className="mb-4">{t('privacy.dataCollection.usageData.text1')}</p>
      <p className="mb-4">
        {t('privacy.dataCollection.usageData.text2')}
      </p>
      <p className="mb-4">
        {t('privacy.dataCollection.usageData.text3')}
      </p>
      <p className="mb-6">
        {t('privacy.dataCollection.usageData.text4')}
      </p>

      <h3 className="text-xl font-semibold mb-2">{t('privacy.trackingTechnologies.title')}</h3>
      <p className="mb-4">
        {t('privacy.trackingTechnologies.text1')}
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>{t('privacy.trackingTechnologies.cookies.title')}</strong> {t('privacy.trackingTechnologies.cookies.desc')}
        </li>
        <li>
          <strong>{t('privacy.trackingTechnologies.webBeacons.title')}</strong> {t('privacy.trackingTechnologies.webBeacons.desc')}
        </li>
      </ul>
      <p className="mb-4">
        {t('privacy.trackingTechnologies.text2')}
      </p>
      <p className="mb-4">
        {t('privacy.trackingTechnologies.text3')}
      </p>
      <ul className="list-disc list-inside mb-6 space-y-4">
        <li>
          <p><strong>{t('privacy.trackingTechnologies.necessaryCookies.title')}</strong></p>
          <p>{t('privacy.trackingTechnologies.necessaryCookies.type')}</p>
          <p>{t('privacy.trackingTechnologies.necessaryCookies.administeredBy')}</p>
          <p>
            {t('privacy.trackingTechnologies.necessaryCookies.purpose')}
          </p>
        </li>
        <li>
          <p><strong>{t('privacy.trackingTechnologies.policyAcceptanceCookies.title')}</strong></p>
          <p>{t('privacy.trackingTechnologies.policyAcceptanceCookies.type')}</p>
          <p>{t('privacy.trackingTechnologies.policyAcceptanceCookies.administeredBy')}</p>
          <p>{t('privacy.trackingTechnologies.policyAcceptanceCookies.purpose')}</p>
        </li>
        <li>
          <p><strong>{t('privacy.trackingTechnologies.functionalityCookies.title')}</strong></p>
          <p>{t('privacy.trackingTechnologies.functionalityCookies.type')}</p>
          <p>{t('privacy.trackingTechnologies.functionalityCookies.administeredBy')}</p>
          <p>
            {t('privacy.trackingTechnologies.functionalityCookies.purpose')}
          </p>
        </li>
      </ul>
      <p className="mb-6">
        {t('privacy.trackingTechnologies.text4')}
      </p>

      <h2 className="text-2xl font-semibold mb-4">{t('privacy.useOfPersonalData.title')}</h2>
      <p className="mb-4">{t('privacy.useOfPersonalData.text1')}</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>{t('privacy.useOfPersonalData.purpose1')}</li>
        <li>
          {t('privacy.useOfPersonalData.purpose2')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.purpose3')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.purpose4')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.purpose5')}
        </li>
        <li>{t('privacy.useOfPersonalData.purpose6')}</li>
        <li>
          {t('privacy.useOfPersonalData.purpose7')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.purpose8')}
        </li>
      </ul>
      <p className="mb-4">{t('privacy.useOfPersonalData.shareInfo.text1')}</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          {t('privacy.useOfPersonalData.shareInfo.situation1')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.shareInfo.situation2')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.shareInfo.situation3')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.shareInfo.situation4')}
        </li>
        <li>
          {t('privacy.useOfPersonalData.shareInfo.situation5')}
        </li>
        <li>{t('privacy.useOfPersonalData.shareInfo.situation6')}</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataRetention.title')}</h2>
      <p className="mb-4">
        {t('privacy.dataRetention.text1')}
      </p>
      <p className="mb-6">
        {t('privacy.dataRetention.text2')}
      </p>

      <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataTransfer.title')}</h2>
      <p className="mb-4">
        {t('privacy.dataTransfer.text1')}
      </p>
      <p className="mb-4">
        {t('privacy.dataTransfer.text2')}
      </p>
      <p className="mb-6">
        {t('privacy.dataTransfer.text3')}
      </p>

      <h2 className="text-2xl font-semibold mb-4">Delete Your Personal Data</h2>
      <p className="mb-4">
        You have the right to delete or request that We assist in deleting the Personal Data that We
        have collected about You.
      </p>
      <p className="mb-4">
        Our Service may give You the ability to delete certain information about You from within the
        Service.
      </p>
      <p className="mb-4">
        You may update, amend, or delete Your information at any time by signing in to Your Account, if
        you have one, and visiting the account settings section that allows you to manage Your personal
        information. You may also contact Us to request access to, correct, or delete any personal
        information that You have provided to Us.
      </p>
      <p className="mb-6">
        Please note, however, that We may need to retain certain information when we have a legal
        obligation or lawful basis to do so.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Personal Data</h2>
      <h3 className="text-xl font-semibold mb-2">Business Transactions</h3>
      <p className="mb-4">
        If the Organization is involved in a merger, acquisition, or asset sale, Your Personal Data
        may be transferred. We will provide notice before Your Personal Data is transferred and becomes
        subject to a different Privacy Policy.
      </p>

      <h3 className="text-xl font-semibold mb-2">Law Enforcement</h3>
      <p className="mb-4">
        Under certain circumstances, the Organization may be required to disclose Your Personal Data if
        required to do so by law or in response to valid requests by public authorities (e.g., a court
        or a government agency).
      </p>

      <h3 className="text-xl font-semibold mb-2">Other Legal Requirements</h3>
      <p className="mb-4">
        The Organization may disclose Your Personal Data in the good faith belief that such action is
        necessary to:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Organization</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Security of Your Personal Data</h2>
      <p className="mb-6">
        The security of Your Personal Data is important to Us, but remember that no method of
        transmission over the Internet, or method of electronic storage is 100% secure. While We
        strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee
        its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
      <p className="mb-4">
        Our Service does not address anyone under the age of 13. We do not knowingly collect
        personally identifiable information from anyone under the age of 13. If You are a parent or
        guardian and You are aware that Your child has provided Us with Personal Data, please contact
        Us. If We become aware that We have collected Personal Data from anyone under the age of 13
        without verification of parental consent, We take steps to remove that information from Our
        servers.
      </p>
      <p className="mb-6">
        If We need to rely on consent as a legal basis for processing Your information and Your country
        requires consent from a parent, We may require Your parent’s consent before We collect and use
        that information.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
      <p className="mb-4">
        Our Service may contain links to other websites that are not operated by Us. If You click on a
        third-party link, You will be directed to that third party’s site. We strongly advise You to
        review the Privacy Policy of every site You visit.
      </p>
      <p className="mb-6">
        We have no control over and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
      <p className="mb-4">
        We may update Our Privacy Policy from time to time. We will notify You of any changes by
        posting the new Privacy Policy on this page.
      </p>
      <p className="mb-4">
        We will let You know via email and/or a prominent notice on Our Service, prior to the change
        becoming effective and update the “Last updated” date at the top of this Privacy Policy.
      </p>
      <p className="mb-6">
        You are advised to review this Privacy Policy periodically for any changes. Changes to this
        Privacy Policy are effective when they are posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, You can contact us:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>By email: info@ternafit.org</li>
      </ul>
      </div>
    </div>    
    </div>
  );
};
export default PrivacyPolicyPage;
