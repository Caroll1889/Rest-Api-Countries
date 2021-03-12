const form = document.getElementById('form')
const inputForm = document.getElementById('input-form')

const clientSearch = data => {
    form.addEventListener('keyup', e => {
        e.preventDefault()

        const letter = inputForm.value.toLowerCase()
        // console.log(letter)
        const filterArray = data.filter(item => {
            const apiName = item.name.toLowerCase()
            if (apiName.indexOf(letter) !== -1) {
                return item
            }
        })
        showFlags(filterArray)
    })
}