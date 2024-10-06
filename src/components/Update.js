import { useState } from "react";

const Update = ({ props, setData }) => {
    const [errMsg, setErrMsg] = useState({
        rank: "",
        percentile: "",
        score: ""
    })
    const localData = JSON.parse(localStorage?.getItem("formData"))
  const [formData, setformData] = useState({
    rank: localData?.rank || null,
    percentile: localData?.percentile || null,
    score: localData?.score || null,
  });

    const handleSave = () => {
        localStorage.setItem("formData", JSON.stringify(formData))
        setData({
            0: formData.rank,
            1: formData.percentile,
            2: formData.score
        });
        props(false)
  };

    const handleChange = (e) => {
        if (!e.target.value) {
            let error = "";
            if (e.target.name === 'rank') error = 'required | should be a number'
            else if (e.target.name === 'percentile') error = 'required | percentile 1-100'
            else error = 'required | score 0-15 '
          setErrMsg({...errMsg, [e.target.name] : error})
        }
        else{
            Object.keys(errMsg).forEach((key) => {
                errMsg[key] = '';
            });
        }
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    };
    
    const isDisabled = () => {
        const result = Object.values(errMsg).filter((item) => {
            return item.length > 0
        })
        return result.length > 0;
    }
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 rounded-md">
        <div className="bg-white m-auto rounded-md relative top-20 w-2/5 h-70">
          <div className="flex justify-between px-8 py-6">
            <p className="text-2xl font-bold">Update Scores</p>
            <img className="w-10 h-10" src="./htmlLogo.png"></img>
          </div>
          <div className="form flex justify-around px-8 py-6 flex-col">
            <div className="flex justify-between mb-9">
              <label className="text-start flex">
                <div className="rounded-full w-6 h-6 flex items-center justify-center bg-blue-800 text-white font-bold mr-4">
                  1
                </div>
                <div>
                  Update your <span className="font-bold">Rank</span>
                </div>
              </label>
              <div>
                <input
                  type="number"
                  name="rank"
                  onChange={handleChange}
                  value={formData.rank}
                  placeholder="Rank"
                  className="border-blue-900 border-2 rounded-md px-2 py-1 font-bold text-sm"
                ></input>
                {errMsg.rank && <div className="text-red-800 text-xs">{errMsg.rank}</div>}
              </div>
            </div>
            <div className="flex justify-between mb-9">
              <label className="text-start flex">
                <div className=" rounded-full w-6 h-6 flex items-center justify-center bg-blue-800 text-white font-bold mr-4">
                  2
                </div>
                <div>
                  Update your <span className="font-bold">Percentile</span>
                </div>
              </label>
              <div>
                <input
                  type="number"
                  name="percentile"
                  onChange={handleChange}
                  value={formData.percentile}
                  placeholder="Percentile"
                  className="border-blue-900 border-2 rounded-md px-2 py-1 font-bold text-sm"
                ></input>
                {errMsg.percentile && <div className="text-red-800 text-xs">{errMsg.percentile}</div>}
              </div>
            </div>
            <div className="flex justify-between mb-9">
              <label className="text-start">
                <label className="text-start flex">
                  <div className="rounded-full w-6 h-6 flex items-center justify-center bg-blue-800 text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    Update your{" "}
                    <span className="font-bold"> Current Score(Out of 15)</span>
                  </div>
                </label>
              </label>
              <div>
                <input
                  type="number"
                  name="score"
                  onChange={handleChange}
                  value={formData.score}
                  placeholder="Score"
                  className="border-blue-900 border-2 rounded-md px-2 py-1 font-bold text-sm"
                ></input>
                {errMsg.score && <div className="text-red-800 text-xs">{errMsg.score}</div>}
              </div>
            </div>
            <div className="flex justify-end mb-10">
              <button
                className="font-bold rounded-md  mr-6 px-3 py-2 border-blue-900 border-2"
                onClick={() => props(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-900 px-10 py-2 text-white font-bold rounded-md"
                              onClick={handleSave}
                              disabled={isDisabled()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
