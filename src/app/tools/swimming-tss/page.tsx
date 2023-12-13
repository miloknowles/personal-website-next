import { Metadata } from "next";
import SwimmingTSSTool from "./client";


export const metadata: Metadata = {
  title: 'Swimming TSS Calculator',
  description: "Calculate the training stress of a swim workout based on pace and duration.",
}

export default function Page() {
  return (
    <SwimmingTSSTool/>
  )
}