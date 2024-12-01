import { PieChart, Pie, Cell } from "recharts";

export function TokenomicsSection() {
  const data = [
    { name: "Ecosystem", value: 30, color: "#1A7338" },
    { name: "Private Sale", value: 12.5, color: "#00B53E" },
    { name: "CEX Listing", value: 20, color: "#09C1E0" },
    { name: "Founders & Team", value: 10, color: "#09C1E0" },
    { name: "Founders/Reserve", value: 10, color: "#5271FF" },
    { name: "Marketing", value: 7, color: "#004AAD" },
    { name: "Advisors", value: 3, color: "#7ED763" },
    { name: "KOLs", value: 5, color: "#C0FF72" },
    { name: "Public Sale", value: 2.5, color: "#0BB18E" },
  ];

  return (
    <div
      className="flex flex-col 2xl:flex-row lg:flex-row lg: justify-between bg-[#f7f6e1]"
      id="tokenomics"
    >
      <div className=" lg:w-1/2 flex flex-col justify-center pt-6">
        <h2 className="text-4xl font-extrabold benz-grotesk text-center xl:text-6xl xl:pt-10">
          Tokenomics of Nige
        </h2>
        <img
          src="/people.png"
          alt="People"
          className="w-full xl:w-[40vw]   mx-auto"
        />
      </div>

      <div className=" lg:w-1/2 flex justify-center  ">
        <PieChart width={800} height={800}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            fontSize={17}
            outerRadius={250}
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
