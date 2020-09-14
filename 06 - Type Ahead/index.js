const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const searchInput = document.querySelector(".search")
const suggestionsList = document.querySelector(".suggestions")


async function filterData(userQuery) {
    const data = await fetchCities()
    return data.filter(city => city.city.toLowerCase().includes(userQuery.toLowerCase()) || city.state.toLowerCase().includes(userQuery.toLowerCase()))
} 

async function fetchCities() {
    const response = await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    const data = await response.json()
    return data
}

async function populateList() {
    const results = await filterData(this.value)
    const higlightRegex = new RegExp(this.value, 'gi')
    suggestionsList.innerHTML = results.map(city =>{
        return `<li><span class="name">${city.city.replace(higlightRegex, `<span class="hl">${this.value}</span>`)}, ${city.state.replace(higlightRegex, `<span class="hl">${this.value}</span>`)}</span> <span class="population">${city.population}</span></li>`
    }).join('')
}

searchInput.addEventListener('keyup', populateList)