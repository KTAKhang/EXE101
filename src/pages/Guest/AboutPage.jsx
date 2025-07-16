import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "50+", label: "Categories" },
    { number: "24/7", label: "Support" }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20man%20CEO%20portrait&width=200&height=200&seq=team-1&orientation=square",
      description: "10+ years of experience in e-commerce and digital retail"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20operations%20manager&width=200&height=200&seq=team-2&orientation=square",
      description: "Expert in supply chain management and customer experience"
    },
    {
      name: "Mike Chen",
      role: "Head of Technology",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20man%20tech%20leader&width=200&height=200&seq=team-3&orientation=square",
      description: "Leading our digital transformation and platform development"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">Your trusted partner for quality products and exceptional service</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2020, we started with a simple mission: to provide customers with access to high-quality products at competitive prices. What began as a small online store has grown into a trusted e-commerce platform serving thousands of customers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe that everyone deserves access to premium products without the premium price tag. Our team works tirelessly to curate the best selection of products, ensuring quality, reliability, and customer satisfaction with every purchase.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to innovate and expand our offerings, always keeping our customers' needs at the heart of everything we do.
              </p>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20e-commerce%20warehouse%20with%20products%20and%20shipping%20boxes&width=600&height=400&seq=about-story&orientation=landscape"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Numbers</h2>
            <p className="text-xl text-gray-600">Trusted by customers worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To provide our customers with the best shopping experience by offering high-quality products, competitive prices, and exceptional customer service. We strive to make premium products accessible to everyone.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Quality products at competitive prices
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Exceptional customer service
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Fast and reliable shipping
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Secure and easy shopping experience
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-shield-check-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
                    <p className="text-gray-700">We never compromise on quality and always ensure our products meet the highest standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-customer-service-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer First</h3>
                    <p className="text-gray-700">Our customers are at the heart of everything we do. We prioritize their satisfaction above all else.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-lightbulb-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-700">We continuously innovate to improve our platform and provide better experiences for our customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Shop?</h2>
          <p className="text-xl text-blue-100 mb-8">Discover our amazing collection of products</p>
          <Link to="/customer/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 