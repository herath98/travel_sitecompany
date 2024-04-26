import Layouts from '@/src/layout/Layouty'
import React from 'react'


export default function about() {
  return (
    <Layouts>
      <div className="container mx-auto p-4">
        <section id="our-story" className="mb-8">
          <h2 className="text-2xl text-center font-bold mb-2">Our Story</h2>
          <p className='text-justify'>
            Insert your compelling narrative about the founding and evolution of
            LankaTravels here. Highlight key milestones, achievements, and any
            unique aspects of the companys journey.
          </p>
        </section>

        <section id="our-team" className="mb-8 flex justify-center">
          <div className="max-w-4xl w-full">
            <h2 className="text-2xl font-bold mb-2 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Insert brief bios or profiles of key team members */}
              <div className="bg-gray-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-1">John Doe</h3>
                <p className="text-sm">Founder and CEO</p>
                <p className="mt-2">Description about John Doe...</p>
              </div>
              <div className="bg-gray-500 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-1">Jane Smith</h3>
                <p className="text-sm">Head of Operations</p>
                <p className="mt-2">Description about Jane Smith...</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </section>

        <section id="why-choose" className="mb-8 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  items-center gap-4">
            <div className="bg-none p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Why Choose LankaTravels?</h2>
              <ul className="list-disc list-inside">
                <li>Personalized Services: Describe how...</li>
                <li>Local Expertise: Emphasize the...</li>
                <li>Exceptional Customer Service: Highlight...</li>
                <li>Sustainability and Responsibility: Showcase...</li>
                <li>Value for Money: Illustrate how...</li>
                <li>Customer Testimonials: Include quotes...</li>
              </ul>
            </div>
            <div className="bg-none p-4 rounded-lg">
            <img src='/colombo.jpg' alt='Colombo' width={500} height={500} />
            </div>
          </div>
        </section>

        {/* Additional sections can be added as needed */}
      </div>
    </Layouts>
  )
}
