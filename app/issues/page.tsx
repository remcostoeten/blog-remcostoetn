"use client"

import { Suspense, useEffect, useState } from "react"

import { fetchGithubIssues } from "@/core/lib/fetchGithubIssues"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import IssueTableSkeleton from "@/components/effects/Skeleton"
import Spinner from "@/components/effects/Spinner"
import IntroShell from "@/components/layout/IntroShell"

import RowUi from "./compopnents/RowUi"
import TableToolbar from "./compopnents/TableToolbar"

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true)
      const fetchedTasks = await fetchGithubIssues()
      setTasks(fetchedTasks)
      setFilteredTasks(fetchedTasks)
      setIsLoading(false)
    }

    fetchTasks()
  }, [])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleFilter = (filter: string) => {
    if (filter === "all") {
      setFilteredTasks(tasks)
    } else {
      const filtered = tasks.filter((task) =>
        task.labels.some((label) => label.name === filter)
      )
      setFilteredTasks(filtered)
    }
  }

  return (
    <>
      <IntroShell
        title="Github Issues"
        description="These are all the Github issues fetched through the API regarding this project."
      />
      <Suspense fallback={<Spinner />}>
        <div className="flex flex-col ">
          <TableToolbar onSearch={handleSearch} onFilter={handleFilter} />
          {isLoading ? (
            <div className="mt-4 flex flex-col gap-[5px] ">
              <IssueTableSkeleton />
            </div>
          ) : (
            <Table
              key="1"
              className="divide-y divide-gray-900 !rounded-md border text-white"
            >
              <TableHeader className="[&_tr]:border-b">
                <TableRow>
                  <TableHead className="w-[50px]" />
                  <TableHead className="w-[100px]">Task</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTasks.map((task) => {
                  const priorityLabels = [
                    "Medium priority",
                    "High priority",
                    "Low priority",
                  ]
                  const filteredLabels = task.labels
                    ? task.labels.filter(
                        (label) => !priorityLabels.includes(label.name)
                      )
                    : []
                  const priorityLabel = task.labels
                    ? task.labels.find((label) =>
                        priorityLabels.includes(label.name)
                      )
                    : undefined
                  const strippedPriorityLabel =
                    priorityLabel && priorityLabel.name.replace(" priority", "")
                  return (
                    <RowUi
                      taskId={task.code}
                      labels={filteredLabels}
                      title={task.title}
                      url={task.url}
                      priority={strippedPriorityLabel}
                      onCheckboxChange={() => {
                        console.log(`Checkbox for task ${task.number} changed`)
                      }}
                      dates={[]}
                    />
                  )
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </Suspense>
    </>
  )
}
