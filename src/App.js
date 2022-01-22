import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/header";

function App() {
  const [getData, setGetData] = useState([]);
  const [bool, setBool] = useState(false);

  const getDataListner = async () => {
    try {
      const data = await axios.get(
        "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c7e096eae87840b8a56d4a0107b359db-data.json",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setGetData(data.data);
      setBool(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataListner();
  }, []);

  return (
    <div className="App">
      <div className="header">
        {bool ? (
          <Header getData={getData} />
        ) : (
          <div className="loading">
            <img src="https://www.contextsensitivesolutions.org/wp-content/uploads/2021/02/1519081000_compare-ajax-loader.gif"></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
