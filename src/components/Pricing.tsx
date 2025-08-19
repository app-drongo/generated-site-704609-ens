// Template-enhanced component
// Generated: 2025-08-19T23:04:44.751Z
// Section: pricing
// Category: pricing
// Template ID: pricing-c001

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Invoicely is optimized for blazing-fast performance, with sub-second load times and smooth in-app experiences."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security measures and 99.9% uptime guarantee."
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "Invoicely's responsive design ensures a seamless experience across all devices, from desktop to mobile."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With support for multiple currencies and languages, Invoicely helps you manage your business globally."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Gain valuable insights into your business with our comprehensive reporting and analytics tools."
    },
    {
      icon: Palette,
      title: "Customizable Branding",
      description: "Personalize your invoices, estimates, and other documents with your own logo and brand colors."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto text-center">
        <Badge variant="outline" className="mb-4 px-4 py-2">
          Product Features
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Powerful Features to Streamline Your Business
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Invoicely offers a comprehensive suite of tools to help you manage your invoicing, accounting, and reporting with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-left">
              <CardHeader className="mb-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="size-6 text-primary" />
                </div>
              </CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}