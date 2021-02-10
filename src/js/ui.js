export const search = (thisArg) => {
  const {GifService, WeatherService} = thisArg;
  const getBoth = async () => {
    const {value} = document.getElementById('search-input');
    const weatherType = await WeatherService.receive(value);
    return {
      weatherFeelGif: GifService.receive(weatherType.feel),
      weatherFeelDes: weatherType.feel
    };
  };
  document.getElementById("giphy-search").addEventListener(
    "click", () => {
      const gifElement = document.getElementById('gif');
      const textElement = document.getElementById('sky');
      (async () => {
        const returnData = await getBoth();
        gifElement.innerHTML = `<img src=${await returnData.weatherFeelGif}>`;
        textElement.innerHTML = `${await returnData.weatherFeelDes}`;
      })();
    });
};