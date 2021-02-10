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
      return Error({
        message: this.statusText,
        error: error
      });
    }
  }
  static async receive(query) {
    return await this.grab(query).then(data => {
      return {
        feel: data.weather[0].main, 
        temp: data.main.temp
      };
    });
  }
}