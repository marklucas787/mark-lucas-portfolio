import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ExternalLink } from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Mars Console Power App",
      description: "Novel approach to searching historical research data for the Mars Architecture Team. Successfully demonstrated at ACR 2024.",
      category: "power-apps",
      tags: ["NASA", "Power Apps", "Research"],
      client: "NASA",
      year: "2024"
    },
    {
      title: "M2M SharePoint Instance",
      description: "Developed and managed over 80 sites enabling international and external partner access. Implemented comprehensive security and data management policies.",
      category: "sharepoint",
      tags: ["SharePoint", "Enterprise", "Collaboration"],
      client: "NASA",
      year: "2023-2024"
    },
    {
      title: "Budget Data Collection Application",
      description: "PPBE application for AES Resource Management Office, streamlining budget data collection and management processes.",
      category: "power-platform",
      tags: ["Power Platform", "Federal", "Finance"],
      client: "NASA",
      year: "2023"
    },
    {
      title: "Priority Task Tracker",
      description: "Custom task tracking solution for Technical Integration Office, improving project management efficiency.",
      category: "power-apps",
      tags: ["Power Apps", "Project Management"],
      client: "Technical Integration Office",
      year: "2023"
    },
    {
      title: "Event Tracker Solution",
      description: "AES-wide event tracking system using JavaScript, SharePoint REST API, and DataTables for comprehensive event management.",
      category: "sharepoint",
      tags: ["JavaScript", "SharePoint", "REST API"],
      client: "AES",
      year: "2023"
    },
    {
      title: "Survey Tool for HEO SE&I CIT",
      description: "Replaced Excel sheets with modern survey tool gathering data from over 20 SME teams regularly.",
      category: "power-platform",
      tags: ["Power Platform", "Data Collection"],
      client: "HEO SE&I",
      year: "2023"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'power-apps', label: 'Power Apps' },
    { id: 'sharepoint', label: 'SharePoint' },
    { id: 'power-platform', label: 'Power Platform' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl">
              Showcasing innovative solutions across Power Platform and SharePoint
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition duration-300 
                  ${activeFilter === filter.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">72+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">80+</h3>
                <p className="text-gray-600">SharePoint Sites</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">30+</h3>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Similar Solution?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can create a custom solution for your organization
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium 
              hover:bg-blue-50 transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;