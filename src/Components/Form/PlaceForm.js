import React, { useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Maps from "./Maps";
import WeatherCards from "../Form/WeatherCards";
const APIKEY = "a7a4639ba9603356620de23e26aeacba";

const PlaceForm = () => {
  const [placeName, setPlaceName] = useState("");
  const [dataApi, setDataApi] = useState([]);

  const SubmitFormUtility = async (e) => {
    e.preventDefault();
    if (placeName.trim() === "") {
      return alert("A place Name Cannot Be Empty");
    }
    const { data } = await axios.get(
      `http://api.positionstack.com/v1/forward?access_key=${APIKEY}&query=${placeName}`
    );
    // console.log(data.data[0]);
    setDataApi(data);
  };
  console.log(dataApi.data);
  return (
    <div className="container">
      <form onSubmit={SubmitFormUtility}>
        <div className="form-group">
          <label htmlFor="inputPlaceName">Place Name</label>
          <input
            type="text"
            className="form-control"
            id="inputPlaceName"
            aria-describedby="textHelp"
            placeholder="Enter Place"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Give More Information for better and Accurate Results like Country
            Name etc.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="row">
        <div className="col-12 col-md-6">
          {dataApi.length !== 0 && dataApi.data.length !== 0 && (
            <>
              <Cards name="Latitude" typeValue={dataApi.data[0].latitude} />
            </>
          )}
        </div>
        <div className="col-12 col-md-6">
          {dataApi.length !== 0 && dataApi.data.length !== 0 && (
            <>
              <Cards name="Longitude" typeValue={dataApi.data[0].longitude} />
            </>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-8">
          {dataApi.length !== 0 && dataApi.data.length !== 0 && (
            <WeatherCards
              latitude={dataApi.data[0].latitude}
              longitude={dataApi.data[0].longitude}
            />
          )}
        </div>
        <div className="col-10 col-md-4">
          {dataApi.length !== 0 && dataApi.data.length !== 0 && (
            <>
              <h3>Map</h3>
              <Maps
                lng={dataApi.data[0].longitude}
                lat={dataApi.data[0].latitude}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceForm;
