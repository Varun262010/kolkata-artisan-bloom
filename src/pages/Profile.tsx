import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { User, Shield, Upload, CheckCircle } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const [kycStatus, setKycStatus] = useState<"pending" | "verified" | "not-started">("not-started");

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleKycSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKycStatus("pending");
    toast({
      title: "KYC Submitted",
      description: "Your documents are under review. We'll notify you once verified.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your account and verification</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="kyc" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                KYC Verification
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Street address" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input id="pincode" placeholder="Pincode" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full md:w-auto">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="kyc">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>KYC Verification</CardTitle>
                      <CardDescription>Complete your identity verification</CardDescription>
                    </div>
                    <Badge variant={kycStatus === "verified" ? "default" : kycStatus === "pending" ? "secondary" : "outline"}>
                      {kycStatus === "verified" && <CheckCircle className="w-4 h-4 mr-1" />}
                      {kycStatus === "verified" ? "Verified" : kycStatus === "pending" ? "Under Review" : "Not Verified"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {kycStatus === "verified" ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">You're All Set!</h3>
                      <p className="text-muted-foreground">Your account has been verified successfully.</p>
                    </div>
                  ) : kycStatus === "pending" ? (
                    <div className="text-center py-12">
                      <Shield className="w-16 h-16 text-secondary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Verification in Progress</h3>
                      <p className="text-muted-foreground">We're reviewing your documents. This usually takes 1-2 business days.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleKycSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="aadhar">Aadhar Number</Label>
                        <Input id="aadhar" placeholder="XXXX XXXX XXXX" maxLength={12} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pan">PAN Number</Label>
                        <Input id="pan" placeholder="ABCDE1234F" maxLength={10} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="aadharDoc">Upload Aadhar Card</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">PDF, JPG or PNG (max 5MB)</p>
                          <Input id="aadharDoc" type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="panDoc">Upload PAN Card</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">PDF, JPG or PNG (max 5MB)</p>
                          <Input id="panDoc" type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                      </div>

                      <Button type="submit" className="w-full">
                        Submit for Verification
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
