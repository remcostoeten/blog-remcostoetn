"use client"

import GitLabCommits from "@/components/core/data/GitlabIssues"
import GitlabIssues from "@/components/core/data/GitlabIssues"
import WIPToast from "@/components/effects/InProgressToast"
import LatestArticle from "@/components/layout/homepage/Articles"
import Intro from "@/components/layout/homepage/Intro"

export default function IndexPage() {
  return (
    <>
      <WIPToast />
      <GitLabCommits />
      <section className="container items-center gap-2 !p-0 md:grid ">
        <Intro />
        <LatestArticle />
      </section>
    </>
  )
}
