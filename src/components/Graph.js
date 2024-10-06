import { Line, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ skillData }) => {
    console.log("skill data", skillData)
    const [percentData, setpercentData] = useState([])
    const [countData, setcountData] = useState([]);
    const [dataPoints, setDataPoints] = useState();
  const data = {
    labels: [0, 25, 50, 75, 100], // X-axis labels (percentiles)
    datasets: [
      {
        label: "Number of Students",
        // Label for the dataset
        type: "line",
        data: dataPoints, 
            borderColor: "rgb(30 64 175)",
            borderWidth : 0.6,
        
            // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill under the line
        tension: 0.3, // Smoothness of the line
        pointRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 25,
        },
        min: 0,
        max: 100,
        title: {
          display: false,
        },
      },
          y: {
          display : false,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
        },
        min: 0,
        max: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    };
    
    useEffect(() => {
        let data = [
          { x: 0, y: 1 },
          { x: 10, y: 2 },
          { x: 22, y: 4 },
          { x: 27, y: 7 },
          { x: 27, y: 6 },
          { x: 27, y: 8 },
          { x: 30, y: 13 },
          { x: 33, y: 15 },
          { x: 48, y: 18 },
          { x: 50, y: 25 },
          { x: 54, y: 14 },
          { x: 60, y: 8 },
          { x: 70, y: 6 },
          { x: 82, y: 5 },
          { x: 85, y: 6 },
          { x: 85, y: 1 },
          { x: 100, y: 1 },
        ];
        let count = 1;

        const result = data.filter((ele) => {
            return (
                ele?.x == skillData.percentile         
            )
        })
        if (result?.length > 0) {
            const maxValue = Math.max(...result.map((item) => item.y ));
            count = maxValue + 1;
        }
        data.push({x: skillData.percentile, y: count})
        data.sort((a, b) => {
            return a.x - b.x;
            
        })
        setDataPoints(data)


    },[skillData])

    return (
      <div className="card flex border-2 rounded-md border-stone-200 mx-10 mt-6 flex-col ">
        <div className="py-4 px-4">
          <div className="head font-bold mb-px">Comparison Graph</div>
          <div className="flex justify-between mt-3">
            <div>
              <div className="">
                <span className="text-gray-600 font-bold">
                  You Scored {skillData.percentile}% percentile
                </span>{" "}
                which is {skillData.percentile < 72 ? "lower" : "greater"} than the
              </div>
              <div>
                average percentile 72% of all engineers who took this assesment
              </div>
            </div>
            <div className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center">
              <img className="w-7 h-8" src="./graph.png"></img>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Scatter data={data} options={options} />
        </div>
      </div>
    );
      
};

export default Graph;