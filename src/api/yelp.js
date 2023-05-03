import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer pgZ5Q5pgYFGFxn_5n4peKfopthPsJ4hFUzebn0WYVy6VZz9UGcmce0jy2WfGmkHqAoDqNUCJdHBMWgrr4pyhqtQVybvIxEP46FSUCEVonFIQGdv95dwQ2nhL351RZHYx",
  },
});
