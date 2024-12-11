"use client";

import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
} from "recharts";

export default function Dashboard() {
  const chartData = [
    { bookName: "Gênesis", count: 85 },
    { bookName: "Salmos", count: 18 },
    { bookName: "Hebreus", count: 185 },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="py-5 flex w-full justify-evenly flex-wrap gap-y-5">
        <Card className="w-[90%] sm:w-[45%]">
          <ChartContainer
            config={{
              count: {
                label: "Contagem",
              },
            }}
            className="min-h-[200px] w-full"
          >
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="bookName"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#60a5fa" radius={4} />
            </BarChart>
          </ChartContainer>
        </Card>

        <Card className="w-[90%] sm:w-[45%]">
          <ChartContainer
            config={{
              count: {
                label: "Contagem",
              },
            }}
            className="min-h-[200px] w-full"
          >
            <LineChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="bookName"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line dataKey="count" fill="#60a5fa" />
            </LineChart>
          </ChartContainer>
        </Card>

        <Card className="w-[90%] sm:w-[45%]">
          <ChartContainer
            config={{
              count: {
                label: "Contagem",
              },
            }}
            className="min-h-[200px] w-full"
          >
            <PieChart>
              <Pie
                dataKey="count"
                data={chartData}
                fill="#60a5fa"
                innerRadius={50}
                label
              />
              <Tooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </Card>
      </div>
    </div>
  );
}
