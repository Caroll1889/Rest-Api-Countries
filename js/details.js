const flags = document.getElementById('flags')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params) 


document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try {
    
        const response = await fetch('api.json') 
        const data = await response.json()
        // console.log(data)
        const dataFilter = data.filter(item => item.name === params)
        showFlags(dataFilter)
        
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
                    <b>Language: </b>
                    ${element.languages[0].name}
                </p>
                <p>
                    <b>Currency: </b>
                    ${element.currencies[0].name}
                </p>
                <p>
                    <b>Demonym: </b>
                    ${element.demonym}
                </p>
            </div>
        </article>`
    });
    flags.innerHTML = items
}