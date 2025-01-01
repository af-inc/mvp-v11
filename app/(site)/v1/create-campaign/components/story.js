import React from 'react'


export const Story = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-4 w-full">
    <h2 className="text-xl font-bold text-indigo-900">Write a story</h2>
      <textarea
        value={formData.story}
        onChange={(e) => updateFormData('story', e.target.value)}
        placeholder="Write an honest story.."
        className="w-full p-3 border border-indigo-300 rounded-md h-40 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
        required
      />
    </div>
  )
}

