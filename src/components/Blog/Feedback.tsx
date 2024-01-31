import { CalloutRoot, CalloutText } from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes";

export default function Feedback() {
  return (
    <CalloutRoot>
      <CalloutText>
        Did I get something wrong or make an egregious typo?
        Any particularly cold takes?
        Have you been thinking about this too?
        I'd love to <RadixLink href="mailto:miloknowles97@gmail.com">hear your thoughts</RadixLink> either way.
      </CalloutText>
    </CalloutRoot>
  )
}