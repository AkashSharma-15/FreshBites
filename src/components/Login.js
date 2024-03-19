import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}
            className=' w-3/12 shadow-lg mx-auto my-10  text-center hover:shadow-2xl  text-gray-700'>
            <h1 className='text-3xl font-bold  py-4 '>Login</h1>

            <input className="p-4 my-2 w-[75%]  rounded-md  border-2"
                type="text"
                placeholder="Email "
            />
            <input className="p-4 my-2 w-[75%] rounded-md  border-2"
                type="password"
                placeholder="Password"
            />
            <button className='my-2 text-xl font-bold bg-orange-500 p-4  w-[75%] rounded-md text-white'>
                LOGIN
            </button>
            <button className='my-2 text-xl font-bold bg-gray-500 p-4  w-[75%] rounded-md text-white'>
                Forgot Password
            </button>

            <p className=' py-4 text-zinc-600'>Are you new here?
                <span className='font-bold cursor-pointer text-gray-700'>
                    <Link to="/signup">SignUp first</Link>
                </span>
            </p>
        </form>
    )
}

export default Login
