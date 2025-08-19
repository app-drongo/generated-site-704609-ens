// Template-enhanced component
// Generated: 2025-08-19T23:04:44.200Z
// Section: features
// Category: features
// Template ID: features-c001

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Invoicely is optimized for blazing-fast performance, with sub-second load times and smooth interactions.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with bank-level security, end-to-end encryption, and industry compliance certifications.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Our responsive design ensures a seamless experience on any device, from desktop to mobile.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global Content Delivery",
      description: "Invoicely's worldwide CDN guarantees fast loading times for your customers, no matter where they are.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Gain deep insights and real-time metrics to track your business performance and make data-driven decisions.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Fully customize Invoicely to match your brand identity and create a cohesive, professional look and feel.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer-Friendly",
      description: "Invoicely offers clean APIs, extensive documentation, and powerful developer tools to streamline your workflow.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our dedicated support team is available around the clock to assist you whenever you need help.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy-First Approach",
      description: "We prioritize your data privacy and security, and never sell or share your information with third parties.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Invoicely Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Streamline Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Invoicely's powerful features are designed to help small and medium-sized businesses 
            automate their invoicing and accounting workflows with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to streamline your business with Invoicely?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Your Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}