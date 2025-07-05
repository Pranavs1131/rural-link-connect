import { useState } from "react";
import RoleSelector from "@/components/RoleSelector";
import FarmerDashboard from "@/components/FarmerDashboard";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<'farmer' | 'officer' | 'admin' | null>(null);

  const handleRoleSelect = (role: 'farmer' | 'officer' | 'admin') => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  if (selectedRole === 'farmer') {
    return <FarmerDashboard onBack={handleBack} />;
  }

  if (selectedRole === 'officer') {
    return (
      <div className="min-h-screen bg-gradient-earth flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Field Officer Portal</h1>
          <p className="text-muted-foreground mb-4">Coming soon...</p>
          <button onClick={handleBack} className="text-primary hover:underline">
            ← Back to role selection
          </button>
        </div>
      </div>
    );
  }

  if (selectedRole === 'admin') {
    return (
      <div className="min-h-screen bg-gradient-earth flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Admin Portal</h1>
          <p className="text-muted-foreground mb-4">Coming soon...</p>
          <button onClick={handleBack} className="text-primary hover:underline">
            ← Back to role selection
          </button>
        </div>
      </div>
    );
  }

  return <RoleSelector onRoleSelect={handleRoleSelect} />;
};

export default Index;
