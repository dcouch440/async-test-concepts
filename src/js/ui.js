export const search = (thisArg) => {
  const {GifService, WeatherService} = thisArg;
  const callApis = async () => {
    const {value} = document.getElementById('search-input');
    const weatherType = await WeatherService.receive(value);
    return {
      async_gif: GifService.receive(weatherType.feel),
      sync_feel: weatherType.feel,
      sync_temp: weatherType.temp
    };
  };
  document.getElementById("giphy-search").addEventListener(
    "click", () => {
      const gifElement = document.getElementById('gif');
      const textElement = document.getElementById('sky');
      (async () => {
        const api = await callApis();
        gifElement.innerHTML = `<img src=${await api.async_gif}>`;
        textElement.innerHTML = `Feels like: ${api.sync_feel}, Temp: ${api.sync_temp}`;
      })();
    });
};