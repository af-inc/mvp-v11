import React, { useRef } from 'react'
import Image from 'next/image'

export const Banner = ({ formData, updateFormData }) => {
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      updateFormData('image', e.target.files[0])
    }
  }

  return (
    <div className="space-y-4 w-full">
    <h2 className="text-xl font-bold text-indigo-900">Campaign banner Amount</h2>
    <span className='py-3 text-neutral-500'>Set a banner image for your campaign</span>
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-indigo-300 rounded-lg p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:border-indigo-500"
      >
        {formData.image ? (
          <Image
            src={URL.createObjectURL(formData.image)}
            alt="Campaign Banner"
            width={400}
            height={200}
            className="mx-auto rounded-md"
          />
        ) : (
          <p className="text-indigo-500">Click to upload an image</p>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  )
}

