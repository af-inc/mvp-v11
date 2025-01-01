import React from 'react'



export const Amount = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-xl font-bold text-indigo-900">What is your target amount?</h2>
      <span className='py-3 text-neutral-500'>How much are you looking to raise?</span>
      <input
        type="text"
        value={formData.amount}
        onChange={(e) => updateFormData('amount', e.target.value)}
        placeholder="Enter target amount (e.g., $5000)"
        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
        required
      />
    </div>
  )
}

