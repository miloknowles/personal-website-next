"use client";

import React, { useEffect } from "react";


interface RefProps {
  children: any
  id: string
}

export function Ref({ children, id } : RefProps) {
  return (
    <sup id={id}>{children}</sup>
  );
}

interface SidenoteProps {
  children: any
  refTag: string
  refId: string
  sideBreakpoint?: string
}

export function Sidenote({ children, refId, refTag, sideBreakpoint }: SidenoteProps) {
  return (
    <div className={`text-xs hidden static lg:absolute py-2`} data-ref-id={refId} id={`sidenote-${refId}`}>
      <sup className="pr-1">({refTag})</sup>
      {children}
    </div>
  );
}

interface SidenoteAutoLayoutProps {
  children: any
  gapPx?: number
}

export function SidenoteAutoLayout({ children, gapPx }: SidenoteAutoLayoutProps) {
  // @ts-ignore
  const arrayChildren: React.ReactElement<SidenoteProps>[] = React.Children.toArray(children);

  useEffect(() => {
    // Keep track of the end of the previous sidenote to avoid overlap.
    let minY = 0;

    arrayChildren.forEach((child) => {
      const wrapper = document.getElementById("blog-wrapper");
      const element = document.getElementById(`sidenote-${child.props.refId}`);
      const ref = document.getElementById(child.props.refId);

      if (!element || !ref || !wrapper) {
        console.error(`Could not find footnote with refId '${child.props.refId}'`)
        return;
      }

      // Don't go below the bottom of the body text.
      const maxY = wrapper.clientHeight - element.offsetHeight - (gapPx || 0);
      const top = Math.min(maxY, Math.max(ref.offsetTop, minY));
      element.style.top = `${top}px`;

      // Become visible after positioning is done to prevent jumpy appearance.
      element.classList.remove("hidden");

      minY = top + element.offsetHeight + (gapPx || 0);
    })
  }, []);

  return (
    <div className="relative">
      {children}
    </div>
  );
}