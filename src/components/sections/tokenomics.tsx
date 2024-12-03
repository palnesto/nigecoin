import React from "react";
import { PieChart, Pie, Cell, Text } from "recharts";
import { ChartComponent } from "../chart";

interface DataEntry {
  name: string;
  value: number;
  color: string;
}

const data: DataEntry[] = [
  { name: "Ecosystem", value: 30, color: "#006400" },
  { name: "Private Sale", value: 12.5, color: "#00FF00" },
  { name: "KOLs", value: 5, color: "#ADFF2F" },
  { name: "CEX Listing", value: 20, color: "#00FFFF" },
  { name: "Public Sale", value: 2.5, color: "#0BB18E" },
  { name: "Founders/Reserve", value: 10, color: "#1E90FF" },
  { name: "Founders & Team", value: 10, color: "#0000FF" },
  { name: "Marketing", value: 7, color: "#7FFF00" },
  { name: "Advisors", value: 3, color: "#32CD32" },
];

interface CustomLabelProps {
  x?: number;
  y?: number;
  name?: string;
  percent?: number;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ x, y, name, percent }) => {
  const percentage = percent != null ? (percent * 100).toFixed(1) : "0"; // Use a fallback value of "0" if percent is undefined

  let adjustedX = x;
  let adjustedY = y;

  // Example adjustment for large percentages
  if (percent && percent > 0.1) {
    adjustedX = x! - 80; // Move label to the right if percent is greater than 10%
    adjustedY = y! - 23; // Move label upwards if percent is greater than 10%
  }

  return (
    <>
      <Text
        x={adjustedX}
        y={adjustedY}
        fill="black"
        fontSize={18}
        textAnchor="start"
        verticalAnchor="end"
      >
        {name}
      </Text>

      <Text
        x={adjustedX}
        y={adjustedY! + 20} // Adjust to add space between name and percentage
        fill="black"
        fontSize={16}
        textAnchor="start"
        verticalAnchor="end"
      >
        {`${percentage}%`}
      </Text>
    </>
  );
};

export const TokenomicsSection: React.FC = () => {
  return (
    <section
      className="h-full flex flex-col 2xl:flex-row lg:flex-row lg:justify-between bg-[#f7f6e1]"
      id="tokenomics"
    >
      <div className=" lg:w-1/2 flex flex-col justify-between">
        <h2 className="text-4xl font-extrabold benz-grotesk text-center pt-20 md:text-5xl xl:text-6xl  ">
          Tokenomics of Nige
        </h2>
        <img
          src="/people.png"
          alt="People"
          className="w-full xl:w-[40vw] mx-auto"
        />
      </div>

      <div className="lg:w-1/2 flex justify-center w-full">
        <ChartComponent />
      </div>
    </section>
  );
};
