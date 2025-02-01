// UNSPLASH API FOR GETTING BACKGROUND IMAGE
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = ` By: ${data.user.name}`
    })
    // SETTING DEFAULT BACKGROUND IMAGE IF UNSPLASH API FAILS
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1461301214746-1e109215d6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgzNTAyNjl8&ixlib=rb-4.0.3&q=80&w=1080)`
        document.getElementById("author").textContent = ` By: Kace Rodriguez`
    })

// CoinGecko API FOR GETTING CRYPTO DATA
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    // ERROR DISPLAYS IF API FAILS
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        // DOGECOIN IMAGE
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        // PRICES
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

// DISPLAYING AND UPDATING CURRENT TIME EVERY SECOND
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}
setInterval(getCurrentTime, 1000)

// GEOLOCATION API FOR GETTING WEATHER DATA USING CURRENT LOCATION/POSITION
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    // ERROR DISPLAYS IF API FAILS
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            // WEATHER ITEMS ON PAGE
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.log(err))
});