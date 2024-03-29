import { Card } from "@/components/ui/card"
import AnimateCounter from "@/components/effects/AnimationCounter"

interface OverviewItemProps {
  label: string
  value: any
  unit?: string
  loading?: boolean
}

const OverviewItem = ({
  label,
  value,
  unit = "",
  loading = false,
}: OverviewItemProps) => (
  <Card className="grid--card flex flex-col self-center rounded-xl py-3 px-4 border bg">
    <span className="text-sm dark:text-neutral-400">{label}</span>
    <div>
      <AnimateCounter
        className="text-xl lg:text-2xl font-medium text-green-600"
        total={value}
      />
      {unit && <span className="text-sm dark:text-neutral-400"> {unit}</span>}
    </div>
  </Card>
)

export default OverviewItem
