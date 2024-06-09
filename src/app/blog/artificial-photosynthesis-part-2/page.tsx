import { Metadata } from "next";

import Content from "./client";

export const metadata: Metadata = {
  title: 'Part 2: The artificial photosynthesis revolution',
  description: "At a first principles level, all of the food we eat is stored sunlight, assembled from air and water.",
}

export default function Page() {
  return (
    <Content/>
  )
}