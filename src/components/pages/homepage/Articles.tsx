"use client";

import { AnimatedLink } from "@/components/core/Link";
import SectionHeading from "@/components/core/layout/SectionHeading";
import SectionSubHeading from "@/components/core/layout/SectionSubHeading";
import { LoadingArticle } from "@/components/effects/Skeleton";
import { useRef } from "react";
import { HiOutlineNewspaper } from "react-icons/hi";

export default function LatestArticle() {
  const scrollContainer = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  function handleMouseDown(e) {
    isDown = true;
    startX = e.pageX - scrollContainer.current.offsetLeft;
    scrollLeft = scrollContainer.current.scrollLeft;
  }

  function handleMouseLeave() {
    isDown = false;
  }

  function handleMouseUp() {
    isDown = false;
  }

  function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  }

  return (
    <section className="container items-center gap-6 !p-0 md:grid ">
      <div className="space-y-2">
        <SectionHeading
          title="Latest Articles"
          icon={<HiOutlineNewspaper className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            Some snippets, thoughts, rants over at {""}
            <AnimatedLink
              border="dashed"
              href="https://snippets.remcostoeten.com"
              className="underline"
            >
              snippets.remcostoeten.com
            </AnimatedLink>
          </p>
        </SectionSubHeading>
      </div>
      <div
        className="scroll-container"
        ref={scrollContainer}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div className="loading-article mt-4" key={index}>
              <LoadingArticle />
            </div>
          ))}
      </div>
    </section>
  );
}
