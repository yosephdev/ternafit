import React from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // Corrected import path

const TermsOfServicePage: React.FC = () => {
  const { t } = useLanguage(); // Simplified to just t for hero, existing content uses language variable if needed separately
  const lastUpdatedDate = useLanguage().language === 'sv' ? '2025-05-11' : 'August 18, 2024'; // Keep existing date logic if needed
  const organizationName = "Ternafit";
  const websiteUrl = "https://www.ternafit.org";
  const contactEmail = "info@ternafit.org";
  const countryGoverning = "Sweden";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center text-gray-800">{t('terms.hero.title')}</h1>
          <p className="text-center mt-4 text-lg max-w-2xl mx-auto text-gray-600">{t('terms.hero.subtitle')}</p>
        </div>
      </section>

      {/* Main content container for existing terms */}
      <div className="py-12 px-4 sm:px-6 lg:px-8"> {/* Outer container for padding */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xl prose lg:prose-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{t('terms.hero.title')}</h1> {/* Repeated title for within-content consistency */}
            <p className="text-sm text-gray-600">{t('common.lastUpdated')}: {lastUpdatedDate}</p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p className="mb-3">
              These Terms of Service ("Terms") constitute a legally binding agreement made between you,
              whether personally or on behalf of an entity (“you”) and {organizationName} (“we,” “us,” or
              “our”), concerning your access to and use of the {websiteUrl} website as well as any other
              media form, media channel, mobile website or mobile application related, linked, or otherwise
              connected thereto (collectively, the “Site”).
            </p>
            <p className="mb-3">
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all
              of these Terms. If you do not agree with all of these Terms, then you are expressly
              prohibited from using the Site and you must discontinue use immediately.
            </p>
            <p className="mb-3">
              Supplemental terms and conditions or documents that may be posted on the Site from time to
              time are hereby expressly incorporated herein by reference. We reserve the right, in our sole
              discretion, to make changes or modifications to these Terms at any time and for any reason.
              We will alert you about any changes by updating the “Last updated” date of these Terms, and
              you waive any right to receive specific notice of each such change. It is your responsibility
              to periodically review these Terms to stay informed of updates. You will be subject to, and
              will be deemed to have been made aware of and to have accepted, the changes in any revised
              Terms by your continued use of the Site after the date such revised Terms are posted.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property Rights</h2>
            <p className="mb-3">
              Unless otherwise indicated, the Site is our proprietary property and all source code,
              databases, functionality, software, website designs, audio, video, text, photographs, and
              graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and
              logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and
              are protected by copyright and trademark laws and various other intellectual property rights
              and unfair competition laws of {countryGoverning}, international copyright laws, and
              international conventions. The Content and the Marks are provided on the Site “AS IS” for
              your information and personal use only. Except as expressly provided in these Terms, no part
              of the Site and no Content or Marks may be copied, reproduced, aggregated, republished,
              uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose whatsoever, without our express
              prior written permission.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">3. User Representations</h2>
            <p className="mb-3">
              By using the Site, you represent and warrant that: (1) all registration information you
              submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of
              such information and promptly update such registration information as necessary; (3) you
              have the legal capacity and you agree to comply with these Terms; (4) you are not a minor in
              the jurisdiction in which you reside, or if a minor, you have received parental permission to
              use the Site; (5) you will not access the Site through automated or non-human means, whether
              through a bot, script or otherwise; (6) you will not use the Site for any illegal or
              unauthorized purpose; and (7) your use of the Site will not violate any applicable law or
              regulation.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">4. Prohibited Activities</h2>
            <p className="mb-3">
              You may not access or use the Site for any purpose other than that for which we make the Site
              available. The Site may not be used in connection with any commercial endeavors except those
              that are specifically endorsed or approved by us.
            </p>
            <p className="mb-3">As a user of the Site, you agree not to:</p>
            <ul className="list-disc list-inside ml-4 mb-3 space-y-1">
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
              <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
              <li>Use the Site to advertise or offer to sell goods and services.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
              {/* Add more specific prohibited activities relevant to Ternafit if any */}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">5. Term and Termination</h2>
            <p className="mb-3">
              These Terms shall remain in full force and effect while you use the Site. WITHOUT LIMITING
              ANY OTHER PROVISION OF THESE TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN
              IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION
              FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OR OF ANY
              APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR
              DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
              WARNING, IN OUR SOLE DISCRETION.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">6. Modifications and Interruptions</h2>
            <p className="mb-3">
              We reserve the right to change, modify, or remove the contents of the Site at any time or
              for any reason at our sole discretion without notice. However, we have no obligation to
              update any information on our Site. We also reserve the right to modify or discontinue all
              or part of the Site without notice at any time.
            </p>
            <p className="mb-3">
              We will not be liable to you or any third party for any modification, price change,
              suspension, or discontinuance of the Site.
            </p>
            <p className="mb-3">
              We cannot guarantee the Site will be available at all times. We may experience hardware,
              software, or other problems or need to perform maintenance related to the Site, resulting in
              interruptions, delays, or errors. We reserve the right to change, revise, update, suspend,
              discontinue, or otherwise modify the Site at any time or for any reason without notice to
              you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience
              caused by your inability to access or use the Site during any downtime or discontinuance of
              the Site.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">7. Governing Law</h2>
            <p className="mb-3">
              These Terms and your use of the Site are governed by and construed in accordance with the
              laws of {countryGoverning} applicable to agreements made and to be entirely performed within
              {countryGoverning}, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">8. Disclaimer</h2>
            <p className="mb-3 uppercase font-semibold">
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE
              AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
              DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
              ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES
              LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
              MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE,
              OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
              AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
              TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH
              MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
              OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
              SITE.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
            <p className="mb-3 uppercase font-semibold">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD
              PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
              YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">10. Indemnification</h2>
            <p className="mb-3">
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates,
              and all of our respective officers, agents, partners, and employees, from and against any
              loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and
              expenses, made by any third party due to or arising out of: (1) your use of the Site; (2)
              breach of these Terms; (3) any breach of your representations and warranties set forth in
              these Terms; (4) your violation of the rights of a third party, including but not limited to
              intellectual property rights; or (5) any overt harmful act toward any other user of the Site
              with whom you connected via the Site.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">11. Miscellaneous</h2>
            <p className="mb-3">
              These Terms and any policies or operating rules posted by us on the Site or in respect to the
              Site constitute the entire agreement and understanding between you and us. Our failure to
              exercise or enforce any right or provision of these Terms shall not operate as a waiver of
              such right or provision.
            </p>
            <p className="mb-3">
              If any provision or part of a provision of these Terms is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed severable from these Terms
              and does not affect the validity and enforceability of any remaining provisions.
            </p>
            <p className="mb-3">
              There is no joint venture, partnership, employment or agency relationship created between you
              and us as a result of these Terms or use of the Site. You agree that these Terms will not be
              construed against us by virtue of having drafted them.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
            <p className="mb-3">
              In order to resolve a complaint regarding the Site or to receive further information
              regarding use of the Site, please contact us at:
            </p>
            <p className="mb-3">
              {organizationName}<br />
              {/* Add Address if available, or remove this line */}
              {contactEmail}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
