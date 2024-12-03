import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ChartComponent() {
  return (
    <div className="bg-orange-500 grid place-content-center w-full aspect-square h-full">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[400px] px-0 h-[300px] xs:[300px] sm:h-[100%]"
      >
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="bg-white"
                nameKey="visitors"
                hideLabel
              />
            }
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            labelLine={false}
            label={({ payload, ...props }) => {
              return (
                <text
                  cx={props.cx}
                  cy={props.cy}
                  x={props.x}
                  y={props.y}
                  textAnchor={props.textAnchor}
                  dominantBaseline={props.dominantBaseline}
                  fill="hsla(var(--foreground))"
                >
                  {payload.visitors}
                </text>
              );
            }}
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
