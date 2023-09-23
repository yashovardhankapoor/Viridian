import { useState } from "react";
import "./Healthcare.css";

import jsonData from "./json/New_Sample.json";
import anotherJsonData from "./json/sample2.json"; // Import the new JSON file

function Healthcare() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (!searchTerm) {
      setData([]);
      return;
    }

    const filteredData = jsonData.filter((item) =>
      (item.Uses?.toLowerCase() || "").includes(searchTerm.toLowerCase())
    );

    const displayedData = filteredData.map((item) => {
      // Find matching data in the new JSON based on the "Salt" column
      const matchingItem = anotherJsonData.find(
        (otherItem) =>
          otherItem.Drug1?.toLowerCase() === item.Salt?.toLowerCase()
      );

      // Create a new column "Dont go together" based on the match
      const dontGoTogether =
        matchingItem?.DontGoTogether || "No information available";

      return {
        "Medicine Name": item["Medicine Name"],
        Prescription: item.Prescription,
        "Type of Sell": item["Type of Sell"],
        Manufacturer: item.Manufacturer,
        Salt: item.Salt,
        MRP: item.MRP,
        Uses: item.Uses,
        "Side Effects": item["Side Effects"] || "N/A",
        "Dont go together": dontGoTogether,
      };
    });

    setData(displayedData);
  };

  return (
    <div className="Healthcare">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Symptoms"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {data.length > 0 && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <br />
      <br />
      {}
    </div>
  );
}

export default Healthcare;
