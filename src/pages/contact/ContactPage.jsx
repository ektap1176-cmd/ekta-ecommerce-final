import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Name, Email aur Phone bharna zaroori hai");
      return;
    }
    alert("Message bhej diya gaya ✓");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* centered + max-width safe container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="py-6 text-sm text-gray-600">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/about" className="hover:text-red-600">About</Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-900">Contact</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 pb-12">
          {/* Left side - info cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white shadow-sm box-border">
              <div className="flex items-start gap-4 min-w-0 overflow-hidden">
                <div className="shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold mb-2">Call To Us</h2>
                  <p className="text-gray-600 mb-1 text-sm sm:text-base">
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    Phone: +880 1611 112222
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white shadow-sm box-border">
              <div className="flex items-start gap-4 min-w-0 overflow-hidden">
                <div className="shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold mb-2">Write To Us</h2>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <div className="font-medium text-gray-800 text-sm sm:text-base space-y-1">
                    <p>customer@exclusive.com</p>
                    <p>support@exclusive.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="w-full lg:w-2/3">
            <div className="border border-gray-200 rounded-xl p-5 sm:p-6 lg:p-8 bg-white shadow-sm box-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="w-full max-w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 box-border text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email*"
                  className="w-full max-w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 box-border text-sm sm:text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone*"
                  className="w-full max-w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 box-border text-sm sm:text-base"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full max-w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 resize-none mb-6 box-border text-sm sm:text-base"
              />

              <div className="flex justify-center sm:justify-end">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-10 py-3.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 min-w-[140px]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;