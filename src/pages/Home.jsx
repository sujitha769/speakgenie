import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 animate-fade-in">
          SpeakGenie
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Mindfulness and Meditation for Kids 4-14
        </p>
        <Link to="/register" className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          Start free trial
        </Link>
      </div>
    </div>
  )
}

export default Home