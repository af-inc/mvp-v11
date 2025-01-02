"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can I start a campaign?",
    answer: "Starting a campaign is simple! Just click on 'Start Campaign,' choose the type (Self, Charity, Crypto Project, etc.), and fill out the details about your cause."
  },
  {
    question: "Can I receive donations in cryptocurrency?",
    answer: "Yes! We support popular cryptocurrencies such as Bitcoin, Ethereum, and USDT. You can enable crypto donations during the campaign setup."
  },
  {
    question: "How do I know the funds are secure?",
    answer: "All transactions are processed through our secure payment gateways, and cryptocurrency donations are stored in a multi-signature wallet for added safety."
  },
  {
    question: "Can I donate anonymously?",
    answer: "Yes, you can choose to donate anonymously while making your contribution, whether it's through fiat or cryptocurrency."
  },
  {
    question: "Are there fees for donations?",
    answer: "We charge a small platform fee to cover operational costs. Additional fees may apply for cryptocurrency transactions based on the blockchain network."
  },
  {
    question: "How do I withdraw the funds raised?",
    answer: "You can withdraw funds directly to your linked bank account or crypto wallet. Withdrawals are subject to verification for added security."
  },
  {
    question: "Can I donate to international campaigns?",
    answer: "Absolutely! Our platform supports global campaigns, and you can contribute using local or cryptocurrency options."
  },
  {
    question: "What is the minimum donation amount?",
    answer: "The minimum donation amount depends on the currency. For cryptocurrencies, the minimum is based on the blockchain network's requirements."
  },
  {
    question: "How can I track the impact of my donation?",
    answer: "Campaign creators provide updates about the progress of their projects. You’ll receive notifications whenever an update is posted."
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50 w-screen">
      <div className="container px-4 md:px-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Answers to common questions about crowdfunding with fiat and crypto.
          </p>
        </motion.div>

        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
