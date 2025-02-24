import React, { useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { MessageSquare, Star } from 'lucide-react';

const TestimonialsPage = () => {
  useEffect(() => {
    // Add Senja iframeResizer script
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/js/iframeResizer.min.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Add the resizer script after iframe is loaded
    script.onload = () => {
      const resizerScript = document.createElement('script');
      resizerScript.type = 'text/javascript';
      resizerScript.text = 'iFrameResize({log: false, checkOrigin: false}, "#senja-collector-iframe")';
      document.body.appendChild(resizerScript);
    };

    return () => {
      // Cleanup scripts when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // Featured testimonials from your resume
  const featuredTestimonials = [
    {
      text: "It went great!! Lunch payments went so smoothly, ordering with the vendors has been a dang BREEZE bc of that sharepoint you created, we're in HEAVEN. Thank you!!!",
      author: "Mary Christian Chester",
      role: "ACR"
    },
    {
      text: "Mark, Thank you very much! It looks great and I'm glad you made sure the order of the items is correct when exporting. This will make things so much easier!",
      author: "Mario Perez",
      date: "6/10/2024"
    },
    {
      text: "I don't know what we would do without you Mark!",
      author: "Alida Andrews",
      date: "3/20/2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl">
              Don't just take my word for it - hear what my clients have to say
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Feedback</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.author}</p>
                    {testimonial.role && (
                      <p className="text-gray-500">{testimonial.role}</p>
                    )}
                    {testimonial.date && (
                      <p className="text-sm text-gray-400">{testimonial.date}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Senja.io Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Share Your Experience</h2>
          <div className="max-w-4xl mx-auto">
            <iframe
              id="senja-collector-iframe"
              src="https://love.jamestech.com?mode=embed&nostyle=true"
              allow="camera;microphone"
              title="Senja form"
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="700"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">30+</h3>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            
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
                <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;