export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Yoseph Berhane",
    role: "Executive Director",
    imageUrl: "/images/team/yoseph-berhane.webp",
    bio: "Yoseph is the founder and executive director of Ternafit. He is passionate about empowering the Tigrean community and has extensive experience in project management and advocacy."
  },
  {
    name: "Mebrat Gebru",
    role: "Programs Director",
    imageUrl: "/images/team/mebrat.webp",
    bio: "Mebrat is a dedicated and experienced leader with a background in humanitarian aid and development. She oversees all of Ternafit's programs and initiatives."
  },
  // Filmon removed; Selamawit takes Treasurer role
  {
    name: "Julian Bergman",
    role: "Secretary",
    imageUrl: "/images/team/julian-bergman.webp", // Placeholder until actual image is available
    bio: "Julian manages organizational communications and documentation, ensuring smooth operations and maintaining clear records of our activities and decisions."
  },
  {
    name: "Selamawit Asres",
    role: "Treasurer",
    imageUrl: "/images/team/selam-asres.webp",
    bio: "Selamawit brings extensive financial expertise to Ternafit, ensuring transparent and effective management of our resources to maximize impact for the communities we serve. She also provides strategic guidance and oversight as a board member."
  }
];
