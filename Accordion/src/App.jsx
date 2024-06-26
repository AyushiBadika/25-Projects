import { useState } from "react";
import data from "./data";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [toggleMultiSelection, setToggleMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleToggleSingleAccordion = (id) => {
    setSelected(id === selected ? null : id);
  };
  const handleToggleMultiAccordion = (id) => {
    const copyMultiple = [...multiSelect];

    if (copyMultiple.includes(id)) {
      copyMultiple.splice(copyMultiple.indexOf(id), 1);
      setMultiSelect(copyMultiple);
    } else {
      copyMultiple.push(id);
      setMultiSelect(copyMultiple);
    }
  };

  return (
    <div className="shadow-lg p-12 rounded-md text-justify">
      <button
        onClick={() => setToggleMultiSelection(!toggleMultiSelection)}
        className="border-2 mb-8 px-12 py-2 rounded-md bg-black text-white font-bold"
      >
        Select Multiple
      </button>
      <div className="md:max-[50%] flex flex-col gap-8">
        {data && data.length > 0 ? (
          data.map((data) => {
            return (
              <div key={data.id} className="">
                <div
                  className="flex justify-between mb-4 text-justify "
                  onClick={
                    toggleMultiSelection
                      ? () => handleToggleMultiAccordion(data.id)
                      : () => handleToggleSingleAccordion(data.id)
                  }
                >
                  <p className="">{data.question}</p>
                  <p style={{ fontSize: "20px", cursor: "pointer" }}>+</p>
                </div>
                {toggleMultiSelection ? (
                  multiSelect.includes(data.id) ? (
                    <div className=" md:w-[500px] w-[350px] text-gray-500">
                      {data.answer}
                    </div>
                  ) : (
                    ""
                  )
                ) : selected === data.id ? (
                  <div className="md:w-[500px] w-[350px] text-gray-500">
                    {data.answer}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}
