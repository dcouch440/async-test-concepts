export const search = (thisArg) => {
  const {GifService, WeatherService} = thisArg;
  const callApis = async () => {
    const {value} = document.getElementById('search-input');
    const weatherType = await WeatherService.receive(value);
    return {
      asyncGif: GifService.receive(weatherType.feel),
      syncFeel: weatherType.feel,
      syncTemp: weatherType.temp
    };
  };
  document.getElementById("giphy-search").addEventListener(
    "click", () => {
      const gifElement = document.getElementById('gif');
      const textElement = document.getElementById('sky');
      (async () => {
        const api = await callApis();
        gifElement.innerHTML = `<img src=${await api.asyncGif}>`;
        textElement.innerHTML = `Feels like: ${api.syncFeel}, Temp: ${api.syncTemp}`;
      })();
    });
};