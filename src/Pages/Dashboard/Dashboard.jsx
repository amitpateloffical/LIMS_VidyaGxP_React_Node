/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "../Dashboard/Dashboard.css";
// import { CChart, CChartBar, CChartLine } from "@coreui/react-chartjs";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LineChart from "echarts-for-react";
import { Gauge } from "@mui/x-charts/Gauge";


function Dashboard(props) {
  useEffect(() => {
    if (props.show) {
      toast.success("Login successfully");
      props.setToast(false);
    }
  }, [props.show]);

  const latestProducts = [
    "Apixaban",
    "Glass",
    "Hydraulic Oil",
    "chpoil",
    "chpoil",
    "chpoil",
    "chpoil",
    "Feliconar",
  ];

  const ARNumber = [
    "ARPC0000099",
    "ARPC0000098",
    "ARPC0000097",
    "ARPC0000096",
    "ARFFT0000094",
    "ARRW0000093",
    "ARRW0000093",
    "ARFFT0000091",
  ];

  const pieChartOptions = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Initiated", "Completed", "Pending", "Dropped"],
    },
    series: [
      {
        name: "Status",
        type: "pie",
        radius: "50%",
        data: [
          { value: 10, name: "Initiated" }, // sum of all "Initiated" data
          { value: 8, name: "Completed" }, // sum of all "Completed" data
          { value: 68, name: "Pending" }, // sum of all "Pending" data
          { value: 0, name: "Dropped" }, // sum of all "Dropped" data
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  };

  const funnelOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      data: ["Material Status"],
    },
    series: [
      {
        name: "Material Status",
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        data: [
          { value: 60, name: "Visit" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
          { value: 100, name: "Show" },
        ],
      },
    ],
  };

  const analysisOptions = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Initiated", "Completed", "Pending", "Dropped"],
    },
    grid: {
      show: false,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      data: [
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
      ],
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Initiated",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          0, 0, 5, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 1,
        ],
      },
      {
        name: "Completed",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1,
          0, 1, 0, 0, 0,
        ],
      },
      {
        name: "Pending",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          3, 1, 3, 4, 7, 1, 2, 1, 0, 1, 1, 1, 1, 2, 2, 11, 2, 8, 1, 1, 1, 7, 8,
          1, 18, 2, 2, 2,
        ],
      },
      {
        name: "Dropped",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0,
        ],
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  };

  const materialOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Material"],
    },
    grid: {
      show: false,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        show: true,
      },
      data: [
        "16 Jun 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "12 Feb 2023",
        "22 Mar 2023",
      ],
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Material",
        type: "bar",
        stack: "Total",
        color: "#0089c8",
        data: [
          1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 3,
          2, 2, 1, 1, 2, 2, 1, 1, 2, 2,
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  };

  const productWiseTestStatsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "1%",
      right: "5%",
      top: "10%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: {
      name: "Product",
      type: "category",
      boundaryGap: [0, 0.01],
      axisLabel: {
        rotate: 45,
        interval: 0,
      },
      data: [
        "Formulation Analysis",
        "Impurity Profiling",
        "Potency Testing",
        "Dissolution Testing",
        "Stability Testing",
        "Bioavailability Assessment",
        "Microbiological Testing",
        "Extractable and Leachable Studies",
        "Process Validation",
        "Method Development and Validation",
        "Particle Size Analysis",
        "Container Closure Integrity Testing",
        "Water Content Determination",
        "Residual Solvents Analysis",
        "Toxicological Studies",
        "Excipient Compatibility Testing",
        "Pharmacokinetic Analysis",
        "Pharmacodynamic Evaluation",
        "Biowaivers Assessment",
        "Container Material Compatibility",
        "Photostability Testing",
        "Forced Degradation Studies",
        "Reference Standard Qualification",
        "Sterility Testing",
        "Endotoxin Testing",
      ],
    },
    yAxis: {
      type: "value",
      name: "Tests",
    },
    series: [
      {
        name: "Test Registered",
        type: "bar",
        data: [
          6, 8, 3, 2, 5, 1, 7, 9, 4, 3, 7, 2, 4, 1, 9, 5, 8, 6, 2, 5, 4, 3, 1,
          7, 9,
        ],
        itemStyle: {
          color: "#0089c8",
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        name: "Test Executed",
        type: "bar",
        data: [
          0, 0, 1, 2, 2, 0, 0, 1, 7, 0, 5, 0, 3, 2, 4, 2, 0, 2, 2, 0, 4, 6, 8,
          1, 0,
        ],
        itemStyle: {
          color: "#ffada4",
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 10,
        bottom: "5%",
      },
    ],
  };

  const testWiseStatsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "1%",
      right: "5%",
      top: "10%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      name: "Products",
      boundaryGap: [0, 0.01],
      axisLabel: {
        rotate: 45,
        interval: 0,
      },
      data: [
        "Formulation Analysis",
        "Pharmacodynamic Evaluation",
        "In Silico Modeling and Simulation",
        "Process Optimization",
        "Potency Testing",
        "Toxicological Studies",
        "Microbiological Testing",
        "In Vitro Diagnostics",
        "Genomic Biomarker Analysis",
        "Pharmacogenomics Analysis",
        "Drug Delivery Systems",
        "Clinical Endpoint Assessment",
        "Environmental Monitoring",
        "Sterility Testing",
        "Bacterial Endotoxin Testing (BET)",
        "Biological Product Characterization",
        "Excipient Selection",
        "Tablet Hardness Testing",
        "Pharmaceutical Packaging",
        "Solubility Testing",
        "Pharmacogenetics Testing",
        "Genotoxicity Studies",
        "Pharmacovigilance Monitoring",
        "Pharmacogenetics Profiling",
        "Bioavailability Assessment",
        "Inhalation Toxicology",
        "Description",
        "Lyophilization Cycle Optimization",
        "Method Development and Validation",
        "Quality Control Measures",
        "Endotoxin Testing",
        "Single Maximum unknown impurity Mirabegron",
        "Special Gravity",
        "Post-Marketing Surveillance",
        "Cell Culture Studies",
        "Sterilization Validation",
        "Process Validation",
        "Bioequivalence Studies",
        "Pharmacoeconomic Evaluation",
        "Pharmaceutical Marketing",
        "Quality by Design (QbD) Implementation",
        "Mirabegron (As Extended Release)...25mg",
        "Regulatory Compliance",
        "Pharmacokinetic Analysis",
        "Extractable and Leachable Studies",
        "Total Acid Number (TAN)",
        "Nanoparticle Characterization",
        "Analytical Method Development",
        "Impurity Profiling",
        "In Vitro-In Vivo Correlation",
        "Pharmaceutical Development",
        "Total Impurities",
        "Formulation Development",
        "Freeze-Thaw Testing",
        "Drug Product Development",
        "Pharmacokinetic Modeling",
        "Immunogenicity Testing",
        "Biowaivers Assessment",
        "Assay",
        "Reference Standard Qualification",
        "Dissolution Testing",
        "Pharmaceutical Testing",
        "Clinical Development",
        "Color Test",
        "FG Assya Text",
        "Pharmacogenomics Analysis",
      ],
    },
    yAxis: {
      type: "value",
      name: "Tests",
    },
    series: [
      {
        name: "Test Planned",
        type: "line",
        data: [
          6, 3, 1, 3, 4, 4, 3, 1, 9, 1, 8, 4, 6, 3, 7, 6, 4, 2, 2, 3, 6, 1, 9,
          3, 2, 7, 3, 5, 9, 1, 4, 6, 2, 1, 4, 5, 8, 2, 3, 7, 4, 9, 6, 3, 2, 8,
          6, 1, 14, 9, 3, 2, 7, 3, 5, 9, 1, 4, 6, 2, 1, 4, 5, 8, 2, 3, 7, 4, 9,
          6, 3,
        ],
        itemStyle: {
          color: "#0089c8",
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        name: "Test Executed",
        type: "bar",
        data: [
          2, 7, 4, 1, 8, 3, 6, 5, 9, 0, 4, 8, 1, 6, 2, 3, 7, 9, 5, 0, 3, 9, 4,
          5, 6, 1, 0, 2, 7, 8, 6, 0, 2, 7, 1, 9, 5, 4, 8, 3, 8, 2, 5, 7, 0, 9,
          3, 6, 1, 4, 4, 3, 1, 0, 8, 2, 6, 9, 7, 5, 7, 1, 6, 5, 4, 8, 0, 3, 9,
          2, 2, 9, 6, 1, 7, 5, 4, 8, 0, 3,
        ],
        itemStyle: {
          color: "#ffada4",
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 10,
        bottom: "5%",
      },
    ],
  };

  return (
    <>
      <div id="dashboard" className="m-3 ">
        <div className="sub-head mb-4">
          <div className="title fs-5 fw-bolder">Dashboard</div>
        </div>

        <div className="flex flex-wrap justify-around " id="Material">
          <div
            className="shadow-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-[280px] h-[160px]"
            style={{
              backgroundImage:
                'url("https://media.istockphoto.com/id/1410455925/vector/dynamic-blue-particle-wave-abstract-sound-visualization-digital-structure-of-the-wave-flow.jpg?s=612x612&w=0&k=20&c=RL7do3aEvte0cKukjC30eHQ4nujXUIOa2TvQbIN8eKw=")',
            }}
          >
            <div className="text-white text-sm">On Going Test</div>
            <div className="text-2xl text-white font-bold">277</div>
          </div>

          <div
            className="shadow-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-[280px] h-[160px]"
            style={{
              backgroundImage:
                "url('https://c4.wallpaperflare.com/wallpaper/624/336/42/science-the-big-bang-theory-atoms-wallpaper-preview.jpg')",
            }}
          >
            <div className="text-white text-sm">Completed Test</div>
            <div className="text-2xl text-white font-bold">48</div>
          </div>

          <div
            className="shadow-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-[280px] h-[160px]"
            style={{
              backgroundImage:
                "url('https://static.vecteezy.com/system/resources/thumbnails/006/712/955/small/abstract-health-medical-science-consist-doctor-digital-wireframe-concept-modern-medical-technology-treatment-medicine-on-gray-background-for-template-web-design-or-presentation-vector.jpg')",
            }}
          >
            <div className="text-white text-sm">Pending Test</div>
            <div className="text-2xl text-white font-bold">221</div>
          </div>

          <div
            className="shadow-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-[280px] h-[160px]"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/high-angle-view-eyeglasses-table-against-black-background_1048944-215100.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715731200&semt=ais_user')",
            }}
          >
            <div className="text-white text-sm">Instruments</div>
            <div className="text-2xl text-white font-bold">9</div>
          </div>

          <div
            className="shadow-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-[280px] h-[160px]"
            style={{
              backgroundImage:
                "url('https://png.pngtree.com/thumb_back/fh260/background/20210716/pngtree-abstract-geometric-medical-background-of-science-and-technology-style-gene-atom-image_743373.jpg')",
            }}
          >
            <div className="text-white text-sm">
              Instrument Under Calibration
            </div>
            <div className="text-2xl text-white font-bold">5</div>
          </div>
        </div>

        <div className="cardContainter d-flex gap-4 mb-4 mt-4">
          <div className="rounded px-5 w-[100%] bg-white shadow-lg cardItem">
            <div className="d-flex justify-content-between py-3">
              <div className="py-2 fw-bolder" style={{ color: "#343a40" }}>
                Material
              </div>
              <div className="fw-bolder fs-4" style={{ color: "#495057" }}>
                <button>...</button>
              </div>
            </div>
            <div className="d-flex gap-3 circularDot">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle"
                  style={{
                    backgroundColor: "#ffc107",
                    width: "12px",
                    height: "12px",
                    marginRight: "8px",
                  }}
                ></div>
                <span className="text-muted">Pending</span>
              </div>
              <div className="d-flex align-items-center ">
                <div
                  className="rounded-circle "
                  style={{
                    backgroundColor: "#0d6efd",
                    width: "12px",
                    height: "12px",
                    marginRight: "8px",
                  }}
                ></div>
                <span className="text-muted">In-progress</span>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle"
                  style={{
                    backgroundColor: "#28a745",
                    width: "12px",
                    height: "12px",
                    marginRight: "8px",
                  }}
                ></div>
                <span className="text-muted">Approved</span>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle mt-5"
                  style={{
                    backgroundColor: "#dc3545",
                    width: "12px",
                    height: "12px",
                    marginRight: "8px",
                  }}
                ></div>
                <span className="text-muted">Dropped</span>
              </div>
            </div>
            <div className="circularBar d-flex items-center  justify-around pt-4">
              <div className="p-3 circularItem">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  value={65}
                  text={"65%"}
                  strokeWidth={8}
                  styles={buildStyles({
                    backgroundColor: "#e3e1fd",
                    textColor: "#212529",
                    pathColor: "#FF5733",
                    trailColor: "transparent",
                  })}
                />
              </div>
              <div className="p-3 circularItem">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  value={21.3}
                  text={"21.3%"}
                  strokeWidth={8}
                  styles={buildStyles({
                    backgroundColor: "#e3e1fd",
                    textColor: "#212529",
                    pathColor: "#3498DB",
                    trailColor: "transparent",
                  })}
                />
              </div>
              <div className="p-3 circularItem">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  value={39.87}
                  text={"39.87%"}
                  strokeWidth={8}
                  styles={buildStyles({
                    backgroundColor: "#e3e1fd",
                    textColor: "#212529",
                    pathColor: "#2ECC71",
                    trailColor: "transparent",
                  })}
                />
              </div>
              <div className="p-3 circularItem">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  value={65}
                  text={"65%"}
                  strokeWidth={8}
                  styles={buildStyles({
                    backgroundColor: "#e3e1fd",
                    textColor: "#212529",
                    pathColor: "#9B59B6",
                    trailColor: "transparent",
                  })}
                />
              </div>
              <div className="p-3 circularItem">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  value={65}
                  text={"65%"}
                  strokeWidth={8}
                  styles={buildStyles({
                    backgroundColor: "#e3e1fd",
                    textColor: "#212529",
                    pathColor: "red",
                    trailColor: "transparent",
                  })}
                />
              </div>
              <div className="p-3 circularItem">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  value={39.87}
                  text={"39.87%"}
                  strokeWidth={8}
                  styles={buildStyles({
                    backgroundColor: "#e3e1fd",
                    textColor: "#212529",
                    pathColor: "yellow",
                    trailColor: "transparent",
                  })}
                />
              </div>
            </div>
          </div>

          <div className="rounded w-25 listItem shadow-lg cardItem bg-white">
            <div className="h5 m-4 fw-bold"> Latest Products</div>
            <ul className="list-unstyled d-grid gap-3 text-muted mx-4">
              {latestProducts.map((product, idx) => {
                return (
                  <li style={{ color: "black" }} key={idx}>
                    ◆ {product}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="cardContainter d-flex gap-4 mb-4">
          <div
            className="shadow-lg cardItem bg-white rounded p-4"
            style={{ width: "50%" }}
          >
            <div className="d-flex justify-content-between">
              <div className="py-2 fw-bolder">Analysis</div>
              <div className="fw-bolder  fs-4">...</div>
            </div>
            <div className="mt-4">
              <LineChart option={pieChartOptions} />
            </div>
          </div>
          <div
            className="rounded shadow-lg cardItem bg-white z-10"
            style={{ width: "50%" }}
          >
            <div className="py-4  fw-bolder text-center">Test Stats</div>
            <div className="pt-4">
              <LineChart option={materialOption} />
            </div>
          </div>
          <div className="rounded shadow-lg cardItem bg-white w-25">
            <div className="h5 m-4 fw-bold text-dark">AR Number</div>
            <ul className="list-unstyled d-grid gap-3 text-muted mx-4">
              {ARNumber.map((number, idx) => {
                return (
                  <li style={{ color: "black" }} key={idx}>
                    ◆ {number}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="cardContainter d-flex gap-4 mb-4">
          <div className="rounded shadow-lg cardItem bg-white w-50">
            <div className="py-4 fw-bolder text-center">
              Category wise Instruments
            </div>
            <div className="">
              <LineChart option={analysisOptions} className="p-4" />
            </div>
          </div>
          <div className="rounded shadow-lg cardItem bg-white w-50">
            <div className="py-4 mx-3 fw-bolder text-center">
              Material Status
            </div>
            <div className="pt-4 mx-4">
              <LineChart option={funnelOption} />
            </div>
          </div>
        </div>
        <div className="cardContainter d-flex gap-4 mb-4">
          <div className="w-50 rounded shadow-lg cardItem bg-white">
            <div className="py-4 mx-3 fw-bolder">Product Wise Test stats</div>
            <div className="pt-4 mx-4">
              <LineChart option={productWiseTestStatsOption} />
            </div>
          </div>
          <div className="w-50 rounded shadow-lg cardItem bg-white">
            <div className="py-4 mx-3 fw-bolder">Test Wise stats</div>
            <div className="pt-4 mx-5">
              <LineChart option={testWiseStatsOption} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Dashboard;
