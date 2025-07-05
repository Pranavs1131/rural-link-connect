import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDaysIcon, ChartLineIcon, MapPinIcon, MessageSquareIcon } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

interface FarmerDashboardProps {
  onBack: () => void;
}

const FarmerDashboard = ({ onBack }: FarmerDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-primary overflow-hidden">
        <img 
          src={heroImage} 
          alt="Farming landscape" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-2">Good Morning, Farmer!</h1>
            <p className="text-primary-foreground/80">Here's what's happening in your area</p>
            <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
              Offline Ready
            </Badge>
          </div>
          <Button variant="hero" onClick={onBack} className="ml-auto">
            Switch Role
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">₹45/kg</div>
              <div className="text-sm text-muted-foreground">Wheat Price</div>
              <div className="text-xs text-success">↑ 5%</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">28°C</div>
              <div className="text-sm text-muted-foreground">Weather</div>
              <div className="text-xs text-warning">Sunny</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent-foreground">3</div>
              <div className="text-sm text-muted-foreground">New Schemes</div>
              <div className="text-xs text-primary">Available</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-muted-foreground">85%</div>
              <div className="text-sm text-muted-foreground">Soil Health</div>
              <div className="text-xs text-success">Good</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Prices */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartLineIcon className="h-5 w-5 text-primary" />
                  Market Prices
                </CardTitle>
                <CardDescription>
                  Current rates in your local mandi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { crop: 'Wheat', price: '₹2,450/quintal', change: '+120', trend: 'up' },
                    { crop: 'Rice', price: '₹3,200/quintal', change: '-80', trend: 'down' },
                    { crop: 'Maize', price: '₹1,850/quintal', change: '+200', trend: 'up' },
                  ].map((item) => (
                    <div key={item.crop} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <div>
                        <div className="font-medium">{item.crop}</div>
                        <div className="text-sm text-muted-foreground">{item.price}</div>
                      </div>
                      <div className={`text-sm ${item.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                        {item.trend === 'up' ? '↗' : '↘'} {item.change}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Prices
                </Button>
              </CardContent>
            </Card>

            {/* Weather & Farming Tips */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-5 w-5 text-primary" />
                  Weather & Tips
                </CardTitle>
                <CardDescription>
                  7-day forecast and farming recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <div key={day} className="text-center p-2 rounded bg-muted/50">
                      <div className="text-xs text-muted-foreground">{day}</div>
                      <div className="text-sm font-medium">{28 + i}°</div>
                      <div className="text-xs">☀️</div>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-accent rounded-lg">
                  <h4 className="font-medium text-accent-foreground mb-1">Today's Tip</h4>
                  <p className="text-sm text-accent-foreground/80">
                    Good weather for irrigation. Consider watering crops in early morning.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquareIcon className="h-4 w-4 mr-2" />
                  Ask Expert
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  Find Mandi
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CalendarDaysIcon className="h-4 w-4 mr-2" />
                  Crop Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Government Schemes */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Available Schemes</CardTitle>
                <CardDescription>
                  Government programs you can apply for
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'PM-KISAN', amount: '₹6,000/year', status: 'eligible' },
                    { name: 'Crop Insurance', amount: 'Premium Support', status: 'new' },
                    { name: 'Solar Pump', amount: '90% Subsidy', status: 'eligible' },
                  ].map((scheme) => (
                    <div key={scheme.name} className="p-3 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-sm">{scheme.name}</div>
                        <Badge variant={scheme.status === 'new' ? 'default' : 'secondary'} className="text-xs">
                          {scheme.status === 'new' ? 'New' : 'Eligible'}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">{scheme.amount}</div>
                    </div>
                  ))}
                </div>
                <Button variant="farmer" size="sm" className="w-full mt-4">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;