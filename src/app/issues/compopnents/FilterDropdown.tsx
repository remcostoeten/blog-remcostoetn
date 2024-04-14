"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/core/lib/utils";
import LabelPill from "./LabelPill";

const labels = [
  "Enhancement",
  "UI",
  "Bug",
  "Feature",
  "Table",
  "Content",
  "Feature",
  "Seo",
  "Bll",
];

export default function LabelFilter({ selectedLabels, onSelect }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="    box"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? labels.find((label) => label === value) : "Filter label..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Filter on label..." />
          <CommandEmpty>No labels found.</CommandEmpty>
          <CommandGroup>
            {labels.map((label, index) => (
              <CommandItem
                key={index}
                value={label}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  onSelect(label);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedLabels?.includes(label)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                <LabelPill>{label}</LabelPill>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
