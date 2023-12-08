import React, { useState, useEffect } from "react";
import axios from "axios";

function CurrencyRates() {
  const [conversionRates, setConversionRates] = useState(null);
  const [previousRates, setPreviousRates] = useState(null); // To store previous day's rates

  useEffect(() => {
    const apiKey = "880f238f68c7a199774d3449"; // Replace with your actual API key
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/CAD`;

    if (conversionRates) {
      setPreviousRates(conversionRates); // Store previous day's rates
    }

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setConversionRates(data.conversion_rates);
      })
      .catch((error) => {
        console.error("Error fetching currency rates:", error);
      });
  }, [conversionRates]); // Re-run the effect when conversionRates change

  const renderArrow = (newValue, oldValue) => {
    if (newValue > oldValue) {
      return <span style={{ color: "green" }}>↑</span>;
    } else if (newValue < oldValue) {
      return <span style={{ color: "red" }}>↓</span>;
    } else {
      return <span style={{ color: "grey" }}>-</span>;
    }
  };

  return (
    <div className="flex items-center justify-between ml-auto mr-auto">
      <div>
        <h2>CAD</h2>
      </div>
      <div>
        {conversionRates && previousRates && (
          <p>
            {renderArrow(
              parseFloat(conversionRates.GHS.toFixed(3)),
              parseFloat(previousRates.GHS.toFixed(3))
            )}
            {parseFloat(conversionRates.GHS.toFixed(3))}
          </p>
        )}
      </div>
      <div>
        {conversionRates && previousRates && (
          <p>
            {renderArrow(
              parseFloat((1 / conversionRates.GHS).toFixed(3)),
              parseFloat((1 / previousRates.GHS).toFixed(3))
            )}
            {parseFloat((1 / conversionRates.GHS).toFixed(3))}
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrencyRates;
