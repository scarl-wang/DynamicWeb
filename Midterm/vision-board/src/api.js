// base URL : https://api.unsplash.com/
// endpoint/route : /search/photos

import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sCKowYoznoEtTIh93w2rce_0s_VB05OEgUm1Kj59DkY",
    },
    params: {
      // make the search term a parameter
      query: term,
    },
  });
  // don't move on until we get an response from the server
  // have to add "async" at top level

  //console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
// if exported like {searchImages}, import needs to be the same
