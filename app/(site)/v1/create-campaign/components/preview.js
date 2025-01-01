import React, { useState } from 'react'
import Image from 'next/image'


export const Preview = ({ formData, goToSlide }) => {
  const [showFullStory, setShowFullStory] = useState(false)

  const purposeLabels = {
    yourself: 'Yourself',
    someone_else: 'Someone Else',
    crypto_project: 'Crypto Project'
  }

  return (
    <div className="space-y-6 w-full max-h-[70vh] flex flex-col overflow-auto">
    <h2 className="text-xl font-bold text-indigo-900">Preview your campaign</h2>
      <div className="space-y-4 bg-white rounded-lg shadow-md">
        <div className="relative h-48 bg-gray-200 rounded-md overflow-hidden cursor-pointer" onClick={() => goToSlide(2)}>
          {formData.image && (
            <Image
              src={URL.createObjectURL(formData.image)}
              alt="Campaign Banner"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <h3 className="text-2xl font-semibold text-indigo-600 cursor-pointer" onClick={() => goToSlide(0)}>{formData.title}</h3>
        <p className="text-lg font-medium text-gray-700 cursor-pointer" onClick={() => goToSlide(1)}>Target: {formData.amount}</p>
        <p className="text-gray-600 cursor-pointer" onClick={() => goToSlide(5)}>Category: {formData.category}</p>
        <p className="text-gray-600 cursor-pointer" onClick={() => goToSlide(6)}>Purpose: {formData.purpose}</p>
        <div>
          <h4 className="font-semibold text-indigo-600">Story:</h4>
          <p className="text-gray-700 cursor-pointer whitespace-pre-wrap" onClick={() => goToSlide(3)}>
            {showFullStory ? formData.story : `${formData.story.slice(0, 100)}...`}
          </p>
          <button
            onClick={() => setShowFullStory(!showFullStory)}
            className="text-indigo-500 hover:text-indigo-600 underline mt-2"
          >
            {showFullStory ? 'Show Less' : 'View All'}
          </button>
        </div>
        <div>
          <h4 className="font-semibold text-indigo-600">Location:</h4>
          <p className="text-gray-700 cursor-pointer" onClick={() => goToSlide(4)}>
            {formData.country}, {formData.zipCode}
          </p>
        </div>
      </div>
    </div>
  )
}

