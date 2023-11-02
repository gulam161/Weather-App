import React, { useState, useEffect } from "react";
import "./css/style.css";
import axios from "axios";
import StreetviewIcon from "@mui/icons-material/Streetview";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=46f2c0324486ce7cf52bc6b3c9b1ed3c`;
      const res = await axios.get(url);
      const data = res.data;
      setCity(data.main);
    };
    fetchApi();
  }, [search]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue || "Mumbai");
  };
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            placeholder="Enter City name"
            // value={search}
            onChange={handleInputChange}
          />
        </div>

        {!city ? (
          <p className="errormsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h1 className="location">
                <StreetviewIcon className="street" />
                {search}
              </h1>
              <h1 className="temp"> {city.temp} °C</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min} °C | Max: {city.temp_max} °C
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Temp;
