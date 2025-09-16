import React from "react";

const TrainingEventPage = () => (
  <main className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-4">Upcoming Training: AI & Digital Literacy</h1>
    <p className="mb-2">Date: <strong>September 29, 2025</strong></p>
    <p className="mb-2">Organized by: <strong>Ternafit & ADS</strong></p>
    <p className="mb-2">Location: <strong>Google Meet (<a href='https://meet.google.com/bfv-gwny-jic' target='_blank' rel='noopener noreferrer' className='underline text-blue-600'>Join Meeting</a>)</strong></p>
    <div className="flex flex-col md:flex-row gap-6 my-6">
      <div className="flex-1">
        <img src="/images/AI & Digital Literacy Training Promo.png" alt="AI & Digital Literacy Training Poster" className="rounded-lg shadow-md mb-2" />
        <a href="/images/AI & Digital Literacy Training Promo.png" download className="text-sm underline text-blue-600">Download Training Poster</a>
      </div>
      <div className="flex-1">
        <img src="/images/google_meet_qr.png" alt="Google Meet QR Code" className="rounded-lg shadow-md mb-2" />
        <a href="https://meet.google.com/bfv-gwny-jic" target="_blank" rel="noopener noreferrer" className="text-sm underline text-blue-600">Join via QR Code</a>
      </div>
    </div>
    <div className="my-6">
      <img src="/images/AI & Digital Literacy Certificate.png" alt="Certificate Template" className="rounded-lg shadow-md mb-2" />
      <a href="/images/AI & Digital Literacy Certificate.png" download className="text-sm underline text-blue-600">Download Certificate Template (PNG)</a>
      <br />
      <a href="/images/Training Agenda_ AI & Digital Literacy for ADS Volunteers.pdf" download className="text-sm underline text-blue-600">Download Training Agenda (PDF)</a>
      <br />
    </div>
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-2">Event Highlights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Practical sessions on AI and digital tools</li>
        <li>Certificate of Completion for all participants</li>
        <li>Open to all interested ADS Volunteers</li>
      </ul>
      <p className="mb-2">For questions or special arrangements, please contact:</p>
      <p className="font-semibold">Yoseph Berhane, Ternafit</p>
    </section>
  </main>
);

export default TrainingEventPage;
