import Logo from "./assets/logo.svg";
import Dollar from "./assets/icon-dollar.svg";
import Person from "./assets/icon-person.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const percent = [5, 10, 15, 25, 50];

  const [percentTip, setPercentTip] = useState("");

  const [numberOfPeople, setNumberOfPeople] = useState("");

  const [bill, setBill] = useState("");

  const [tip, setTip] = useState({
    perPerson: 0,
    total: 0,
  });

  const [isZero, setIsZero] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Bloquea cualquier tecla que no sea número o control
    if (
      !/[0-9]/.test(e.key) && // no es número
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
  };

  const convertToNumber = (value: string): number => {
    const numberValue = Number(value);
    return isNaN(numberValue) ? 0 : numberValue;
  };

  const handlePercentTip = () => {
    const percentTip_: number = convertToNumber(percentTip);
    const bill_: number = convertToNumber(bill);
    const numberOfPeople_: number = convertToNumber(numberOfPeople);

    const totalTip = (percentTip_ / 100) * bill_;

    const tipPerPerson =
      numberOfPeople_ > 0 ? totalTip / numberOfPeople_ : totalTip;

    setTip({
      perPerson: parseFloat(tipPerPerson.toFixed(2)),
      total: parseFloat(totalTip.toFixed(2)),
    });
  };

  useEffect(() => {
    handlePercentTip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentTip, bill, numberOfPeople]);

  return (
    <div className="bg-[#9FE8DF] flex flex-col items-center justify-center min-h-screen min-w-[375px] ">
      <img src={Logo} className="p-4" alt="logo" />
      <div className="py-8 px-6 bg-white rounded-xl">
        <h2 className="text-[#5E7A7D] text-[16px] ">Bill</h2>

        <div className="relative w-full">
          <img
            src={Dollar}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00474B] w-fit h-fit"
            alt="Vite logo"
          />
          <input
            type="number"
            onKeyDown={handleKeyDown}
            name="bill"
            id="bill"
            placeholder="0"
            pattern="[1-9][0-9]*"
            min={0}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            inputMode="numeric"
            className="bg-[#F3F9FA] rounded-lg p-2 text-2xl text-end text-[#00474B] cursor-pointer w-full [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]"
          />
        </div>

        <div className="my-8">
          <h2 className="text-[#5E7A7D] text-[16px] ">Select percentTip %</h2>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 items-center">
            {percent.map((e) => (
              <button
                key={e}
                type="button"
                className={` ${
                  e == Number(percentTip) ? " bg-[#26C2AE]" : "bg-[#00474B] "
                }  py-2 px-10 rounded-sm m-2  h-[48px] cursor-pointer transition-all duration-500 hover:bg-[#26C2AE]`}
                onClick={() => setPercentTip(String(e))}
              >
                <p className="text-white text-xl ">{e}%</p>
              </button>
            ))}

            <input
              inputMode="numeric"
              name="custom"
              min={0}
              placeholder="custom"
              onChange={(e) => {
                if (Number(e.target.value) <= 100) {
                  console.log(Number(e.target.value));
                  setPercentTip(e.target.value);
                }
              }}
              value={percentTip}
              type="number"
              onKeyDown={handleKeyDown}
              id="custom"
              className="bg-[#F3F9FA] rounded-sm px-4 py-2 text-2xl h-[48px] text-end cursor-pointer text-[#00474B] [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between py-2">
          <p className="text-[#5E7A7D] text-[16px] text-start ">
            Number of People
          </p>
          {isZero && (
            <p className="text-[#E17052] text-[16px] text-end">Can’t be zero</p>
          )}
        </div>

        <div className="relative w-full">
          <img
            src={Person}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00474B] w-fit h-fit"
            alt="Vite logo"
          />
          <input
            type="number"
            name="numberOfPeople"
            id="numberOfPeople"
            placeholder="0"
            value={numberOfPeople}
            min={0}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setNumberOfPeople(e.target.value);
              setIsZero(e.target.value === "0" || e.target.value === "");
            }}
            inputMode="numeric"
            className={` ${
              isZero
                ? "border-[#E17052] border-2"
                : "border-transparent border-2"
            } border-2 transition-colors duration-200
              bg-[#F3F9FA] rounded-lg p-2 text-2xl w-full text-[#00474B] cursor-pointer text-end [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]`}
          />
        </div>
        <div className=" bg-[#00474B] p-6 rounded-xl mt-8  px-6">
          <div className="  grid grid-cols-2 grid-rows-2 gap-4 w-full">
            <div>
              <p className="text-white text-[16px] ">percentTip Amount</p>
              <p className="text-[#7F9D9F] text-[13px] ">/ person</p>
            </div>
            <p className="text-white text-4xl text-end ">${tip.perPerson}</p>

            <div>
              <p className="text-white  text-[16px] ">Total</p>
              <p className="text-[#7F9D9F] text-[13px] ">/ person</p>
            </div>
            <p className="text-white text-4xl text-end">${tip.total}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setPercentTip("");
              setBill("");
              setNumberOfPeople("");
              setTip({ perPerson: 0, total: 0 });
            }}
            className="bg-[#0D686D] py-2 px-7 rounded-sm my-2 w-full"
          >
            <p className="text-white text-xl cursor-pointer">RESET</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
