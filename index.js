// UNSPLASH API FOR GETTING BACKGROUND IMAGE
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = ` By: ${data.user.name}`
    })
    // SETTING DEFAULT BACKGROUND IMAGE IF UNSPLASH API FAILS
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1506260408121-e353d10b87c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgzNDk4NzB8&ixlib=rb-4.0.3&q=80&w=1080)`
    })