const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search";

export const searchMusic = async (query) => {
  const response = await fetch(`${BASE_URL}?q=${query}`);
  const data = await response.json();
  return data.data;
};