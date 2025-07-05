import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TeamMember } from "@/data/teamMembers";

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-col items-center p-6 bg-muted/40">
        <Avatar className="w-24 h-24 mb-4 border-4 border-background shadow-md">
          <AvatarImage src={member.imageUrl} alt={member.name} />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-serif text-center">{member.name}</CardTitle>
        <p className="text-sm text-terracotta font-medium">{member.role}</p>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <p className="text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  );
};
