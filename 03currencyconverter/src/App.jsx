import { useState } from "react";
import { InputBox } from "./components";
import { useCurrencyInfo } from "./hooks";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    // swap currencies and values
    const prevFrom = from;
    const prevTo = to;
    const prevAmount = amount;
    const prevConverted = convertedAmount;

    setFrom(prevTo);
    setTo(prevFrom);
    setAmount(prevConverted);
    setConvertedAmount(prevAmount);
  };

  const convert = () => {
    const rate = currencyInfo?.[to] ?? 0;
    setConvertedAmount(Number((Number(amount) * rate).toFixed(4)));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        // direct image URL (jpg/png), not the pexels page link
        backgroundImage:
          "url('https://images.pexels.com/photos/32129133/pexels-photo-32129133.jpeg')",
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From */}
          <div className="w-full mb-2">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(cur) => setFrom(cur)}
              selectCurrency={from}
              onAmountChange={(val) => setAmount(val)}
            />
          </div>

          {/* Swap */}
          <div className="relative w-full h-0.5 my-2">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 text-sm"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To */}
          <div className="w-full mt-2 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(cur) => setTo(cur)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert */}
          <button
            type="submit"
            disabled={!currencyInfo?.[to]}
            className="w-full bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
