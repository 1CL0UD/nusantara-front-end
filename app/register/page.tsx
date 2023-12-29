import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="https://nusantarainfrastructure.com/assets/images/web/logo/nusantara_logo.png"
        width={100}
        height={100}
        className="w-48 h-auto mb-8"
        alt="Nusantara Logo"
      />
      <div className="p-8 flex flex-col justify-center items-center shadow-xl border border-gray-200 bg-gray-800 rounded-2xl">
        <h1 className="mb-4 text-2xl font-bold">Register an account</h1>
        {/* <div className="bg-black h-[0.2rem] w-full rounded-full"></div> */}
        <form action="">
          <div className="flex flex-col gap-1 my-2">
            <label htmlFor="username" className="ms-3">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="bg-gray-900 rounded-3xl py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 my-2">
            <label htmlFor="email" className="ms-3">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="your-email@domain.com"
              className="bg-gray-900 rounded-3xl py-2 px-4"
            />
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="password" className="ms-3">
                Password
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="bg-gray-900 rounded-3xl py-2 px-4"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="password_conf" className="ms-3">
                Type Password Again
              </label>
              <input
                type="text"
                name="password_conf"
                placeholder="Type Password Again"
                className="bg-gray-900 rounded-3xl py-2 px-4"
              />
            </div>
          </div>
          <p className="mb-4">
            <span>
              Already have an account?{' '}
              <Link
                href={'/login'}
                className="text-blue-500 hover:underline checked:text-blue-800"
              >
                Sign in
              </Link>
            </span>
          </p>
          <div className="flex flex-col gap-1 text-white">
            <button type="submit" className="py-2 bg-green-400 rounded-3xl">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
