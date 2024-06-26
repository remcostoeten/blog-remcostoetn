import LabelPill from "./LabelPill";
import { IssueRowProps } from "./types";
import { SkeletonBar } from "@/components/effects/Skeleton";
import { Icons } from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate, lightenColor } from "@/core/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function IssueRow({
  taskId,
  dates,
  labels,
  title,
  url,
  priority,
  onCheckboxChange,
}: IssueRowProps) {
  return (
    <Suspense fallback={<SkeletonBar />}>
      <TableRow className="border-b transition-colors hover:bg-muted/15 data-[state=selected]:bg-muted">
        <TableCell>
          <Checkbox onChange={onCheckboxChange} />
        </TableCell>
        <TableCell className="flex flex-col  text-left font-medium">
          <span>{taskId}</span>
          {dates &&
            dates.map((date) => {
              return <span className="text-[12px]">{formatDate(date)}</span>;
            })}
        </TableCell>
        <TableCell>
          <span className="flex items-center justify-between text-left">
            <Tooltip>
              <TooltipTrigger className="text-left">
                <Link target="_blank" href={url ? url : "#"}>
                  {title.slice(0, 50)}
                  {title.length > 33 ? "..." : ""}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <Link href={url ? url : "#"}>{title}</Link>
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-2">
              {labels &&
                labels.map((label, index) => (
                  <LabelPill
                    key={index}
                    label={label.name}
                    color={lightenColor(`#${label.color}`, 55)}
                    background={lightenColor(`#${label.color}`, 0)}
                    borderColor={lightenColor(`#${label.color}`, 0)}
                  >
                    {label.name}
                  </LabelPill>
                ))}
            </div>
          </span>
        </TableCell>
        <TableCell>
          <span className="flex items-center ">
            {priority?.toLowerCase() === "low" && (
              <Icons.arrowBottom className="size-4" />
            )}
            {priority?.toLowerCase() === "medium" && (
              <Icons.arrowRight className="size-4" />
            )}
            {priority?.toLowerCase() === "high" && (
              <Icons.arrowTop className="size-4" />
            )}
            <span>{priority}</span>
          </span>
        </TableCell>
      </TableRow>
    </Suspense>
  );
}
