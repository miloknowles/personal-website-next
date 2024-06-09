import { Metadata } from "next";

import Content from "./client";

export const metadata: Metadata = {
  title: 'Part 2: The artificial photosynthesis revolution',
  description: "If we can turn electricity into food, I can’t see a first principle reason why supplying cheap and nutritious food to every person on Earth should be difficult; there is more than enough energy and carbon to go around.",
}

export default function Page() {
  return (
    <Content/>
  )
}