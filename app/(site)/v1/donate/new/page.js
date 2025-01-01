'use client';

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const CreateCampaigns = () => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    campaignName: "",
    description: "",
    budget: 0,
    image: undefined,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "budget" ? Number(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    }
  };

  const handlePreview = () => {
    console.log("Form Data:", formData);
  };

  const isFormComplete = () => {
    return Boolean(
      formData.campaignName &&
      formData.description &&
      formData.budget > 0 &&
      formData.image
    );
  };

  return (
    <div className="h-screen w-screen bg-white overflow-auto">
      <div className="flex flex-col items-center relative">

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-4xl bg-white rounded-lg p-3 space-y-6"
        >
        <h1 className="text-xl font-bold mb-1 text-indigo-900 w-full">New Donation</h1>
          {/* Campaign Name Input */}
          <div>
            <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700">
              Clause
            </label>
            <input
              id="campaignName"
              name="campaignName"
              type="text"
              value={formData.campaignName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter campaign name"
            />
          </div>

          {/* Budget Input */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                $
              </span>
              <input
                id="budget"
                name="budget"
                type="number"
                value={formData.budget}
                onChange={handleInputChange}
                className="flex-1 block w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter budget"
              />
            </div>
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Write a description"
              className="w-full p-3 border border-indigo-300 rounded-md h-40 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
              style={{
                overflow: 'hidden',
                lineHeight: '1.5',
              }}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <h2 className="text-xl font-bold text-indigo-900">Banner</h2>
            <span className="py-3 text-neutral-500">Set a banner image for your campaign</span>
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
              id="imageUpload"
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </div>

          {/* Submit and Preview Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 py-3 px-6 bg-purple-800 text-white font-bold rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Setup Donation
            </button>
            <button
              type="button"
              onClick={handlePreview}
              disabled={!isFormComplete()}
              className={`flex-1 py-3 px-6 font-bold rounded-md focus:outline-none focus:ring-2 ${
                isFormComplete()
                  ? "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Preview
            </button>
          </div>
        </form>

        {/* Back Link */}
        <div className="mt-4 text-center">
          <Link href="/v1/donate" className="text-blue-600 hover:underline cursor-pointer">
            Exit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaigns;
