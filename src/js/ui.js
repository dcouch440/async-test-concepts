export const search = (thisArg) => {
  const {GifService, WeatherService} = thisArg;
  const callApis = async () => {
    const {value} = document.getElementById('search-input');
    const weatherType = await WeatherService.receive(value);
    return {
      weatherGif: GifService.receive(weatherType.feel),
      weatherFeelsLike: weatherType.feel,
      weatherFeelsTemp: weatherType.temp
    };
  };
  document.getElementById("giphy-search").addEventListener(
    "click", () => {
      const gifElement = document.getElementById('gif');
      const textElement = document.getElementById('sky');
      (async () => {
        const api = await callApis();
        gifElement.innerHTML = `<img src=${await api.weatherGif}>`;
        textElement.innerHTML = `Feels like: ${api.weatherFeelsLike}, Temp: ${api.weatherFeelsTemp}`;
      })();
    });
};