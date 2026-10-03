// components/analytics/traffic-chart.tsx
"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@repo/ui/components/ui/chart"
import type { TRAFFIC_SERIES } from "@/lib/analytics"

const chartConfig = {
  visits: {
    label: "Visits",
    color: "#C8893A",
  },
  buyers: {
    label: "Buyers",
    color: "#1A6B52",
  },
} satisfies ChartConfig

export function TrafficChart({ data }: { data: typeof TRAFFIC_SERIES }) {
  return (
    <ChartContainer config={chartConfig} className="h-65 w-full">
      <AreaChart data={data} margin={{ left: -20, right: 10 }}>
        <defs>
          <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-visits)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="var(--color-visits)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="FFFFFF" />
        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} tick={{ fill: "#9A9085" }} />
        <YAxis tickLine={false} axisLine={false} fontSize={10} tick={{ fill: "#9A9085" }} />
        <ChartTooltip content={<ChartTooltipContent indicator="dot" className="bg-white text-[#1D1816] text-xs border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)]" />} />
        <Area
          dataKey="visits"
          type="monotone"
          stroke="var(--color-visits)"
          strokeWidth={2}
          fill="url(#visitsFill)"
        />
        <Area
          dataKey="buyers"
          type="monotone"
          stroke="var(--color-buyers)"
          strokeWidth={2}
          fill="transparent"
        />
      </AreaChart>
    </ChartContainer>
  )
}