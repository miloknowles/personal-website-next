import { Metadata } from "next";

import _Page from "./client";

export const metadata: Metadata = {
  title: 'Part 1: Making food with air, water, and sunlight',
  description: "At a first principles level, all of the food we eat is stored sunlight, assembled from air and water.",
}

export default function Page() {
  return (
    <_Page/>
  )
}