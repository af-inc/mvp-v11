"use client"

import { motion } from "framer-motion"

const images = [
  { src: "/imgg.jpg", alt: "Member 1" },
  { src: "/imgg.jpg", alt: "Member 2" },
  { src: "/imgg.jpg", alt: "Member 3" },
  { src: "/imgg.jpg", alt: "Member 4" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function SocialProof() {
  return (
    <section className="py-20 bg-white h-screen flex items-center justify-center relative">
      <div className="container max-w-6xl mx-auto text-center relative px-4 md:px-8">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Top left image */}
          <motion.div
            className="absolute md:left-10 mt-12 md:top-10 left-0 top-0 transform -translate-x-8 md:translate-x-0 md:translate-y-0"
            variants={imageVariants}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover grayscale"
            />
          </motion.div>

          {/* Top right image */}
          <motion.div
            className="absolute mt-12 md:right-10 md:top-10 right-0 top-0 transform translate-x-8 md:translate-x-0 md:translate-y-0"
            variants={imageVariants}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover grayscale"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="px-24 py-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-12 z-20">Be The Part Of FundRaisers With Over</h2>
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">14,996,972+</p>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">Needs funded within the last 3 years</p>
          </motion.div>

          {/* Bottom left image */}
          <motion.div
            className="absolute md:left-10 md:bottom-10 left-0 bottom-0 transform translate-x-8 md:translate-x-0 md:translate-y-0"
            variants={imageVariants}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover grayscale"
            />
          </motion.div>

          {/* Bottom right image */}
          <motion.div
            className="absolute md:right-10 md:bottom-10 right-0 bottom-0 transform -translate-x-8 md:translate-x-0 md:translate-y-0"
            variants={imageVariants}
          >
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-16 h-16 mt-12 md:w-24 md:h-24 rounded-lg object-cover grayscale"
            />
          </motion.div>

          <motion.button
            className="bg-indigo-400 text-white px-8 py-3 rounded-full font-medium hover:bg-[#a8d36e] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Start a Campaign
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
