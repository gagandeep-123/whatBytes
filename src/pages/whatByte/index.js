import Graph from "@/components/Graph";
import Navbar from "@/components/Navbar";
import PieChart from "@/components/PieChart";
import ProgressBar from "@/components/ProgressBar";
import Sidebar from "@/components/Sidebar";
import SkillTest from "@/components/SkillTest";
import { useEffect, useState } from "react";
const Landing = () => {
    const [skillData, setSkillData] = useState({
        rank: null,
        percentile: null,
        score: null
    });

    const getFormData = (data) => {
        setSkillData({
            rank: data[0],
            percentile: data[1],
            score: data[2]
        });
    }
    useEffect(() => {
        const formData = {
            rank: 5 ,
            percentile : 60,
            score : 12,
        }
        localStorage.setItem("formData", JSON.stringify(formData));
        
        
    },[])
    return (
      <div>
        <Navbar />
        <div className="main-wrapper flex ">
          <Sidebar />
          <div className="w-3/6">
            <SkillTest getFormData={getFormData} />
            <Graph skillData = {skillData}></Graph>
          </div>
          <div className="w-2/6">
            <ProgressBar />
            <PieChart skillData={skillData} />
          </div>
        </div>
      </div>
    );
}

export default Landing;