"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const campaigns = [
  {
    image: "/imgg.jpg",
    title: "Help Francisco Get a Life-Saving Heart Transplant",
    donations: "2.6K",
    raised: 125178,
    target: 200000,
  },
  {
    image: "/imgg.jpg",
    title: "Strike Fund: Park City Professional Ski Patrol",
    donations: "2.2K",
    raised: 165070,
    target: 200000,
  },
  {
    image: "/imgg.jpg",
    title: "Please help our boy",
    donations: "15.9K",
    raised: 407187,
    target: 500000,
  },
  {
    image: "/imgg.jpg",
    title: "Mean Green of Mississippi Valley State University",
    donations: "4.3K",
    raised: 205760,
    target: 300000,
  },
  {
    image: "/imgg.jpg",
    title: "Ryan & Becky's Future ❤️",
    donations: "1.9K",
    raised: 58550,
    target: 100000,
  },
];

export function FlexCampaigns() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true, // Enable looping
    dragFree: true, // Allow free dragging/swiping
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="w-screen px-4 lg:px-16">
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold">
              Discover fundraisers inspired by what you care about
            </h2>
          </motion.div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <select className="w-full p-2 border rounded-lg">
            <option value="">Filter Campaigns</option>
            <option value="all">All</option>
            <option value="donations">By Donations</option>
            <option value="raised">By Raised Amount</option>
            <option value="target">By Target Amount</option>
          </select>
        </div>

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] py-3 ml-5"
              >
                <div className="rounded-lg overflow-hidden bg-white shadow-lg h-[380px] flex flex-col">
                  <div className="relative flex-grow">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-[200px] object-cover md:h-[250px]"
                    />
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm">
                      {campaign.donations} donations
                    </div>
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-semibold mb-4 line-clamp-2">
                      {campaign.title}
                    </h3>
                    <Progress
                      value={(campaign.raised / campaign.target) * 100}
                      className="mb-2"
                    />
                    <div className="flex text-sm text-gray-600">
                      <span>€{campaign.raised.toLocaleString()} Raised</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
