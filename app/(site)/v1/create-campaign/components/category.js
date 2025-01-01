import React from 'react'


export const Category = ({ formData, updateFormData }) => {
  const categories = [
    'Animals', 'Business', 'Community', 'Competitions', 'Creative', 'Education',
    'Emergencies', 'Environment', 'Events', 'Faith', 'Family', 'Funerals & Memorials',
    'Medical', 'Monthly Bills', 'Newlyweds', 'Other', 'Sports', 'Travel',
    'Ukraine Relief', 'Volunteer', 'Wishes', 'Crypto Project'
  ]

  return (
    <div className="space-y-4 w-full">
    <h2 className="text-xl font-bold text-indigo-900">Select a suitable Category</h2>
    <span className='py-3 text-neutral-500'>Which category best describes you?</span>
      <select
        value={formData.category}
        onChange={(e) => updateFormData('category', e.target.value)}
        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
        required
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

