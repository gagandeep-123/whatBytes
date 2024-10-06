"use client";

import { useEffect, useState } from "react";
import Update from "./Update";




const SkillTest = ({ getFormData }) => {
  const [openModal, setopenModal] = useState(false);
  const [data, setData] = useState({
    0: null,
    1: null,
    2: null,
  });
  const obj = [
    {
      image: "./trophy.png",
      // value: localData.rank,
      name: "YOUR RANK",
    },
    {
      image: "./trophy.png",
      // value: localData.percentile,
      name: "PERCENTILE",
    },
    {
      image: "./trophy.png",
      // value: localData.score,
      name: "CORRECT ANSWERS",
    },
  ];

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("formData")) || {};
    console.log(localData);
    setData({
      0: localData.rank,
      1: localData.percentile,
      2: localData.score,
    });
  }, []);
    
    useEffect(() => {
        if (data) {
            getFormData(data);
        }
    },[data])

  return (
    <>
      {openModal && <Update props={setopenModal} setData={setData} />}
      <div className="skillTest-wrapper flex-col  p-10 pb-0 ">
        <div className="mb-6">Skill Test</div>
        <div className="card flex border-2 rounded-md border-stone-200 py-6 px-1.5 justify-around mb-6 ">
          <div className="logo-contr">
            <img src="./htmlLogo.png" className="h-14" />
          </div>
          <div className="about-contr flex ml-4 w-4/5 justify-between">
            <div>
              <div className="head font-bold mb-px">
                Hyper Text Markup Language
              </div>
              <span>
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </span>
            </div>

            <button
              onClick={() => {
                setopenModal(true);
              }}
              className="bg-blue-800 text-white font-semibold text-sm h-11 rounded px-6 border-2 border-black border-solid "
            >
              Update
            </button>
          </div>
        </div>

        <div className="card border-2 rounded-md border-stone-200 py-4 px-4">
          <div className="head font-bold mb-px">Quick Statistics</div>
          <div className="list flex justify-between px-2 py-4 mx-16">
            {obj.map((ele, idx) => {
              return (
                <div
                  className={`flex ${idx === 2 ? "pl-5" : "border-r-2 pr-5 pl-5"}`}
                >
                  <div className="logo-contr mr-4 flex justify-center items-center h-12 w-12  bg-zinc-100 rounded-full">
                    <img className="h-9 w-9" src={ele.image}></img>
                  </div>
                  <div className="score-contr">
                    <div className="score font-bold text-lg">{data[idx]}</div>
                    <div className="name text-sm text-zinc-400">{ele.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillTest;