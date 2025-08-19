// Template-enhanced component
// Generated: 2025-08-19T23:04:44.316Z
// Section: cta
// Category: cta
// Template ID: cta-c001

import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Shield, Smartphone, Globe } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Invoicely is optimized for blazing-fast performance, with sub-second load times and smooth in-app experiences."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and 99.9% uptime, so you can focus on running your business."
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "Access your invoices, payments, and reports on-the-go with our intuitive mobile app."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Invoicely supports multiple currencies and languages, making it easy to work with clients worldwide."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose Invoicely?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Invoicely offers a suite of powerful features to streamline your invoicing and accounting processes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
              <div className="size-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button size="lg" className="group text-base px-8 py-4">
            Start Your Free Trial
            <svg className="ml-2 size-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 14L21 12L17 10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}