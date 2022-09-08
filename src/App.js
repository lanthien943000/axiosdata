import React, { useEffect } from "react";
import { BASE_URL } from "./app/config";
import apiService from "./app/apiService";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get("/jobs");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(BASE_URL);
  }, []);
  return (
    <div>
      <h1>Axios</h1>
    </div>
  );
}

export default App;
