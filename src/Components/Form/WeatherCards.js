import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
const WeatherCards = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    getWeatherInfo();
  }, [latitude, longitude]);
  const getWeatherInfo = async () => {
    const { data } = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore`
    );
    console.log(typeof data);
    setWeatherData(data);
  };
  console.log(weatherData.data);
  return (
    <div className="col-10 col-md-6">
      {weatherData.length !== 0 && (
        <div className="card border-dark mb-3" style={{ width: "100%" }}>
          <h3 className="card-header">Weather Info</h3>

          <ul className="list-group list-group-flush card-body text-dark">
            {weatherData.daily.time.map((ele, index) => (
              <li className="list-group-item">
                <WeatherDatAContainer>
                  <h5>{ele}</h5>
                  <h5>
                    {weatherData.daily.temperature_2m_max[index]}
                    {weatherData.daily_units.temperature_2m_max}
                  </h5>
                </WeatherDatAContainer>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const WeatherDatAContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export default WeatherCards;
