import React, { useState, useEffect } from "react";
import Backbtn from "../../components/Backbtn";
const Calculator = () => {
  const [Display, setDisplay] = useState(0);
  const [OldNumber, setOldNumber] = useState(0);
  const [NewNumber, setNewNumber] = useState(0);
  const [Operation, setOperation] = useState("");

  useEffect(() => {
    setNewNumber(Display);
  }, [Display]);

  const handelCalculate = () => {
    // debugger;
    setNewNumber(Display);
    if (Display === 0 && OldNumber === 0 && NewNumber === 0) {
      alert("Please enter a number!");
    } else {
      if (Operation !== null) {
        switch (Operation) {
          case "-":
            let result1 = OldNumber - NewNumber;
            setDisplay(result1); // Update display with calculated result
            break;

          case "/":
            let result3 = OldNumber / NewNumber;
            setDisplay(result3);
            break;

          case "%":
            let result4 = OldNumber % NewNumber;
            let modulo = Math.floor(OldNumber / NewNumber);
            setDisplay(result4 + " (" + modulo + ")");
            break;

          case "x":
            let result5 = OldNumber * NewNumber;
            setDisplay(result5);
            break;

          case "+":
            let result6 = OldNumber + NewNumber;
            setDisplay(result6);
            break;

          default:
            alert(Operation);
            break;
        }
      }
    }
  };

  const handelNumberClick = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setDisplay(parseInt(Display + value));
    } else if (value === "<") {
      let str = Display.toString();
      if (str.length <= 1) {
        setDisplay(0);
      } else {
        let result = str.substring(0, str.length - 1);
        setDisplay(result);
      }
    } else {
      setOperation(value);
      setOldNumber(Display);
      setDisplay(0);
    }

    if (value === "C") {
      setDisplay(0);
      setOldNumber(0);
      setNewNumber(0);
    }
  };

  const keypadNumber = [
    "=",
    ".",
    0,
    "-",
    3,
    2,
    1,
    "+",
    6,
    5,
    4,
    "x",
    9,
    8,
    7,
    "/",
    "%",
    "<",
    "C",
  ];

  return (
    <>
      <Backbtn />
      <div className="font-mono container mx-auto h-screen flex justify-center items-center">
        <div className="calculator h-[85%] w-1/3  border-2 p-5 rounded-lg text-white bg-gray-800">
          <div className="display flex justify-end  items-center">
            <h1 className=" text-5xl">{Display}</h1>
          </div>
          <div className="grid grid-flow-row grid-cols-4 gap-4 mt-6">
            {keypadNumber
              .map((val) => {
                if (val === "=") {
                  return (
                    <button
                      className="w-[195%] rounded-full bg-gray-500 hover:bg-gray-600 text-2xl"
                      value={val}
                      key={val}
                      onClick={handelCalculate}
                    >
                      {val}
                    </button>
                  );
                } else {
                  return (
                    <button
                      className="aspect-square bg-gray-500 rounded-full hover:bg-gray-600 text-2xl"
                      value={val}
                      key={val}
                      onClick={handelNumberClick}
                    >
                      {val}
                    </button>
                  );
                }
              })
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
