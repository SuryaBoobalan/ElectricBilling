import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center margin-Top-15">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 >TANGEDCO</h1>
        <h1  Name="text-3xl font-bold mb-6">TANGEDCO WELCOMES YOU</h1>
        <p className="mb-6">TAMILNADU GENERATION AND DISTRIBUTION CORPORATION LIMITED</p>
        <div className="flex justify-between">

          <Link to="/Calculator" name = "calculator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ textDecoration: 'none'}}>
            Calculate Bill
          </Link>
          <Link to="/User" id = "login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ textDecoration: 'none'}}>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home