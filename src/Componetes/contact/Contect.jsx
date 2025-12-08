import React from 'react'

const Contect = () => {
  return (
   <div className="h-screen flex justify-center items-center px-2 bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500">
  <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="py-4 px-6">
      <h2 className="text-4xl font-bold text-gray-800">Coming Soon</h2>
      <p className="mt-2 text-lg text-gray-600">
        We are working hard to bring you an amazing Contact. Stay tuned!
      </p>
    </div>
    <div className="py-4 px-6">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div className="border rounded-lg px-4 py-2">
          <div
            id="days"
            className="font-bold font-mono text-2xl text-gray-800"
          />
          300 days
        </div>
        <div className="border rounded-lg px-4 py-2">
          <div
            id="hours"
            className="font-bold font-mono text-2xl text-gray-800"
          />
        </div>66 minutes
        <div className="border rounded-lg px-4 py-2">
          <div
            id="minutes"
            className="font-bold font-mono text-2xl text-gray-800"
          />
        </div>
        <div className="border rounded-lg px-4 py-2">
          <div
            id="seconds"
            className="font-bold font-mono text-2xl text-gray-800"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contect
