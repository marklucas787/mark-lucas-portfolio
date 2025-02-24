import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { 
  Code, 
  Database, 
  Layout, 
  Users,  
  Shield, 
  Monitor, 
  Cloud 
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code />,
      title: "Power Platform Development",
      description: "Custom Power Apps development including canvas apps, model-driven apps, and portals. Specializing in complex business solutions with seamless data integration.",
      features: [
        "Canvas & Model-driven Apps",
        "Power Automate Workflows",
        "Power BI Dashboards",
        "Custom Connectors"
      ]
    },
    {
      icon: <Database />,
      title: "SharePoint Solutions",
      description: "Enterprise-level SharePoint development and consulting, focusing on creating efficient collaboration spaces and document management systems.",
      features: [
        "Site Collection Development",
        "Workflow Automation",
        "Document Management",
        "Custom SharePoint Solutions"
      ]
    },
    {
      icon: <Layout />,
      title: "Application Modernization",
      description: "Transform legacy applications into modern, efficient solutions using the latest Microsoft technologies and best practices.",
      features: [
        "Legacy App Assessment",
        "Modern UI/UX Design",
        "Data Migration",
        "Process Optimization"
      ]
    },
    {
      icon: <Users />,
      title: "Training & Mentoring",
      description: "Comprehensive training programs and mentoring services for teams looking to enhance their Microsoft technology skills.",
      features: [
        "Power Platform Training",
        "SharePoint Administration",
        "Best Practices Workshops",
        "Team Mentoring"
      ]
    },
    {
      icon: <Shield />,
      title: "Security & Compliance",
      description: "Ensure your applications and data meet security requirements and compliance standards while maintaining efficiency.",
      features: [
        "Security Assessment",
        "Compliance Implementation",
        "Access Control Setup",
        "Security Best Practices"
      ]
    },
    {
      icon: <Monitor />,
      title: "Technical Consulting",
      description: "Strategic guidance on implementing Microsoft technologies, architecture planning, and solution design.",
      features: [
        "Solution Architecture",
        "Technology Strategy",
        "Performance Optimization",
        "Best Practices Implementation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Services</h1>
            <p className="text-xl">
              Comprehensive Microsoft technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition duration-300">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4">
                    {React.cloneElement(service.icon, { className: "w-12 h-12" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <Cloud className="w-4 h-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">My Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center 
                  text-blue-600 font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Discovery</h3>
                <p className="text-gray-600">Understanding your needs and objectives</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center 
                  text-blue-600 font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">Designing the optimal solution</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center 
                  text-blue-600 font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">Building and testing the solution</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center 
                  text-blue-600 font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-gray-600">Ongoing maintenance and optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Let's discuss how I can help transform your business with custom Microsoft solutions
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium 
              hover:bg-blue-50 transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;