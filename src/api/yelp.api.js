import axios from "axios";

const apiKey = "WHATEVER YOUR YELP AKI IS GOES HERE";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
