import * as ui from './ui.js';
import { GifService } from './GifService.js';
import { WeatherService } from './WeatherService.js';
import '../css/styles.css';

document.addEventListener(
  "DOMContentLoaded", () => {
    ui.search({GifService,WeatherService});
  }
);
