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
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
    })
    .catch(err => console.error(err))