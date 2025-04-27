
import React, { useState } from "react";

export default function Rule72() {
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState({
    interestRate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInterestRate(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateFields = () => {
    const newErrors = {
      interestRate: interestRate ? "" : "Interest rate is required.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleCalculate = () => {
    if (!validateFields()) {
      return;
    }

    const rate = parseFloat(interestRate);
    if (rate > 0) {
      const totalMonths = Math.round(72 / rate * 12);
      setYears(Math.floor(totalMonths / 12));
      setMonths(totalMonths % 12);
      setShowResult(true);
    }else {
      setYears(0);
      setMonths(0);
      setShowResult(false);
    }
  };

  return (
  <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Rule of 72 Calculator
      </h1>
      <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center">
        <label className="block text-sm font-medium mb-1">Enter the expected annual interest rate (%)</label>
        <input
          type="number"
          value={interestRate}
          name="interestRate"
          onChange={handleChange}
          placeholder="Enter interest rate (%)"
          className={`w-full p-2 border rounded-md ${
            errors.interestRate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.interestRate && (
          <p className="text-red-500 text-sm mt-1">{errors.interestRate}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleCalculate}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate
        </button>
      </div>

      {/* Result */}
      {showResult && (
      <div className="mt-4 p-4 bg-white shadow-md rounded-md text-center">
        <p>It will take approximately {years} years and {months} months to double your investment.</p>
      </div>
      )}
      
      {/* Description Card */}
      <div className="mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Rule of 72 Calculator</h2>
        <p className="text-sm text-gray-700 mb-2">
          The Rule of 72 Calculator is a financial tool used to estimate the time it takes for an investment to double in value based on a fixed annual interest rate or return. 
          This is based on the "Rule of 72," a simple mathematical formula widely used in finance and investing.
        </p>

        <p className="text-sm text-gray-700 mb-2">
          This tool saves time and effort by automating the calculation, making it accessible even to those without financial expertise.
          It's ideal for individuals making quick financial assessments or planning long-term investment strategies.
        </p>

      </div>
    </div>
  );
}
