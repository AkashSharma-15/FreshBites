import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white flex justify-between py-10 shadow-xl  font-bold  bottom-0  z-50 overflow-hidden ">
            <div className=' ml-6 '>
                <h1>Connecting people with the joy of food</h1>
                <div className='my-2'>
                    <p>Delivering flavors to your doorstep, one order at a time.</p>
                    <p> Connect with us for the latest updates and exclusive offers</p>
                </div>
            </div>
            <div className='mr-32 '>
                <h2 className='my-2'>Contact Us : FreshBites@gmail.com</h2>
                <h2 className='my-2'> Phone No: +91-1234567</h2>
                <div className="flex ">
                    <Link to="">
                        <img className='w-8 rounded-lg mx-2 ' src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg" alt="" />
                    </Link>

                    <Link to="">
                        <img className='w-8 rounded-lg mx-2' src="https://cdn.vectorstock.com/i/preview-1x/08/70/twitter-glyph-icon-for-personal-and-commercial-use-vector-48550870.jpg" alt="" />
                    </Link>
                    <Link to="">
                        <img className='w-8 rounded-lg mx-2' src="https://thumbs.dreamstime.com/b/rounded-black-white-facebook-logo-icon-high-resolution-web-printing-purpose-outlined-175970061.jpg" alt="" />
                    </Link>
                </div>

            </div>
        </footer>

    )
}

export default Footer


