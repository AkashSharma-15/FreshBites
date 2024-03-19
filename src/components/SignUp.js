import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}
                className=' w-3/12 shadow-lg mx-auto my-10  text-center hover:shadow-2xl   text-gray-700 rounded-md  '>
                <h1 className='text-3xl font-bold  py-4 '>Sign Up</h1>

                <input className="p-4 my-2 w-[75%]  rounded-md  border-2"
                    type="text"
                    placeholder="Enter your name"
                />
                <input className="p-4 my-2 w-[75%] rounded-md  border-2"
                    type="text"
                    placeholder="Enter your Email-id"
                />
                <input className="p-4 my-2 w-[75%] rounded-md  border-2"
                    type="text"
                    placeholder="Enter your Phone Number"
                />
                <input className="p-4 my-2 w-[75%] rounded-md  border-2"
                    type="password"
                    placeholder="Enter your password"
                />

                <button className='my-2 text-xl font-bold bg-orange-500 p-4  w-[75%] rounded-md text-white'>
                    SIGN UP
                </button>

                <p className=' py-4 text-zinc-600'>Already have an account?
                    <span className='font-bold cursor-pointer text-gray-700'>
                        <Link to="/login">Login here</Link>
                    </span>
                </p>
            </form>
        </div>
    )
}

export default SignUp
