import { Flex, IconButton, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import Socials from "@/components/Socials";


function LinkIcon(props: { href: string, children: any }) {
  return (
    <Link href={props.href} target="_blank">
      <IconButton variant="ghost">
        {props.children}
      </IconButton>
    </Link>
  )
}


export default function Footer() {
  return (
    <Section size="1" pl="5" pr="5">
      <Flex width="100%" className="justify-between" direction={{initial: "column", sm: "row"}} gap="3">
        <Link href="https://github.com/miloknowles">
          <Text size="1" color="gray" className="hidden md:block">Built using Next.js</Text>
        </Link>
        <Text size="1" color="gray"><i>"It takes nothing away from a human to be kind to an animal."</i></Text>
        <Socials size={24}/>
      </Flex>
    </Section>
  );
}