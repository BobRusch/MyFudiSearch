import { useEffect, useState } from "react";
import yelp from "../api/yelp.api";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          radius: 3000,
          term: searchTerm,
          location: "pompton plains nj",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("fast food");
  }, []);

  return [searchApi, results, errorMessage];
};
