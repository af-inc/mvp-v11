import Link from "next/link";
import { Slider } from "./components/slider";

export default function Home() {
  return (
    <main className="w-screen flex flex-col">
      <Slider />
      <Link href="/v1/my-campaigns" className="text-center text-neutral-500 underline">Close</Link>
    </main>
  )
}

