const flags = document.getElementById('flags')

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try {
    
        const response = await fetch('api.json') 
        const data = await response.json()
        // console.log(data)
        showFlags(data)
        clientSearch(data)
        filters(data)
    
    } catch (error) {
        alert(error)
    }
}

const showFlags = data => {
    let items = ''
    data.forEach(element => {
        items += 
        `<article class="card">
            <img src="${element.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${element.name}</h3>
                <p>
                    <b>Population: </b>
                    ${element.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${element.capital}
                </p>
                <p>
                    <b>Region: </b>
                    ${element.region}
                </p>
                <p>
                    <a href="country.html?name=${element.name}">Learn more...</a>
                </p>
            </div>
        </article>`
    });
    flags.innerHTML = items
}