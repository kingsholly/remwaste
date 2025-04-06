// lib/api.js
import axios from "axios";

export const getSkipsByLocation = async (
  postcode = "NR32",
  area = "Lowestoft"
) => {
  try {
    const response = await axios.get(
      `https://app.wewantwaste.co.uk/api/skips/by-location`,
      {
        params: {
          postcode,
          area,
        },
      }
    );

    return response.data; // array of skip objects
  } catch (error) {
    // console.error("Error fetching skip data:", error);
    return [];
  }
};
