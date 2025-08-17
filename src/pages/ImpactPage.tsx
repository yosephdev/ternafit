import React from "react";

// MODIFIED: Data now reflects the specific project areas of your partner,
// Anenitigray Development Services (ADS). Using "+" indicates ongoing growth.
const impactStats = [
    { label: "Girls Supported with Educational Materials & Scholarships", value: "800+" },
    { label: "Expectant Mothers Provided with Prenatal Care", value: "3,000+" },
    { label: "Farming Households Empowered via Cooperative Support", value: "500+" },
    { label: "New Community Wells Constructed for Clean Water Access", value: "15" },
];

// MODIFIED: Since Ternafit was established in July 2024, a 2023 report is not possible.
// Added a placeholder for the upcoming 2025 report.
const annualReports = [
    { year: 2024, url: "/reports/ternafit-annual-report-2024.pdf" },
    { year: 2025, url: "#", status: "Coming Soon" },
];

const ImpactPage = () => (
    <div className="container mx-auto py-12 px-4">
        {/* MODIFIED: Added a title and introductory paragraph to explain the partnership model. 
            This is VITAL for donor transparency and trust. */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Our Collective Impact</h1>
            <h2 className="text-2xl font-semibold text-terracotta mt-2">
                Achieved Through Our Partnership with Anenitigray Development Services (ADS)
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
                As a Swedish-based NGO, Ternafit is proud to support the vital, on-the-ground work of our implementing partner in Tigray, ADS. 
                The funds we raise and the support we provide directly enable the impactful projects and outcomes detailed below. 
                Your donation to Ternafit fuels these life-changing results.
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            <div>
                <h2 className="text-xl font-semibold mb-4">Key Achievements by ADS (Supported by Ternafit)</h2>
                <ul className="space-y-4">
                    {impactStats.map((stat, i) => (
                        <li key={i} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <span className="text-3xl font-bold text-terracotta">{stat.value}</span>
                            <span className="mt-1 text-gray-700">{stat.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Project Locations in Tigray</h2>
                {/* MODIFIED: Placeholder text is now more specific to the partner. */}
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-500 text-center p-4">
                    Interactive Map of Anenitigray Development Services' Project Sites<br/>(Coming Soon)
                </div>
            </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Transparency & Accountability</h2>
            <p className="text-center text-gray-600 mb-6">
                Our reports detail our fundraising activities in Sweden, operational costs, and the direct support provided to our partners.
            </p>
            <ul className="space-y-3 text-center">
                {annualReports.map((report, i) => (
                    <li key={i}>
                        {report.status === "Coming Soon" ? (
                            <span className="text-gray-500">
                                Ternafit Annual Report {report.year} (In Progress)
                            </span>
                        ) : (
                            <a 
                                href={report.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-terracotta underline font-medium hover:text-terracotta-dark"
                            >
                                Download Ternafit Annual Report {report.year}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default ImpactPage;