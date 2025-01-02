import { FAQ } from "@/components/custom/faq";
import { Features } from "@/components/custom/features";
import { FlexCampaigns } from "@/components/custom/flex-campaigns";
import { Footer } from "@/components/custom/footer";
import { Hero } from "@/components/custom/hero";
import { SocialProof } from "@/components/custom/social-proof";


export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center rounded-b-2xl bg-white overflow-x-hidden">
        <Hero />
        <FlexCampaigns />
        <Features />
        <SocialProof />
        <FAQ />
        <Footer />
    </div>
  )
}

