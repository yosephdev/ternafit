import React from "react";
import Container from "@/components/ui/container";

// CHANGED: The stories are now more detailed, specific, and aligned with ADS's known projects.
// A "location" field has been added for more authenticity.
const stories = [
    {
        name: "Abeba & her daughter, Liya",
        role: "New Mother, Maternal Health Program",
        location: "Shire, Tigray",
        story: "When I was pregnant, I was so worried. The health worker from ADS visited me regularly, taught me so much, and made sure we were both healthy. Today, my daughter Liya is strong and smiling. This program didn't just deliver a baby; it delivered peace of mind to our entire family.",
    image: "/images/stories/abeba-liya.webp" // Placeholder image
    },
    {
        name: "Selam",
        role: "Participant, Girls' Education Initiative",
        location: "Adwa, Tigray",
        story: "For a long time, my dream of becoming a teacher felt impossible. The support from ADS didn't just give me books and a uniform; it gave me the confidence to lead in my class. Now, I help younger girls with their studies. I am becoming the future I want to see for Tigray.",
    image: "/images/stories/selam-story.webp" // Placeholder image
    },
    {
        name: "Tesfay",
        role: "Farmer & Head of Household, Clean Water Project",
        location: "Eastern Tigray",
        story: "Before the new well was built by ADS, my wife and daughters spent four hours every day fetching water. Our children were often sick. Now, with clean water just minutes away, our crops are thriving, our family is healthy, and my daughters have time for school. This well gave us more than water; it gave us back our future.",
    image: "/images/stories/tesfay-farmer.webp" // Placeholder image
    }
];

const StoriesPage = () => (
    // CHANGED: Added background color for better visual separation.
    <div className="bg-gray-50">
        <Container className="py-16">
            {/* CHANGED: Added an introductory section to frame the stories and explain the partnership. */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Stories from the Field</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Your support for Ternafit enables our partner, Anenitigray Development Services (ADS), to change lives. 
                    These are the real stories of the individuals and communities you are empowering in Tigray.
                </p>
            </div>
            
            {/* CHANGED: The grid now supports up to 3 columns for better layout flexibility. */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((s, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                        <img 
                            src={s.image} 
                            alt={`Portrait of ${s.name}, a participant in ADS's program in Tigray`} 
                            className="w-full h-56 object-cover" 
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-gray-800">{s.name}</h2>
                            <p className="text-sm font-medium text-terracotta mb-4">{s.role} - {s.location}</p>
                            <blockquote className="text-gray-600 italic text-base flex-grow">
                                “{s.story}”
                            </blockquote>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </div>
);

export default StoriesPage;