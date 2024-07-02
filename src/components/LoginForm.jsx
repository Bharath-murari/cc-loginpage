import React from 'react'
import logo from '../images/logo.png'
import mobileBackground from '../images/laptopbg.png'
import desktopBackground from '../images/md.png'

export default function LoginForm({ onSwitchToSignUp }) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${mobileBackground})`,
      }}
    >
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${desktopBackground})`,
        }}
      >
      </div>

      <div className="bg-white rounded-tl-[190px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] md:rounded-[67px] shadow-lg p-8 w-full max-w-md md:w-[555px] md:h-[561px] mx-0 md:mx-4 md:relative absolute bottom-0 left-0 right-0 md:bottom-auto flex flex-col justify-center h-[85vh] z-10 px-9">
        <div className='flex justify-center'>
            <img src={logo} alt="Codecheflogo" className="h-[102px] w-[102px] md:h-[156px] md:w-[156px] "/>
        </div>
        <h2 className="text-2xl text-blue-500 font-bold text-center mb-9">
          LOGIN
        </h2>
        <form>
          <div className='mb-4'>
            <div className='mb-4 relative'> 
              <label className="block text-sm font-bold text-black">
                Email ID
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <input type="email" name="email" id="" placeholder='some.mail@university.com' className='appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 placeholder:pl-4 focus:outline-none sm:text-sm'/>
              </div>
            </div>
          </div>
          <div className='mb-4 relative'> 
            <label className="block text-sm font-bold text-black">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-8 w-8 text-black-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input type="password" name="password" id="" placeholder='**********' className='appearance-none block w-full pl-10 pr-3 py-2 border-2 rounded-md placeholder-gray-400 placeholder:pl-4 focus:outline-none sm:text-sm'/>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center pt-2 pb-3 px-4 border border-transparent rounded-[43px] shadow-sm text-3xl font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log in
          </button>
          <div className="flex justify-between items-center mt-3 ml-2 mr-2">
            <p className="text-sm text-3x1 text-black">
              Don't have an account?
            </p>
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                onSwitchToSignUp();
              }}
              className="font-medium text-blue-900 hover:text-blue-500">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}