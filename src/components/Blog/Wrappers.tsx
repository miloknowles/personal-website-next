import { Container, Flex, Responsive, Section } from "@radix-ui/themes";

type ResponsivePadding = Responsive<"0" | "6" | "1" | "2" | "3" | "4" | "5" | "7" | "8" | "9">;
type ResponsiveWidth = Responsive<"1" | "2" | "3" | "4">;


// This is the main outer container, which houses both the content and sidenotes.
export function BlogWrapper(props: { children: any }) {
  return (
    <Section
      size={{initial: "1", md: "3"}}
      pl={{initial: "3", md: "0"}}
      pr={{initial: "3", md: "0"}}
      id="blog-wrapper"
    >
      <Container size="4">
        {props.children}
      </Container>
    </Section>
  );
}


export function BlogSection(props: {
  children: any,
  pt?: ResponsivePadding
  pb?: ResponsivePadding
  width?: ResponsiveWidth
}) {
  return (
    <Flex
      pt={props.pt || "1"}
      pb={props.pb || "1"}
      direction={{initial: "column", md: "row"}}
      gap="6"
    >
      {props.children}
    </Flex>
  );
}


export function ContentContainer(props: { children?: any }) {
  return (
    <div className="flex flex-col flex-grow gap-3 relative">
      {props.children}
    </div>
  );
}


export function SidenotesContainer(props: { children?: any }) {
  return (
    <div className="min-w-[300px] max-w-[400px]">
      {props.children}
    </div>
  )
}