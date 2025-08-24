import React, { useEffect, useRef } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// ENHANCED: Updated impact stats to reflect crisis context and urgency per Gemini recommendations
const impactStats = [
    { 
        label: "Children Supported with Nutrition & Education in Crisis Context", 
        value: "800+",
        context: "Providing essential meals and schooling when 8 million children are out of school regionally"
    },
    { 
        label: "Expectant Mothers Provided Critical Prenatal Care", 
        value: "3,000+",
        context: "Life-saving healthcare access amid collapsed health systems and rising malnutrition"
    },
    { 
        label: "Farming Households Empowered via Cooperative Support", 
        value: "500+",
        context: "Building food security when crop production has fallen to 10% of pre-war levels"
    },
    { 
        label: "Community Wells Constructed for Clean Water Access", 
        value: "15",
        context: "Essential infrastructure preventing disease outbreaks in displacement-affected areas"
    },
];

// MODIFIED: Since Ternafit was established in July 2024, a 2023 report is not possible.
// Added a placeholder for the upcoming 2025 report.
const annualReports = [
    { year: 2024, url: "/reports/ternafit-annual-report-2024.pdf" },
    { year: 2025, url: "#", status: "Coming Soon" },
];

const ImpactPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    // Prevent multiple map initializations
    if (mapRef.current.children.length > 0) return;
    
    // Create custom marker icon
    const customIcon = L.icon({
      iconUrl: '/images/marker-icon.png',
      iconSize: [25, 41], // size of the icon
      iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
      popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      shadowSize: [41, 41]
    });
    
    // Initialize the map
    const map = L.map(mapRef.current).setView([13.9, 39.0], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const projectSites = [
      { name: "Mekelle", lat: 13.4969, lng: 39.4769, projects: ["Regional coordination hub","Maternal health initiatives","Educational program oversight"] },
      { name: "Adigrat", lat: 14.277, lng: 39.460, projects: ["Clean water access projects (wells)","Support for local health clinics","Agricultural cooperatives support"] },
      { name: "Adwa", lat: 14.1667, lng: 38.8917, projects: ["Girls' Education Initiative","Scholarship & school supplies distribution","Community mentorship programs"] },
      { name: "Aksum (Axum)", lat: 14.128, lng: 38.718, projects: ["Cultural heritage preservation support","Economic empowerment for women","Youth development programs"] },
      { name: "Shire (Inda Selassie)", lat: 14.100, lng: 38.283, projects: ["Hub for western Tigray operations","Food security and resilience projects","Support for displaced families"] }
    ];
    projectSites.forEach(site => {
      const marker = L.marker([site.lat, site.lng], { icon: customIcon }).addTo(map);
      let popupContent = `<h3 style='color:#c05621;margin:0 0 10px;'>${site.name}</h3><p><strong>Key Project Areas:</strong></p><ul>`;
      site.projects.forEach(project => { popupContent += `<li>${project}</li>`; });
      popupContent += `</ul>`;
      marker.bindPopup(popupContent);
    });
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
        {/* MODIFIED: Updated introductory section to align with Gemini strategic recommendations */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Our Collective Impact</h1>
            <h2 className="text-2xl font-semibold text-terracotta mt-2">
                Achieved Through Our Partnership with Anenitigray Development Services (ADS)
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600 leading-relaxed">
                As a Swedish-based NGO, Ternafit provides strategic support to our implementing partner in Tigray, Anenitigray Development Services (ADS). 
                Against the backdrop of a severe humanitarian crisis where <strong>9 million people require food aid</strong> and crop production has fallen to just 10% of pre-war levels, 
                our partnership enables life-saving interventions on the ground. The funds we raise and strategic support we provide directly fuel the critical projects detailed below.
            </p>
            <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 max-w-3xl mx-auto">
                <p className="text-red-800 font-medium">
                    <strong>Crisis Context:</strong> With nearly 40% of Tigray's population suffering from extreme food insecurity and 1 million internally displaced persons living in dire conditions, 
                    every donation becomes a direct lifeline for families in desperate need.
                </p>
            </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            <div>
                <h2 className="text-xl font-semibold mb-4">Key Achievements by ADS (Supported by Ternafit)</h2>
                <p className="text-sm text-gray-600 mb-6 italic">
                    Direct response to verified humanitarian needs documented by UN agencies and FEWS NET
                </p>
                <ul className="space-y-4">
                    {impactStats.map((stat, i) => (
                        <li key={i} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-terracotta">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-terracotta mb-2">{stat.value}</span>
                                <span className="text-gray-800 font-medium mb-2">{stat.label}</span>
                                <span className="text-sm text-gray-600 italic">{stat.context}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Project Locations in Tigray</h2>
                <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ height: '400px', position: 'relative' }}>
                  <div ref={mapRef} id="ads-map" style={{ height: '100%', width: '100%' }} />
                </div>
            </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Transparency & Accountability</h2>
            <p className="text-center text-gray-600 mb-4">
                Our reports detail our fundraising activities in Sweden, operational costs, and the direct support provided to our partners.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800">
                    <strong>Local Partner Advantage:</strong> As a diaspora-led organization supporting local implementers, 
                    your donations avoid international overhead and reach communities directly through trusted, embedded partners who understand the context intimately.
                </p>
            </div>
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
};

export default ImpactPage;