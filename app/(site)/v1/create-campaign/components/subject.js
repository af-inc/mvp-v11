import React from 'react'


export const Subject = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-4 w-full">
    <h2 className="text-xl font-bold text-indigo-900">Give your campaign a title</h2>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => updateFormData('title', e.target.value)}
        placeholder="Enter your subject"
        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
        required
      />
    </div>
  )
}

