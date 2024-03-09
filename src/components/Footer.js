import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <footer className="flex justify-between py-10 px-6 lg:px-10 shadow-xl font-bold items-center">
                <div className='ml-6'>
                    <h1 className="text-xl md:text-2xl">Connecting people with the joy of food</h1>
                    <div className='my-4'>
                        <p className="text-sm">Delivering flavors to your doorstep, one order at a time.</p>
                        <p className="text-sm">Connect with us for the latest updates and exclusive offers.</p>
                    </div>
                </div>
                <div className='mr-6'>
                    <h2 className='my-2 text-lg'>Contact Us :</h2>
                    <p className="text-sm my-1">Email: FreshBites@gmail.com</p>
                    <p className="text-sm my-1">Phone: +91-1234567</p>
                    <div className="flex mt-4">
                        <Link to="" className="mx-2">
                            <img className='w-8 rounded-lg' src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg" alt="Instagram" />
                        </Link>
                        <Link to="" className="mx-2">
                            <img className='w-8 rounded-lg' src="https://cdn.vectorstock.com/i/preview-1x/08/70/twitter-glyph-icon-for-personal-and-commercial-use-vector-48550870.jpg" alt="Twitter" />
                        </Link>
                        <Link to="" className="mx-2">
                            <img className='w-8 rounded-lg' src="https://thumbs.dreamstime.com/b/rounded-black-white-facebook-logo-icon-high-resolution-web-printing-purpose-outlined-175970061.jpg" alt="Facebook" />
                        </Link>
                    </div>
                </div>
            </footer>
            <div className="bg-gray-900 text-white text-center py-4">
                <p className="text-sm font-bold">© 2024 FreshBites. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
