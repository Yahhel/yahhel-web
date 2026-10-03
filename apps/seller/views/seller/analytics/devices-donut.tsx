"use client"

import { Pie, PieChart } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui/components/ui/chart"
import type { DEVICE_BREAKDOWN } from "@/lib/analytics"

const chartConfig = {
  mobile: { label: "Mobile", color: "#C8893A" },
  desktop: { label: "Desktop", color: "#1A6B52" },
  tablet: { label: "Tablet", color: "#E5E0DC" },
} satisfies ChartConfig

export function DevicesDonut({ data }: { data: typeof DEVICE_BREAKDOWN }) {
  const chartData = data.map((d) => ({
    device: d.label.toLowerCase(),
    value: d.value,
    fill: `var(--color-${d.label.toLowerCase()})`,
  }))

  return (
    <ChartContainer config={chartConfig} className="aspect-square h-[140px]">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel className="bg-white border-[0.8px] border-[#E5E0DC99] text-[#1D1816] text-xs shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)]" />} />
        <Pie data={chartData} dataKey="value" nameKey="device" innerRadius={42} outerRadius={60} paddingAngle={2} />
      </PieChart>
    </ChartContainer>
  )
}