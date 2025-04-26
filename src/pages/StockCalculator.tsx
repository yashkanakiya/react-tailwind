import React, { useState } from "react";

export default function StockCalculator() {
  
  const [formValues, setFormValues] = useState({
    firstUnits: "",
    firstPrice: "",
    secondUnits: "",
    secondPrice: "",
  })
  
  const [averagePrice, setAveragePrice] = useState<number | null>(null);
  
  const [errors, setErrors] = useState({
    firstUnits: "",
    firstPrice: "",
    secondUnits: "",
    secondPrice: "",
  });
  
  const { firstUnits, firstPrice, secondUnits, secondPrice } = formValues;

  const firstTotal = parseFloat(firstUnits) * parseFloat(firstPrice);
  const secondTotal = parseFloat(secondUnits) * parseFloat(secondPrice);
  const totalUnits = parseFloat(firstUnits) + parseFloat(secondUnits);
  const totalAmount = firstTotal + secondTotal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateFields = () => {
    const newErrors = {
      firstUnits: firstUnits ? "" : "Units for the first purchase are required.",
      firstPrice: firstPrice ? "" : "Price for the first purchase is required.",
      secondUnits: secondUnits ? "" : "Units for the second purchase are required.",
      secondPrice: secondPrice ? "" : "Price for the second purchase is required.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const calculateAverage = () => {
    if (!validateFields()) {
      return;
    }

    if (totalUnits > 0) {
      setAveragePrice((firstTotal + secondTotal) / totalUnits);
    } else {
      setAveragePrice(null);
    }
  };

  const clearFields = () => {
    setFormValues({
      firstUnits: "",
      firstPrice: "",
      secondUnits: "",
      secondPrice: "",
    });
    setAveragePrice(null);
    setErrors({
      firstUnits: "",
      firstPrice: "",
      secondUnits: "",
      secondPrice: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Stock Market Average Calculator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Purchase */}
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">First Purchase</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Units</label>
            <input
              type="number"
              value={firstUnits}
              name="firstUnits"
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.firstUnits ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstUnits && (
              <p className="text-red-500 text-sm mt-1">{errors.firstUnits}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price per share</label>
            <input
              type="number"
              name="firstPrice"
              value={firstPrice}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.firstPrice ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstPrice && (
              <p className="text-red-500 text-sm mt-1">{errors.firstPrice}</p>
            )}
          </div>
        </div>

        {/* Second Purchase */}
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">Second Purchase</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Units</label>
            <input
              type="number"
              name="secondUnits"
              value={secondUnits}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.secondUnits ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.secondUnits && (
              <p className="text-red-500 text-sm mt-1">{errors.secondUnits}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price per share</label>
            <input
              type="number"
              name="secondPrice"
              value={secondPrice}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${
                errors.secondPrice ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.secondPrice && (
              <p className="text-red-500 text-sm mt-1">{errors.secondPrice}</p>
            )}
          </div>
        </div>
      </div>


      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={clearFields}
          className="bg-white border text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-50 cursor-pointer"
        >
          Clear Fields
        </button>
        <button
          onClick={calculateAverage}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600  cursor-pointer"
        >
          Calculate Average
        </button>
      </div>

      {/* Result */}
      {averagePrice !== null && (
        <div className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-md text-center">
          <h2 className="text-lg font-semibold">
            Total Units: {totalUnits.toFixed(2)}
          </h2>
          <p className="text-lg font-semibold">
            Average Price: {averagePrice.toFixed(2)}
          </p>
          <p className="text-lg font-semibold">
            Total amount: {totalAmount.toFixed(2)}
          </p>
        </div>
      )}

      {/* Description Card */}
      <div className="mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Stock Average Calculator</h2>
        <p className="text-sm text-gray-700 mb-2">
          The Stock Average Calculator is a valuable tool for investors looking
          to manage their portfolio effectively. It aids in calculating the
          average share price, providing insights into optimizing investment
          strategies.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          Why Stock Average Calculator?
        </h3>
        <p className="text-sm text-gray-700 mb-2">
          As an investor, you may encounter situations where a stock's price
          moves contrary to your expectations. For instance, you bought Reliance
          stocks with the anticipation of an upward trend. However, the market
          moves downward. Despite this, your faith in the stock persists. The
          Stock Average Calculator becomes essential in such scenarios, allowing
          you to strategically add more stocks to lower the average price.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          How Does Stock Average Calculator Work?
        </h3>
        <p className="text-sm text-gray-700 mb-2">
          Let's delve into the mechanics of the Stock Average Calculator.
          Consider a scenario where you purchased 10 stocks of Tata Motors at a
          price of 200 each. Subsequently, the stock's value decreases to 150.
          With confidence in Tata Motors' future prospects, you aim to reduce
          the average stock price by acquiring more shares. The calculator
          assists by determining how many additional stocks you need to purchase
          to bring the average closer to the current price. This tool, such as
          the Share Average Calculator by FinanceX, offers a user-friendly
          interface where you input your purchase details, and it provides you
          with the recalculated average price.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          Steps to Use Stock Average Calculator:
        </h3>
        <ul className="list-decimal list-inside text-sm text-gray-700">
          <li>
            <span className="font-bold">Input Purchase Prices:</span> Enter the purchase price for each instance of
            buying the stock.
          </li>
          <li>
          <span className="font-bold">Calculating Average Price:</span> The calculator processes the inputted
            purchase prices to compute the average stock price.
          </li>
          <li>
          <span className="font-bold">Decision Making:</span> Use the calculated average to make informed
            decisions about buying more stocks. This is typically done when the
            current stock price is lower than the calculated average.
          </li>
          <li>
          <span className="font-bold">Reducing Average Price:</span> The goal is to strategically buy more shares
            at lower prices, aiming to bring down the average cost per share.
          </li>
          <li>
          <span className="font-bold">Tool Output:</span> The Stock Average Calculator provides the user with the
            recalculated average stock price based on new purchases.
          </li>
        </ul>

        <p className="text-sm text-gray-700 mt-4">
          This tool empowers investors to make informed decisions and manage
          their portfolio actively. It's crucial to exercise caution and stay
          well-informed, as market conditions can be unpredictable.
        </p>
      </div>
    </div>
  );
}
