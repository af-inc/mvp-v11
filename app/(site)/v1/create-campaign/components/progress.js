import React from 'react'


export const Progress = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-1 mt-[-25px]">
        <div
          className="bg-indigo-600 h-1 rounded-full transition-all duration-300 ease-in-out items-end"
          style={{ width: `${progress}%` }}
          ></div>
      </div>
    </>
  )
}

