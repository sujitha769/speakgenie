import React from 'react'

const Registerpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 bg-cover bg-center relative"
         style={{ backgroundImage: 'url("../assets/imgg.jpg")' }}>
    
      <div className="absolute inset-0 bg-gray-50/90"></div>
      
      <form className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md relative z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
              <input 
                type="text" 
                id="phone" 
                name="phone" 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">Class:</label>
              <input 
                type="text" 
                id="class" 
                name="class" 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full mt-6 px-4 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Registerpage
