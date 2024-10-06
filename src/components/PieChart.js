import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";


const PieChart = ({ skillData }) => {
    const correctAnswers = skillData.score;
    const wrongAnswers = (15-(skillData.score));
    const data = {
      labels: ["Correct", "Incorrect"],
      datasets: [
        {
          label: "Quiz Result",
          data: [correctAnswers, wrongAnswers],
          backgroundColor: ["#3B82F6", "#E5E7EB"],
          // borderColor: ["rgba(34, 202, 236, 1)", "rgba(200, 200, 200, 0.3)"],
          // borderWidth: 2,
        },
      ],
    };

    const options = {
      cutout: "70%",
      rotation: 180,
      plugins: {
        legend: {
          display: false, // Hide the legend if you don't want to display "Correct" and "Incorrect"
        },
        tooltip: {
          enabled: false,
        },
      },
    };

  return (
    <div className="flex justify-center border-2 rounded-md border-stone-200 flex-col py-6 px-6 mt-6 mr-10 mb-6">
      <div className="heading text-semibold">
        <div className="flex justify-between">
          <p className="font-bold">Question Analysis</p>
                  <span className="font-bold text-blue-800">{skillData.score}/15</span>
        </div>
        <p className="pt-2 text-lg mb-10">
          <span className="font-bold text-gray-600">
            {" "}
                      You scored {skillData.score} {skillData.score > 1 ? 'questions' : 'question'} correct out of 15.{" "}
          </span>
          {skillData.score < 14 && 'However it still needs some improvement.'}
        </p>
      </div>
      <div className="pieChart flex justify-center">
        <div className="w-40 h-40">
          <Doughnut data={data} options={options} />
        </div>
        {/* <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-blue-500">
            {correctAnswers}
          </span>
          <span className="text-gray-500">/ {15}</span>
        </div> */}
      </div>
    </div>
  );
}

export default PieChart