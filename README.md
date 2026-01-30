✅ Component structure & hierarchy 🔧

App (App.jsx)
  Top-level shell — renders the app: App → WeatherApp.
  
WeatherApp (WeatherApp.jsx)
  State owner: holds weatherInfo (city, temp, humidity, etc.).
  Renders SearchBox and InfoBox, passes updateInfo to SearchBox and info to InfoBox.

SearchBox (SearchBox.jsx)
  Handles user input and performs the API call.
  On success calls updateInfo(newInfo) to send normalized data up to WeatherApp.

InfoBox (InfoBox.jsx)
  Pure presentational component that receives info and renders the UI (cards, icons, images).



↔ Data & event flow (step-by-step) 🔁
  1. User types a city in SearchBox and submits the form.
  2. SearchBox calls the OpenWeather API (side-effect) and builds a normalized newInfo object.
  3. SearchBox calls props.updateInfo(newInfo) to pass data upward.
  4. WeatherApp sets weatherInfo state → React re-renders.
  5. InfoBox receives updated info prop and displays the new weather.



✅ Material UI (MUI) : 
      Material UI (MUI) is a popular React component library that implements Google's Material Design. 
      It provides ready-made, accessible components (Buttons, Cards, Typography, Icons, etc.) 
      so we can build consistent, responsive UIs faster.

      

🌤️ OpenWeatherMap API :
      OpenWeatherMap (OpenWeather) provides weather data (current weather, forecasts, historical) via simple REST endpoints. 
      For this app we use the Current Weather Data endpoint.
