import React, { useEffect, useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("chart.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, [chartData]);
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 240 },
    { name: "Page A", uv: 400, pv: 2400, amt: 24000 },
    { name: "Page A", uv: 400, pv: 2400, amt: 200 },
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 400, pv: 2400, amt: 24500 },
  ];

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-center py-2 text-primary">MONTH WISE SELL</h4>
            <ComposedChart width={400} height={250} data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area
                type="monotone"
                dataKey="sell"
                fill="#8884d8"
                stroke="#8884d8"
              />
              {/* <Bar dataKey="sell" barSize={20} fill="#413ea0" /> */}
              {/* <Line type="monotone" dataKey="revenue" stroke="#ff7300" /> */}
            </ComposedChart>
          </div>
          <div className="col-lg-6">
            <h4 className="text-center py-2 text-primary">
              Investment VS Revenue{" "}
            </h4>

            <ComposedChart width={400} height={250} data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area
                type="monotone"
                // dataKey="sell"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="investment" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
