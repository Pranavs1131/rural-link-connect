import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon, ClipboardIcon, CogIcon } from "lucide-react";

interface RoleSelectorProps {
  onRoleSelect: (role: 'farmer' | 'officer' | 'admin') => void;
}

const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  const roles = [
    {
      id: 'farmer' as const,
      title: 'Farmer',
      description: 'Access market prices, weather updates, and government schemes',
      icon: UserIcon,
      variant: 'farmer' as const,
    },
    {
      id: 'officer' as const,
      title: 'Field Officer',
      description: 'Manage farmer queries, update schemes, and provide support',
      icon: ClipboardIcon,
      variant: 'officer' as const,
    },
    {
      id: 'admin' as const,
      title: 'Administrator',
      description: 'System management, analytics, and user administration',
      icon: CogIcon,
      variant: 'default' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome to RuralLink
          </h1>
          <p className="text-lg text-muted-foreground">
            Connecting farmers with information, markets, and opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card key={role.id} className="shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={role.variant}
                    size="lg" 
                    className="w-full"
                    onClick={() => onRoleSelect(role.id)}
                  >
                    Continue as {role.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Works offline • Multiple languages • Secure & Private
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;