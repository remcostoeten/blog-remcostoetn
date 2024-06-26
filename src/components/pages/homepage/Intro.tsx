"use client";

import Link, { AnimatedLink } from "@/components/core/Link";
import CustomTooltip from "@/components/effects/CustomTooltip";
import { TypewriterEffectSmooth } from "@/components/effects/typewriter";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Intro() {
  return (
    <div className="mx-auto intro max-w-4xl">
      <div>
        <h1 className="font-sora flex gap-2   text-2xl font-medium lg:text-3xl mb-4 text-gray-100 ">
          Hi, I&apos;m Remco Stoeten{""}
          <span aria-label="waving hand" className="wave" role="img">
            👋
          </span>
        </h1>
      </div>
      <div className="mt-2">
        <ul className="flex list-disc flex-col gap-1  text-neutral-700 lg:flex-row lg:gap-8 dark:text-neutral-400 !smpl0 pl-4 ">
          <li>Front-end Engineer a.k.a divvjesschuiver</li>
          <li>
            <Tooltip>
              <TooltipTrigger className="flex text-left gap-2">
                Based in Lemmer, the Netherlands{" "}
                <span
                  className="hidden sm:flex"
                  aria-label="Dutch flag"
                  role="img"
                >
                  🇳🇱
                </span>
              </TooltipTrigger>
              <TooltipContent>But remote is ❤️</TooltipContent>
            </Tooltip>
          </li>
        </ul>
        <p className="mt-4 leading-[1.8] text-neutral-800 md:leading-loose dark:text-neutral-300">
          I am a recovering{" "}
          <CustomTooltip
            triggerClassName="tooltip-border"
            trigger="ex-Magento developer"
            AnimatedAnchor={true}
            content="those 5 years of magento were hard, but i survived ❤️

"
          />{" "}
          and currently building open source software at{" "}
          <AnimatedLink
            brightness="low"
            border="dashed"
            href="https://gitlab.com/pleio/frontend"
            target="_blank"
          >
            Pleio
          </AnimatedLink>
          . Primarily working with TypeScript & Next.js, have done a little
          Python, Shell & Lua, and want to learn Go, OCaml, and, and and and....
          ⌛
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
}
