import { CalloutRoot, CalloutText, Flex, Heading, Text } from "@radix-ui/themes";

interface HeaderProps {
  publishDate: string
  title: string
  sidenoteWarning?: boolean
}

export default function Header({ publishDate, title, sidenoteWarning } : HeaderProps) {
  return (
    <Flex direction="column" gap="4" className="pb-4">
      <Text size="2" color="gray">{publishDate}</Text>
      <Heading size="9" className="text-5xl">
        {title}
      </Heading>
      {
        sidenoteWarning ?
        <CalloutRoot className="block lg:hidden">
          <CalloutText>For a better experience with sidenotes, please view this on desktop device.</CalloutText>
        </CalloutRoot> :
        undefined
      }
    </Flex>
  );
}