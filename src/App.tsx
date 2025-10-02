import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const percent = [5, 10, 15, 25, 50];

  return (
    <div className="bg-[#9FE8DF] flex flex-col items-center justify-center min-h-screen ">
      <img src={Logo} className="p-8" alt="Vite logo" />
      <div className="py-8 px-6 bg-white rounded-xl">
        <h2 className="text-[#5E7A7D] text-[16px] ">Bill</h2>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          min={0}
          inputMode="numeric"
          className="bg-[#9EBBBD] rounded-lg p-2 text-2xl text-[#00474B]  [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]"
        />

        <div className="my-8">
          <h2 className="text-[#5E7A7D] text-[16px] ">Select Tip %</h2>
          <div>
            {percent.map((e) => (
              <button
                key={e}
                type="button"
                className="bg-[#00474B] py-2 px-7 rounded-sm m-2"
                onClick={() => console.log("e", e)}
              >
                <p className="text-white text-xl ">{e}%</p>
              </button>
            ))}
            <input
              inputMode="numeric"
              name="bill"
              min={0}
              placeholder="custom"
              id="bill"
              className="bg-[#9EBBBD] rounded-lg p-2 text-2xl  text-[#00474B] [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]"
            />
          </div>
        </div>

        <h2 className="text-[#5E7A7D] text-[16px] ">Number of People</h2>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          min={0}
          inputMode="numeric"
          className="bg-[#9EBBBD] rounded-lg p-2 text-2xl text-[#00474B]   [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
                [appearance:textfield]"
        />

        <div className=" bg-[#00474B] p-6 rounded-xl mt-8">
          <div>
            <p className="text-white text-[16px] ">Tip Amount</p>
            <p className="text-[#7F9D9F] text-[13px] ">/ person</p>
            <p className="text-white text-4xl ">$0.00</p>
          </div>

          <div>
            <p className="text-white  text-[16px] ">Total</p>
            <p className="text-[#7F9D9F] text-[13px] ">/ person</p>
            <p className="text-white text-4xl ">$0.00</p>
          </div>

          <button
            type="button"
            className="bg-[#0D686D] py-2 px-7 rounded-sm m-2"
          >
            <p className="text-white text-xl ">RESET</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
