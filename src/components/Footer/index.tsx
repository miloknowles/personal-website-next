import { EnvelopeOpenIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Section, Text } from "@radix-ui/themes";
import { IconBrandStrava } from "@tabler/icons-react";
import Link from "next/link";


export default function Footer() {
  return (
    <Section size="1" pl="5" pr="5">
      <Flex width="100%" className="justify-between">
        <Flex gap="3">
          <IconButton variant="ghost">
            <LinkedInLogoIcon width="28" height="28" color="gray"/>
          </IconButton>
          <IconButton variant="ghost">
            <GitHubLogoIcon width="28" height="28" color="gray"/>
          </IconButton>
          <IconButton variant="ghost">
            <InstagramLogoIcon width="28" height="28" color="gray"/>
          </IconButton>
          <IconButton variant="ghost">
            <IconBrandStrava width="28" height="28" color="gray"/>
          </IconButton>
          <IconButton variant="ghost">
            <EnvelopeOpenIcon width="28" height="28" color="gray"/>
          </IconButton>
        </Flex>
        <Text size="2" color="gray">"It takes nothing away from a human to be kind to an animal."</Text>
        <Link href="github.com/miloknowles">
          <Text size="2" color="gray">Built using Next.js</Text>
        </Link>
      </Flex>
    </Section>
  );
}