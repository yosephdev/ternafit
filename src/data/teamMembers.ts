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
    imageUrl: "/images/team/yoseph.webp",
    bio: "Yoseph is the founder and executive director of Ternafit. He is passionate about empowering the Tigrean community and has extensive experience in project management and advocacy."
  },
  {
    name: "Mebrat Gebru",
    role: "Programs Director",
    imageUrl: "/images/team/mebrat.webp",
    bio: "Mebrat is a dedicated and experienced leader with a background in humanitarian aid and development. She oversees all of Ternafit's programs and initiatives."
  }
];
