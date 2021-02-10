export class WeatherService {
  static async grab(city) {
    const key = process.env.OW_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return Error(error.message);
    }
  }
  static async receive(query) {
    return await this.grab(query).then(
      response => {
        if (response instanceof Error) {
          console.log(response.message);
        } else {
          return {
            feel: response.weather[0].main, 
            temp: response.main.temp
          };
        }
      }
    );
  }
}
