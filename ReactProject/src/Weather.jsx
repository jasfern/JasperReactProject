import React from 'react';
/*
 * Fetch Weather API data for San Mateo
 */
async function fetchWeatherData() {
    const data = await fetch("https://api.weather.gov/gridpoints/MTR/86,95/forecast")
    return data.json()
}


export default class WeatherDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: undefined,
        }
    }

    componentDidMount() {
        this.updateWeatherData()
        setInterval(this.updateWeatherData, 100000)
    }

    updateWeatherData = () => {
        // calling fetchWeatherData() returns a promise
        // use ".then(callback)" to specify what we want to 
        // do with the data when it is returned from the API
        fetchWeatherData().then(data => {
            const todayForecast = data.properties.periods[0]
            console.log(todayForecast.temperature)
            this.setState({
                temp: todayForecast.temperature
            })
        })
    }

    render() {
        const { temp } = this.state
        return (
            <div> 
                <h1>San Mateo, CA: {temp}°F</h1>
            </div>
        )
    }
}
