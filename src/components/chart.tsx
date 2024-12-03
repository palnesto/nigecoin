import { useEffect, useRef, useState } from "react";
import { Pie, PieChart, Cell } from "recharts";
import { ChartContainer, ChartTooltip } from "./ui/chart";

const data = [
  {
    name: "Ecosystem",
    value: 30,
    tooltipData: {
      Allocation: "300,000,000 $NIGE",
      Vesting: "Locked for 6 months, with linear vesting over 36 months.",
      
    },
  },
  {
    name: "Founders/Reserve",
    value: 10,
    tooltipData: {
      Allocation: "100,000,000 $NIGE",
      Vesting: "Locked for 12 months, with linear vesting over 30 months.",
      
    },
  },

  {
    name: "KOLs",
    value: 5,
    tooltipData: {
      Allocation: "50,000,000 $NIGE",
      Vesting: "20% released at TGE, followed by a 3-month lockup, with linear vesting over 36 months.",
      Pricing: "0.0001 SOL per token",
    },
  },
  {
    name: "CEX Listing",
    value: 20,
    tooltipData: {
      Allocation: "200,000,000 $NIGE",
      Vesting: " Locked for 3 months, with linear vesting over 36 months.",
      
    },
  },
  {
    name: "Private Sale",
    value: 12.5,
    tooltipData: {
      Allocation: "125,000,000 $NIGE",
      Vesting: " 20% released at the Token Generation Event (TGE), followed by a 3-month lockup, with linear vesting over 36 months.",
      Pricing: "0.0001 SOL per token",
    },
  },
  {
    name: "Public Sale",
    value: 2.5,
    tooltipData: {
      Allocation: "25,000,000 $NIGE",
      Vesting: "25% released at TGE with the remaining tokens vested linearly over 6 months.",
      Pricing: "0.0002 SOL per token",
    },
  },

  {
    name: "Founders & Team",
    value: 10,
    tooltipData: {
      Allocation: "100,000,000 $NIGE",
      Vesting: " Locked for 12 months, with linear vesting over 30 months.",
    
    },
  },
  {
    name: "Marketing",
    value: 7,
    tooltipData: {
      Allocation: "70,000,000 $NIGE",
      Vesting: " Locked for 3 months, with linear vesting over 36 months.",
      
    },
  },
  {
    name: "Advisors",
    value: 3,
    tooltipData: {
      Allocation: "30,000,000 $NIGE",
      Vesting: "Locked for 12 months, with linear vesting over 30 months.",
      
    },
  },
];

type ChartConfigKey =
  | "Ecosystem"
  | "Private Sale"
  | "KOLs"
  | "CEX Listing"
  | "Public Sale"
  | "Founders/Reserve"
  | "Founders & Team"
  | "Marketing"
  | "Advisors";

type ChartConfig = Record<ChartConfigKey, { label: string; color: string }>;

const chartConfig: ChartConfig = {
  Ecosystem: {
    label: "Ecosystem",
    color: "hsl(var(--chart-1))",
  },
  "Private Sale": {
    label: "Private Sale",
    color: "hsl(var(--chart-2))",
  },
  KOLs: {
    label: "KOLs",
    color: "hsl(var(--chart-3))",
  },
  "CEX Listing": {
    label: "CEX Listing",
    color: "hsl(var(--chart-4))",
  },
  "Public Sale": {
    label: "Public Sale",
    color: "hsl(var(--chart-5))",
  },
  "Founders/Reserve": {
    label: "Founders/Reserve",
    color: "hsl(var(--chart-6))",
  },
  "Founders & Team": {
    label: "Founders & Team",
    color: "hsl(var(--chart-7))",
  },
  Marketing: {
    label: "Marketing",
    color: "hsl(var(--chart-8))",
  },
  Advisors: {
    label: "Advisors",
    color: "hsl(var(--chart-9))",
  },
};

export function ChartComponent() {
  const [width, setWidth] = useState(0);

  const containerRef = useResizeObserver<HTMLDivElement>((entry) => {
    setWidth(entry.contentRect.width); // Dynamically adjust based on width
  });

  const scaledWidth = width * 0.9; // Reduce width by 10%

  const getOuterRadius = (width: number) => {
    // Define breakpoints and adjust outer radius based on screen size
    if (width <= 400) {
      return "40%"; // Small screens
    } else if (width <= 768) {
      return "49%"; // Medium screens
    } else {
      return "60%"; // Large screens
    }
  };

  const outerRadius = getOuterRadius(width);

  if (!width) {
    return <div ref={containerRef} className="w-full h-auto aspect-square" />;
  }

  return (
    <div ref={containerRef} className="w-full h-auto aspect-square">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <PieChart width={scaledWidth} height={scaledWidth}>
          <ChartTooltip content={<CustomTooltip data={data} />} />
          <Pie
            data={data}
            dataKey="value"
            labelLine={false}
            label={({ payload, ...props }) => (
              <text
                cx={props.cx}
                cy={props.cy}
                x={props.x}
                y={props.y}
                width={props.width}
                textAnchor={props.textAnchor}
                dominantBaseline={props.dominantBaseline}
                fill="hsla(var(--foreground))"
                className="text-xs font-semibold"
              >
                {`${payload.name}\n${payload.value}%`}
              </text>
            )}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={outerRadius} // Use the dynamically calculated outerRadius
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  chartConfig[entry.name as keyof typeof chartConfig]?.color ||
                  "hsl(var(--gray-500))"
                }
              />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
function CustomTooltip({ active, payload, data }: any) {
  if (active && payload && payload.length) {
    const { name } = payload[0].payload;
    const tooltipData = data.find(
      (entry: any) => entry.name === name
    )?.tooltipData;

    if (tooltipData) {
      return (
        <div className="bg-white p-2 rounded shadow-md text-xs">
          <p className="font-bold">{name}</p>
          {Object.entries(tooltipData).map(([key, value]) => (
            <p key={key} className="text-gray-600">
              <span className="font-semibold">{key}:</span> {value as number}
            </p>
          ))}
        </div>
      );
    }
  }

  return null;
}

function useResizeObserver<T extends HTMLElement>(
  callback: (entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => callback(entry));
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return ref;
}
