import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Mark Lucas</h1>
            <h2 className="text-3xl text-gray-700 mb-8">Senior Microsoft Power Platform & SharePoint Developer</h2>
            <p className="text-xl text-gray-600 mb-12">
              Transforming business challenges into efficient digital solutions with 
              over 30 years of experience in Microsoft technologies
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium 
                hover:bg-blue-700 transition duration-300 flex items-center">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg 
                font-medium hover:bg-blue-50 transition duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">30+</h3>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">72+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">80+</h3>
                <p className="text-gray-600">SharePoint Sites</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">6+</h3>
                <p className="text-gray-600">Microsoft Certifications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Mars Console Power App</h3>
                <p className="text-gray-600 mb-4">
                  A novel approach to searching historical research data, successfully 
                  demonstrated at ACR 2024. Built for the Mars Architecture Team.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">NASA</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Power Apps</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">M2M SharePoint Instance</h3>
                <p className="text-gray-600 mb-4">
                  Developed and managed over 80 sites for the M2M and NextSTEP SharePoint 
                  instance, enabling international and external partner access.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">SharePoint</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Enterprise</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <button className="text-blue-600 font-medium hover:text-blue-700 transition duration-300 
              flex items-center justify-center mx-auto">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's collaborate to create efficient, scalable solutions for your organization
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

export default HomePage;