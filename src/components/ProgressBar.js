
const ProgressBar = () => {
    const color = "red";
    const percentage = 10;
      const progressData = [
        {
          label: "HTML Tools, Forms, History",
          percentage: 80,
          color: "bg-blue-500",
          textColor: "text-blue-500",
        },
        {
          label: "Tags & References in HTML",
          percentage: 60,
          color: "bg-orange-500",
          textColor: "text-orange-500",
        },
        {
          label: "Tables & References in HTML",
          percentage: 24,
          color: "bg-red-500",
          textColor: "text-red-500",
        },
        {
          label: "Tables & CSS Basics",
          percentage: 96,
          color: "bg-green-500",
          textColor: "text-green-500",
        },
      ];
    return (
      <div className="border-2 rounded-md border-stone-200 py-6 px-6 mt-20 mr-10">
        <p className="head font-bold ">Syllabus Wise Analysis</p>
        {progressData.map((item) => {
          return (
            <div className="my-4">
              <div className="text-sm mb-2 mt-10">{item.label}</div>
              <div className="flex items-center justify-between">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-3 w-5/6">
                  <div
                    className={`h-full ${item.color} text-white text-right pr-2 flex items-center justify-end rounded-lg h-3`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className={`font-semibold ${item.textColor}`}>
                  {item.percentage}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
}
export default ProgressBar;