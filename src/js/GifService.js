export class GifService {
  static async grab(query) {
    const key = process.env.GIF_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=1`;
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
          return response.data[0].images.original.url;
        }
      }
    );
  }
}