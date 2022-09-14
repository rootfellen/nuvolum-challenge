import { useState, useEffect } from "react";
import API_URL from "../constants/api";

export const useApiGet = (url) => {
  const [status, setStatus] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // Async function to fetch data from API url with setting statuses and error handling.

  const getAPIData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setStatus(response.status);
      setStatusText(response.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  // Triggering "getAPIData" function
  useEffect(() => {
    getAPIData();
  }, []);
  return { status, statusText, data, error, loading };
};
