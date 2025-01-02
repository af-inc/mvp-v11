"use client";

import { motion } from "framer-motion";
import { Zap, Share2, Globe, Lock, Wallet, Shield } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Ignite Impact",
    description:
      "Spark joy by sharing your cause and the positive impact it brings. Create change through contributions that make a meaningful difference.",
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "Spread The Word",
    description:
      "Leverage the speed of social media and online networks. Share your fundraising campaign swiftly across various platforms.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure and reliable",
    description:
      "We are trusted, secure and reliable way to help someone in need.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Reach",
    description:
      "Expand your campaign worldwide, accepting contributions from anyone, anywhere, with our international support for crypto donations.",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Secure Crypto Transactions",
    description:
      "Accept cryptocurrency donations securely and effortlessly. Leverage blockchain technology for safe, transparent, and fast transactions.",
  },
  {
    icon: <Wallet className="h-8 w-8" />,
    title: "Crypto Wallet Integration",
    description:
      "Integrate your campaign with popular crypto wallets for seamless donations, ensuring an effortless experience for your supporters.",
  },
];

export function Features() {
  return (
    <section className="py-24 w-full bg-white">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.5 }}
        className="w-full px-4 md:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-2"
        >
          Discover us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 mb-12"
        >
          You can now donate cryptocurrencies
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg"
            >
              <div className="text-indigo-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
