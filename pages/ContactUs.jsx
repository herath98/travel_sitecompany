import React, { useState } from 'react';
import Layouts from '@/src/layout/Layouty';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        alert('Message sent successfully!'); // Add alert message
        // Handle success, e.g., show a success message to the user
      } else {
        console.error('Failed to send message');
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <div>
      <Layouts>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p>Phone: +1 123 456 7890</p>
              <p>Email: info@example.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold">Name</label>
                  <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-black" required onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold">Email</label>
                  <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2 text-black" required onChange={handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold">Message</label>
                  <textarea color='white' id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2 text-black" required onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                <alert color='red' id="alert" ></alert>
              </form>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-blue-500 hover:text-blue-600">Twitter</a>
            </div>
          </div>
        </div>
      </Layouts>
    </div>
  );
};

export default ContactUs;
