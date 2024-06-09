import { Link as RadixLink } from "@radix-ui/themes";

import Image from "next/image";


const CaptionedImage = ({ src, alt, captionUrl, captionText }: { src: string, alt: string, captionUrl: string, captionText: string }) => (
  <div className="flex flex-col gap-2">
    <div className="relative w-full min-h-[520px] bg-white rounded-xl">
      <Image
        src={src}
        alt={alt}
        style={{objectFit: "contain"}}
        fill
      />
    </div>
    <RadixLink href={captionUrl} className="text-center text-sm">{captionText}</RadixLink>
  </div>
);


export default CaptionedImage;