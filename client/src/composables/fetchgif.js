import { ref, watchEffect } from "vue";

const api_key = import.meta.env.VITE_APP_GIPHY_API;

export const useFetch = ({ keyword }) => {
  const gifUrl = ref("");
  const fetchGifs = async() => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword.value
          .split(" ")
          .join("")}&limit=1`
      );
      let { data } = await response.json();
      gifUrl.value = data[0]?.images?.downsized_medium.url;
    } catch (error) {
      gifUrl.value =
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284";
    }
  };

  watchEffect(() => {
    fetchGifs();
  });

  return {
    gifUrl,
  };
};
