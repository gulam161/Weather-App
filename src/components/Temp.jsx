import React, { useState, useEffect } from "react";
import axios from "axios";
import StreetviewIcon from "@mui/icons-material/Streetview";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=46f2c0324486ce7cf52bc6b3c9b1ed3c`
        );
        setCity(response.data.main);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCity(null);
      }
    };

    fetchData();
  }, [search]);

  const handleInputChange = (event) => {
    setSearch(event.target.value || "Mumbai");
  };

  return (
    <div className="w-1/4 h-1/2 rounded-md shadow-md bg-indigo-300 relative overflow-hidden pt-4 text-center transform min-w-[20rem] min-h-[28rem]">
      <div className="inputData">
        <input
          type="search"
          className="outline-none border-none px-5 py-2 rounded-full mt-10"
          placeholder="Enter City name"
          // value={search}
          onChange={handleInputChange}
        />
      </div>

      {!city ? (
        <p className="text-center text-2xl font-semibold mt-5">No Data Found</p>
      ) : (
        <>
          <div className="relative top-7 text-gray-700 flex flex-col gap-y-2.5">
            <h1 className="text-4xl capitalize">
              <StreetviewIcon className="street mr-1.5" />
              {search}
            </h1>
            <h1 className="relative top-10 text-black text-3xl font-medium">
              {" "}
              {city.temp} °C
            </h1>
            <h3 className="relative top-10 text-black text-lg">
              Min: {city.temp_min} °C | Max: {city.temp_max} °C
            </h3>
          </div>

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </>
      )}
    </div>
  );
};

export default Temp;
