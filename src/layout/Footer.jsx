import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-white md:px-40'>
            <div className='grid text-sm grid-cols-1 md:grid-cols-4 gap-5 text-black  pt-10' >
                <div className='col-span-1 justify-center lg:justify-start grid '>
                    <img src='/logo.png' className='w-32 lg:w-50 h-auto' ></img>

                </div>
                <div className='grid col-span-1  justify-center lg:px-10 md:col-span-2'>
                    <div className='grid lg:flex justify-center gap-2'>
                        <h3 className='underline'>Privacy Policy</h3>
                        <h3 className='underline'>Terms & Conditions</h3>
                        <h3 className='underline'>Cookie Policy</h3>
                    </div>

                </div>
                <div className='col-span-1 justify-center md:justify-end flex '>
                    <div className='flex gap-2'>
                        <FaFacebook size={25} />
                        <FaInstagram size={25} />
                        <FaTiktok size={25} />
                        <FaLinkedin size={25} />
                       
                    </div>
                </div>

            </div>
            <div className='pt-20 pb-5'>
                <hr className='border-1 border-slate-600' />
            </div>
            <div className='flex justify-between'>
            <div className='text-xs flex justify-start gap-5 pt-2 pb-10 text-black'>
                <h3>© 2024 Tabroscape. All rights reserved.</h3>
                
            </div>
            <div className='text-xs flex justify-end gap-5 pt-2 pb-10 text-black'>
                <h3>Developed by <a className='underline' href='https://www.semantixlabs.com/'>SemanticLabs</a></h3>
                
            </div>
            </div>
            
        </div>
    )
}
