import Layout from '@/src/layout/Layouty';
import React, { useState } from 'react';
import CountrySelector from  '@/src/components/CountrySelector';
import { Button } from 'flowbite-react';

const ContactUs = () => {

  
  const [faqs, setFaqs] = useState([
    {
      question: 'How to book a tour?',
      answer: 'To book a tour with Tabroscape, simply browse our tour packages, select your preferred one, and follow the booking instructions on our website. You can also contact our customer support for assistance.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Our cancellation policy varies depending on the tour package and booking time. Please refer to the specific tour details or contact us for more information.',
    },
    {
      question: "What destinations are available?",
      answer: "Tabroscape offers tours to popular locations in Sri Lanka, including Colombo, Kandy, Galle, Sigiriya, and more. Check out our tour packages to explore these amazing destinations."

    },
    {
      question: "Are meals included?",
      answer: "Yes, most of our tour packages include meals. The specific details about meals and dining options are mentioned in the package description. Feel free to contact us for any dietary restrictions or special requests."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Our cancellation policy varies depending on the tour package and the time of cancellation. Please refer to our Terms and Conditions for detailed information. If you have any specific questions, our customer support team is here to assist you."
    },
    {
      question: "Is travel insurance included?",
      answer: 'No, travel insurance is not included in our tour packages. We highly recommend purchasing travel insurance to protect yourself against any unforeseen circumstances. Our team can provide recommendations for reliable travel insurance providers.'
    }
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };
  const initialFormData = {
    firstName: '',
    contactNumber: '',
    email: '',
    country: '',
    inquiry: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCountryChange = (selectedCountry) => {
    setFormData((prevData) => ({ ...prevData, country: selectedCountry }));
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
        // Email sent successfully
        setAlert({ show: true, message: 'Email sent successfully!', type: 'success' });

        // Reset the form data after successful submission
        setFormData(initialFormData); // Reset form fields to initial state
      } else {
        // Failed to send email
        setAlert({ show: true, message: 'Failed to send email. Please try again later.', type: 'error' });
      }

      // Automatically hide success or error alert after 5 seconds
      setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setAlert({ show: true, message: 'Error sending email. Please try again later.', type: 'error' });
    }
  };

  return (
    <Layout className=''>
      <div >
        <div className="container mx-auto p-4 text-slate-600">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='col-span-1 my-auto'>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p>Phone: +1 123 456 7890</p>
              <p>Email: info@example.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 pt-5">Contact Form</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3 bg-white rounded-lg shadow-md text-slate-600 px-10 py-12">
                <input
                  placeholder='Your Name'
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-3 rounded-md  border-none border-b-2 border-slate-800"
                   /><hr /> 
                <input
                  placeholder='Contact Number'
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="px-3 rounded-md border-none border-b-2 border-slate-800"
                /><hr />
                <input
                  placeholder='Email'
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 rounded-md border-none border-b-2 border-slate-800"
                /><hr />
                <CountrySelector
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                  className="px-3 rounded-md border-none border-b-2 border-slate-800"
                /><hr />
                <textarea
                  placeholder='Inquiry'
                  id="inquiry"
                  name="inquiry"
                  rows={4}
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="px-3 rounded-md border-none border-b-2 border-slate-800"
                /><hr />
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  SUBMIT
                </button>
              </form>
              {alert.show && (
                <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                  {alert.message}
                </div>
              )}
            </div>
          </div>
        
        </div>
      
      <section className=" bg-white mx-auto px-5 py-8 justify-center text-center ">
          <h2 className="text-3xl text-black text-center font-bold mb-2">FAQs</h2>
          <p className='text-center text-black pb-5'>Find the answer common quetions abot travl planning,packages, and services offerend by Tabroscape.</p>

          <div className="grid grid-cols-1  gap-4 justify-center text-center lg:px-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out ${faq.isOpen ? 'border border-blue-500' : ''
                  }`}
              >
                <button
                  className="w-full text-left text-lg font-medium text-gray-900 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {!faq.isOpen && <span className="float-right text-blue-500">&#9660;</span>} {/* Down arrow indicator */}
                  {faq.isOpen && <span className="float-right text-blue-500">&#9650;</span>} {/* Up arrow indicator */}
                </button>
                {faq.isOpen && (
                  <div className="mt-2">
                    <p className="text-base text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-3xl text-black text-center font-bold mt-5 mb-2">Still have questions?</h2>
          <p className='text-center text-black'>Contract us for more information</p>
         
            <div className=" flex justify-center mt-2  ">
              <Button className='justify-center text-center  border-2 border-slate-800 text-black hover:bg-cyan-700 hover:border-none' >Contact</Button>
            </div>
          

        </section>
        <div className="mt-8 lg:px-40">
            <h2 className="text-xl font-semibold text-black mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-blue-500 hover:text-blue-600">Twitter</a>
            </div>
          </div>
          </div>
    </Layout>
  );
};

export default ContactUs;
