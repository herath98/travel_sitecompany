import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='col-span-1 justify-center grid md:px-10'>
                    <h1>Logo</h1>

                </div>
                <div className='grid col-span-1  justify-center lg:px-10 md:col-span-2'>
                    <div className='grid lg:flex justify-center'>
                        <h3>Explore Sri Lanka</h3>
                        <h3>Tour Packages</h3>
                        <h3>Contract Us</h3>
                        <h3>About Us</h3>
                        <h3>FAQs</h3>

                    </div>

                </div>
                <div className='col-span-1 justify-center md:justify-end flex md:px-10'>
                    logos
                </div>

            </div></div>
    )
}
