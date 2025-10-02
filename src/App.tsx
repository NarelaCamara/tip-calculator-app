import Logo from "./assets/logo.svg";
import Dollar from "./assets/icon-dollar.svg";
import Person from "./assets/icon-person.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const percent = [5, 10, 15, 25, 50];

  const [tip, setTip] = useState(0);

  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const [bill, setBill] = useState(0);

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

  const handleTipPerPerson = () => {
    const resultado = (tip / 100) * bill;
    return numberOfPeople > 0 ? resultado / numberOfPeople : 0;
  };
  const handleTipTotal = () => {
    const resultado = (tip / 100) * bill;
    return resultado;
  };

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
            onChange={(e) => setBill(Number(e.target.value))}
            inputMode="numeric"
            className="bg-[#F3F9FA] rounded-lg p-2 text-2xl text-end text-[#00474B] w-full [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]"
          />
        </div>

        <div className="my-8">
          <h2 className="text-[#5E7A7D] text-[16px] ">Select Tip %</h2>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 items-center">
            {percent.map((e) => (
              <button
                key={e}
                type="button"
                className="bg-[#00474B] py-2 px-10 rounded-sm m-2  h-[48px]"
                onClick={() => setTip(e)}
              >
                <p className="text-white text-xl ">{e}%</p>
              </button>
            ))}

            <input
              inputMode="numeric"
              name="bill"
              min={0}
              placeholder="custom"
              onChange={(e) => setTip(Number(e.target.value))}
              onKeyDown={handleKeyDown}
              id="bill"
              className="bg-[#F3F9FA] rounded-sm px-4 py-2 text-2xl h-[48px] text-end  text-[#00474B] [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between py-2">
          <p className="text-[#5E7A7D] text-[16px] text-start ">
            Number of People
          </p>
          {numberOfPeople === 0 && tip > 0 && bill > 0 && <p className="text-[#E17052] text-[16px] text-end">Can’t be zero</p>}
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
            min={0}
            onKeyDown={handleKeyDown}
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            inputMode="numeric"
            className={` ${
              numberOfPeople === 0 && tip > 0 && bill > 0
                ? "border-[#E17052] border-2"
                : " "
            }  bg-[#F3F9FA] rounded-lg p-2 text-2xl w-full text-[#00474B]  text-end [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]`}
          />
        </div>
        <div className=" bg-[#00474B] p-6 rounded-xl mt-8  px-6">
          <div className="  grid grid-cols-2 grid-rows-2 gap-4 w-full">
            <div>
              <p className="text-white text-[16px] ">Tip Amount</p>
              <p className="text-[#7F9D9F] text-[13px] ">/ person</p>
            </div>
            <p className="text-white text-4xl text-end ">
              ${handleTipPerPerson() + ".00"}
            </p>

            <div>
              <p className="text-white  text-[16px] ">Total</p>
              <p className="text-[#7F9D9F] text-[13px] ">/ person</p>
            </div>
            <p className="text-white text-4xl text-end">
              ${handleTipTotal() + ".00"}
            </p>
          </div>
          <button
            type="button"
            className="bg-[#0D686D] py-2 px-7 rounded-sm my-2 w-full"
          >
            <p className="text-white text-xl ">RESET</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
