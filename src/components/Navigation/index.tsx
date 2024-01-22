"use client";

import { Cross1Icon, HamburgerMenuIcon, SunIcon } from "@radix-ui/react-icons";
import { Box, Container, Flex, Heading, IconButton, Section } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import Socials from "@/components/Socials";


const BigLink = (props: { href: string, target?: string, children: any, onClick?: () => void }) => {
  return (
    <Link href={props.href} onClick={props.onClick} target={props.target}>
      <Heading
        size="9"
        className="relative after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer w-min"
      >
        {props.children}
      </Heading>
    </Link>
  );
}


export default function Navigation() {
  const [open, setOpen] = useState(false);

  const onClickLink = () => {
    setOpen(false);
  }

  return (
    <header style={{zIndex: 2000, position: "sticky"}}> 
      <nav style={{width: "100%", borderBottom: "2px solid var(--color-panel-solid)", display: "flex"}}>
        <Flex p="4" gap="4" ml="auto">
          {/* <IconButton size="3" variant="ghost" color="gray">
            <SunIcon width="32" height="32"/>
          </IconButton> */}
          <IconButton size="3" variant="ghost" onClick={() => setOpen(!open)} style={{zIndex: 5000}} color="gray">
            {
              open ?
                <Cross1Icon width="32" height="32"/> :
                <HamburgerMenuIcon width="32" height="32"/>
            }
          </IconButton>
        </Flex>
      </nav>
      <Section style={{
        width: "100vw", height: "100vh", position: "fixed", top: "0px", right: "0px",
        opacity: open ? 1 : 0,
        transition: "opacity 0.25s ease",
        pointerEvents: open ? "all" : "none",
        zIndex: 4000,
        backgroundColor: "var(--color-background)"
      }}>
        <nav style={{display: open ? "inherit" : "none"}}>
          <Container size="1" p={{initial: "4", md: "0"}}>
            <Flex direction="column" gap="6">
              <BigLink href="/" onClick={onClickLink}>About</BigLink>
              <BigLink href="/work" onClick={onClickLink}>Work</BigLink>
              <BigLink href="/writing" onClick={onClickLink}>Writing</BigLink>
              <BigLink href="/tools" onClick={onClickLink}>Triathlon</BigLink>
              <BigLink href="https://resume.io/r/SpKiDZiF1" onClick={onClickLink} target={"_blank"}>CV</BigLink>
              <Flex>
                <Socials size={64} color="white"/>
              </Flex>
            </Flex>
          </Container>
        </nav>
      </Section>
    </header>
  )
}