import { Metadata } from "next"
import Tool from "./client"

export const metadata: Metadata = {
  title: 'Bike Simulator',
  description: 'Predict a bike split using the elevation map, your target power, and other parameters like CdA and rolling resistance.',
}

export default function Page() {
  return (
    <Tool/>
  );
}