import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MessageSquare, Clock, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const recentProjects = [
    "Mars Console Power App for NASA",
    "M2M SharePoint Instance",
    "Budget Data Collection Application"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Let's Work Together</h1>
            <p className="text-xl">
              Ready to transform your business with custom Microsoft solutions?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="projectType">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="power-apps">Power Apps Development</option>
                      <option value="sharepoint">SharePoint Solutions</option>
                      <option value="power-platform">Power Platform Integration</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="training">Training & Mentoring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium 
                      hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information and Additional Cards */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardContent>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">contact@marklucas.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <h3 className="font-semibold">Response Time</h3>
                        <p className="text-gray-600">Usually within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <h3 className="font-semibold">Working Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
                  <div className="space-y-4">
                    {recentProjects.map((project, index) => (
                      <div key={index} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">{project}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-blue-50">
                <CardContent>
                  <h2 className="text-2xl font-bold mb-4">Quick Response</h2>
                  <p className="text-gray-600 mb-4">
                    Need an immediate response? Schedule a quick 15-minute consultation.
                  </p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium 
                    hover:bg-blue-700 transition duration-300">
                    Schedule Now
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">What types of projects do you take on?</h3>
                <p className="text-gray-600">
                  I specialize in Power Platform and SharePoint solutions, including custom app 
                  development, workflow automation, and enterprise-level implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on complexity. Small solutions might take 2-4 weeks, 
                  while larger enterprise implementations can span several months.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">Do you offer ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, I provide ongoing maintenance and support services to ensure your solutions 
                  continue to perform optimally.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="font-semibold mb-2">What industries do you work with?</h3>
                <p className="text-gray-600">
                  I have extensive experience working with federal agencies, aerospace, and 
                  enterprise organizations across various sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
