import React from "react";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      temp: "",
      city: "Kristiansand",
      icon: "",
      city_display: "",
      desc: "",
      main: "",
      humidity: "",
      pressure: "",
      visiblity: ""
    };
    this.fetch_weather();
  }
  fetch_weather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.state.city +
        "&appid=1e7132a6dc655a9b3af2149650b5268e"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
        this.setState({ temp: (json.main.temp - 273.15).toFixed(1) + "°C" });
        this.setState({ city_display: json.name });
        this.setState({ icon: json.weather[0].icon });
        this.setState({ desc: json.weather[0].description });
        this.setState({ main: json.weather[0].main });
        this.setState({ humidity: json.main.humidity + " %" });
        this.setState({ pressure: json.main.pressure + " hPa" });
        this.setState({
          visibility: (json.visibility / 1000).toFixed(2) + " Km"
        });
      })
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div className="weather-container">
        <div className="main">
          <div className="weather-text">
            <p>The Weather in my city Right Now!</p>
          </div>
          <div className="location-box">
            <h1 className="location">{this.state.city_display}</h1>
          </div>

          <div className="weather-box">
            <h2 className="temp">{this.state.temp}</h2>
            <div className="weather">
              <p>{this.state.main}</p>
            </div>
            <p className="weather-desc">{this.state.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
