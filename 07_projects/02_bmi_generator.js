const form = document.querySelector('form')

// Whenever a form is submitted, its either POST or GET
// and its values are send to the server
// we have to stop this default behaviour

// this usecase will give u empty
// const weight = parseInt(document.querySelector('#weight').value) 

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value) // by default value is string
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        // show the result
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi >= 18.6 && bmi <= 24.9) {
            results.appendChild(document.createElement('br'))
            results.appendChild(document.createTextNode("Normal Range"))
        }
    }

})