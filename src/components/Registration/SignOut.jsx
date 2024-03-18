import React from 'react'

function SignOut() {
    const welcome =
    "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=925&format=pjpg&exif=0&iptc=0";

    return (
        /*  main container */
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          {/*  Sign In container */}
          <div className="bg-white p-5 rounded shadow-md w-96 ">
            <h1 className="text-2xl font-semibold mb-4 text-center text-primeColor">Register</h1>
            <form>
    
    
            <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                  placeholder="Enter your name"
                />
              </div>
    
    
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                  placeholder="Enter your email"
                />
              </div>
    
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="number"
                >
                  Mobile No.
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                  placeholder="Enter your number"
                />
              </div>
    
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primeColor"
                  placeholder="Enter your password"
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      );
}

export default SignOut