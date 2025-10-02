import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const percent = [5, 10, 15, 25, 50];

  return (
    <div className="bg-[#9FE8DF] flex flex-col items-center justify-center min-h-screen ">
      <img src={Logo} className="p-8" alt="Vite logo" />
      <div className="py-8 px-6 bg-white rounded-xl">
        <h2 className="text-[#5E7A7D] text-xl ">Bill</h2>
        <input
          type="number"
          name="bill"
          id="bill"
          className="bg-[#9EBBBD] rounded-lg p-2"
        />

        <div className="my-8">
          <h2 className="text-[#5E7A7D] text-xl ">Select Tip %</h2>
          <div>
            {percent.map((e) => (
              <button
                type="button"
                className="bg-[#00474B] py-2 px-7 rounded-sm m-2"
                onClick={() => console.log("e", e)}
              >
                <p className="text-white text-xl ">{e}%</p>
              </button>
            ))}
            <input
              type="number"
              name="bill"
              id="bill"
              className="bg-[#9EBBBD] rounded-lg p-2"
            />
          </div>
        </div>

        <h2 className="text-[#5E7A7D] text-xl ">Number of People</h2>
        <input
          type="number"
          name="bill"
          id="bill"
          className="bg-[#9EBBBD] rounded-lg p-2"
        />

        <div className=" bg-[#00474B] p-6 rounded-xl mt-8">
          <div>
            <p className="text-white text-xl ">Tip Amount</p>
            <p className="text-white text-xl ">/ person</p>
            <p className="text-white text-xl ">$0.00</p>
          </div>

          <div>
            <p className="text-white text-xl ">Total</p>
            <p className="text-white text-xl ">/ person</p>
            <p className="text-white text-xl ">$0.00</p>
          </div>

          <button
            type="button"
            className="bg-[#0D686D] py-2 px-7 rounded-sm m-2"
          >
            <p className="text-white text-xl ">Reset</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
