import { PieChart, Pie, Cell } from "recharts";

export function TokenomicsSection() {
  const data = [
    { name: "Ecosystem", value: 30, color: "#2e7d32" },
    { name: "Private Sale", value: 12.5, color: "#66bb6a" },
    { name: "CEX Listing", value: 20, color: "#29b6f6" },
    { name: "Founders & Team", value: 10, color: "#5c6bc0" },
    { name: "Founders/Reserve", value: 10, color: "#ab47bc" },
    { name: "Marketing", value: 7, color: "#ffa726" },
    { name: "Advisors", value: 3, color: "#8d6e63" },
    { name: "KOLs", value: 5, color: "#ffd54f" },
    { name: "Public Sale", value: 2.5, color: "#f06292" },
  ];

  return (
    <div className="flex flex-col 2xl:flex-row lg:flex-row lg: justify-between bg-[#f7f6e1] ">
      
      <div className=" lg:w-1/2 flex flex-col justify-center pt-6">
        <h2 className="text-4xl font-extrabold benz-grotesk text-center">Tokenomics of Nige</h2>
        <img
          src="/public/people.png"
          alt="People"
          className="w-full   max-w-lg mx-auto"
        />
      </div>
 
      <div className=" lg:w-1/2 flex justify-center  ">
        <PieChart width={600} height={500}  >
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ name, percent }) =>
              `${name} ${percent ? (percent * 100).toFixed(1) + "%" : ""}`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}
