import React, { useEffect, useState, useRef } from "react";
import { csv } from "d3";
import { Bar, Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Breadcrumb from "../../components/Breadcrumb";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

var labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

var label2 = [
  "0800",
  "0900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
  "1800",
  "1900",
];

var dataset = {
  1: [],
  2: [2, 56, 97, 21, 87, 34, 65, 87, 21, 46, 42, 86],
  3: [2, 56, 97, 21, 87, 34, 2, 56, 97, 21, 87, 34],
  4: [],
};

var data1 = {
  labels,
  datasets: [
    {
      label: "Number of voters",
      data: [
        65, 59, 80, 81, 56, 59, 80, 81, 56, 34, 56, 76, 65, 59, 80, 81, 56, 59,
        80, 81, 56, 34, 56, 76, 65, 59, 80, 81, 56, 59, 80,
      ],
      backgroundColor: "rgb(235,93,30)",
    },
  ],
};

const data2 = {
  labels: ["Voted", "Not Voted"],
  datasets: [
    {
      label: "Voted Ratio",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

var data3 = {
  labels: label2,
  datasets: [
    {
      label: "Number of voters",
      data: dataset[1],
      backgroundColor: "rgb(235,93,30)",
    },
  ],
};

var options1 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Number of people voted per day Chart",
    },
  },
};

var options2 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Number of people voted per hour Chart",
    },
  },
};

var options3 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Voting Ratio",
    },
  },
};

const Dashboard = () => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  const chartRef = useRef();
  const chartRef2 = useRef();

  useEffect(() => {
    setData(data1);
    setOptions(options1);
  }, []);

  const forecast = () => {
    console.log("forcasting...");
    const chart = chartRef.current;
    if (document.getElementsByClassName("forecast")[0].textContent == "Forecast") {
      document.getElementsByClassName("forecast")[0].textContent = "Normal";
      chart.data.labels = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15,
      ];
      chart.data.datasets[0].data = [
        65, 59, 80, 81, 56, 59, 80, 81, 56, 34, 56, 76, 65, 59, 80, 81, 56, 59,
        80, 81, 56, 34, 56, 76, 65, 59, 80, 81, 56, 59, 80, 56, 59, 80, 81, 56,
        34, 56, 76, 65, 59, 80, 81, 56, 59, 80,
      ];
      chart.options.plugins.title.text =
        "Prediction for the number of votes next month";
    } else {
      document.getElementsByClassName("forecast")[0].textContent = "Forecast";
      chart.data = data1;
      chart.options = options1;
    }
    
    chart.update();
  };

  const changeFilter = (event) => {
    console.log("filtering...", event.target.value);
    const chart = chartRef2.current;
    chart.data.datasets[0].data = dataset[event.target.value];
    chart.update();
  };

  // if (Object.keys(data).length < 1) {
  //   console.log("rendering");
  //   return null;
  // }

  return (
    <>
      <Breadcrumb name="Dashboard" />

      <section
        id="services"
        className="allResults attendance dashboard section-bg bvsStyle"
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>Vote Dashboard</p>
          </div>
          <ul class="nav nav-tabs">
            <li class="nav-item graphSelect">
              <a href="#" class="nav-link active">
                Statistic
              </a>
            </li>
            <li class="nav-item tableSelect">
              <a href="#" class="nav-link">
                Table
              </a>
            </li>
          </ul>
          <div className="graphTab tabContent tabActive">
            <div className="row justify-content-between">
              <div className="col-3">
                <div className="icon-box">
                  <div className="title">Number of people who voted</div>
                  <div className="icon">256</div>
                  <div className="underbox">
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="icon-box">
                  <div className="title">Number of people who havent voted</div>
                  <div className="icon">436</div>
                  <div className="underbox">
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="icon-box">
                  <div className="title">Turn Up Rate</div>
                  <div className="icon">56%</div>
                  <div className="underbox">
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="icon-box">
                  <div className="title">Average Voting Time Range</div>
                  <div className="icon">1pm-2pm</div>
                  <div className="underbox">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row chart" style={{ marginTop: "50px" }}>
              <a
                id="btn-bvs"
                onClick={forecast}
                className="btn-get-started scrollto forecast"
              >
                Forecast
              </a>

              <Line ref={chartRef} options={options1} data={data1} />
            </div>
            <div className="row chart" style={{ marginTop: "50px" }}>
              <div className="col-8">
                <select
                  onChange={changeFilter}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>-- Select Time --</option>
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <Bar ref={chartRef2} options={options2} data={data3} />
              </div>
              <div className="col-4">
                <Pie data={data2} options={options3} />
              </div>
            </div>
          </div>
          <div className="tableTab tabContent">
            <div class="table-responsive custom-table-responsive">
              <table class="table custom-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">NRIC</th>
                    <th scope="col">Vote Time</th>
                    <th scope="col">Vote Status</th>
                  </tr>
                </thead>
                <tbody className="paginationAll">
                  <tr scope="row">
                    <td>1</td>
                    <td>S2034345J</td>
                    <td>16/5/2022 14:56</td>
                    <td>
                      <i class="bx bx-checkbox-square"></i>
                    </td>
                  </tr>
                  <tr class="spacer">
                    <td colspan="100"></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>S2034345J</td>
                    <td>16/5/2022 14:56</td>
                    <td>
                      <i class="bx bx-checkbox-square"></i>
                    </td>
                  </tr>
                  <tr class="spacer">
                    <td colspan="100"></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>S2036645J</td>
                    <td>-</td>
                    <td>
                      <i class="bx bx-checkbox"></i>
                    </td>
                  </tr>
                  <tr class="spacer">
                    <td colspan="100"></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>S2034325J</td>
                    <td>-</td>
                    <td>
                      <i class="bx bx-checkbox"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pageNum">
              <span>1/1</span> page
            </div>
            <div className="pagination" style={{ margin: "8px 0" }}>
              <div className="pageIcon leftIcon">
                <i class="bx bx-left-arrow"></i>
              </div>
              <div className="pageIcon rightIcon">
                <i class="bx bx-right-arrow"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
