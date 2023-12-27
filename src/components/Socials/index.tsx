import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import { FaStrava } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";


function LinkIcon(props: { href: string, children: any }) {
  return (
    <Link href={props.href} target="_blank">
      <IconButton variant="ghost">
        {props.children}
      </IconButton>
    </Link>
  )
}

export default function Socials(props: { size: number, color?: string }) {
  return (
    <Flex gap="6">
      <LinkIcon href="https://www.linkedin.com/in/milo-knowles/">
        <LinkedInLogoIcon width={props.size.toString()} height={props.size.toString()} color={props.color || "gray"}/>
      </LinkIcon>
      <LinkIcon href="https://www.github.com/miloknowles">
        <GitHubLogoIcon width={props.size.toString()} height={props.size.toString()} color={props.color || "gray"}/>
      </LinkIcon>
      <LinkIcon href="https://www.strava.com/athletes/6914634">
        <FaStrava size={props.size} color={props.color || "gray"}/>
      </LinkIcon>
      <LinkIcon href="mailto:miloknowles97@gmail.com">
        <FaEnvelope size={props.size} color={props.color || "gray"}/>
      </LinkIcon>
    </Flex>
  );
}