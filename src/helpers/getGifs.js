export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GBZXY8P3J7B8hV1jaID4gpFZ0AjQMUVD&limit=20&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
