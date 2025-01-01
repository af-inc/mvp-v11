'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Amount } from './amount'
import { Category } from './category'
import { Location } from './location'
import { Preview } from './preview'
import { Purpose } from './purpose'
import { Story } from './story'
import { Progress } from './progress'
import { Banner } from './banner'
import { Subject } from './subject'
import Image from 'next/image'
import { toast, Toaster } from 'sonner'

const totalSlides = 8

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    image: null,
    story: '',
    country: '',
    zipCode: '',
    category: '',
    purpose: ''
  })

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const validateCurrentSlide = () => {
    switch (currentSlide) {
      case 0:
        return formData.title.trim() !== ''
      case 1:
        return formData.amount.trim() !== ''
      case 2:
        return formData.image !== null
      case 3:
        return formData.story.trim() !== ''
      case 4:
        return formData.country !== '' && formData.zipCode.trim() !== ''
      case 5:
        return formData.category !== ''
      case 6:
        return formData.purpose !== ''
      default:
        return true
    }
  }

  const nextSlide = () => {
    if (validateCurrentSlide()) {
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1)
      }
    } else {
      toast.error('Please fill in all required fields before continuing.')
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  const handleSubmit = () => {
    if (validateCurrentSlide()) {
      console.log('Form Data:', formData)
      toast.success('Campaign submitted successfully!')
    } else {
      toast.error('Please fill in all required fields before submitting.')
    }
  }

  const slides = [
    <Subject key="title" formData={formData} updateFormData={updateFormData} />,
    <Amount key="amount" formData={formData} updateFormData={updateFormData} />,
    <Banner key="image" formData={formData} updateFormData={updateFormData} />,
    <Story key="story" formData={formData} updateFormData={updateFormData} />,
    <Location key="location" formData={formData} updateFormData={updateFormData} />,
    <Category key="category" formData={formData} updateFormData={updateFormData} />,
    <Purpose key="purpose" formData={formData} updateFormData={updateFormData} />,
    <Preview key="preview" formData={formData} goToSlide={goToSlide} />
  ]

  return (
    <div className="sm:w-[100vw] lg:w-[70vw] mx-auto p-6 overflow-hidden m-0 flex flex-col rounded-lg relative">
      <Progress currentStep={currentSlide} totalSteps={totalSlides} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="min-h-[300px] flex items-center justify-center"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
      <div className="mt-auto flex py-3 justify-between">
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Previous
          </button>
        )}
        {currentSlide < totalSlides - 1 ? (
          <button
            onClick={nextSlide}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md ml-auto transition duration-300 ease-in-out transform hover:scale-105"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md ml-auto transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

