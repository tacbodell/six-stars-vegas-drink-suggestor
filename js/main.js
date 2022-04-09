//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const input = document.querySelector('#input')
const button = document.querySelector('#sendRequest')
const alcohol = document.querySelector('.alcoholSection')

const pic1 = document.querySelector('#imageGoesHere1')
const drinkName1 = document.querySelector('#name1')
const instructions1 = document.querySelector('#instructions1')
const ingredients1 = document.querySelector('#ingredients1')
const pic2 = document.querySelector('#imageGoesHere2')
const drinkName2 = document.querySelector('#name2')
const instructions2 = document.querySelector('#instructions2')
const ingredients2 = document.querySelector('#ingredients2')
const pic3 = document.querySelector('#imageGoesHere3')
const drinkName3 = document.querySelector('#name3')
const instructions3 = document.querySelector('#instructions3')
const ingredients3 = document.querySelector('#ingredients3')
const pic4 = document.querySelector('#imageGoesHere4')
const drinkName4 = document.querySelector('#name4')
const instructions4 = document.querySelector('#instructions4')
const ingredients4 = document.querySelector('#ingredients4')

let drink1
let drink2
let drink3
let drink4

button.addEventListener('click', run)

function run() {
    if (input.value.trim() === ''){ // Checks if input field is blank
        return
    }

    alcohol.classList.add('show')

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input.value}`) // Gets array of short drink descriptions with ID
        .then(res => res.json())
        .then(data => {
            console.log('base fetch:')
            console.log(data)
            drink1 = data.drinks[0]
            pic1.src = drink1.strDrinkThumb
            drinkName1.innerHTML = drink1.strDrink
            
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink1.idDrink}`) // Gets long description of drink for instructions
                .then(res => res.json())
                .then(data => {
                    console.log('long fetch:')
                    console.log(data)
                    instructions1.innerHTML = data.drinks[0].strInstructions

                    ingredients1.innerHTML = '';
                    for (let i = 1; data.drinks[0][`strIngredient${i}`] !== null; i++) {    //  iterates through ingredients and places into dom
                        const li = document.createElement('li');
                        li.innerText = data.drinks[0][`strIngredient${i}`]
                        ingredients1.appendChild(li)
                    }
                })
                .catch(err => {
                    console.log(`error ${err}`)
                })

            drink2 = data.drinks[1]
            pic2.src = drink2.strDrinkThumb
            drinkName2.innerHTML = drink2.strDrink
            
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink2.idDrink}`) // Gets long description of drink for instructions
                .then(res => res.json())
                .then(data => {
                    console.log('long fetch:')
                    console.log(data)
                    instructions2.innerHTML = data.drinks[0].strInstructions
                    
                    ingredients2.innerHTML = '';
                    for (let i = 1; data.drinks[0][`strIngredient${i}`] !== null; i++) {    //  iterates through ingredients and places into dom
                        const li = document.createElement('li');
                        li.innerText = data.drinks[0][`strIngredient${i}`]
                        ingredients2.appendChild(li)
                    }
                })
                .catch(err => {
                    console.log(`error ${err}`)
                })

            drink3 = data.drinks[2]
            pic3.src = drink3.strDrinkThumb
            drinkName3.innerHTML = drink3.strDrink
            
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink3.idDrink}`) // Gets long description of drink for instructions
                .then(res => res.json())
                .then(data => {
                    console.log('long fetch:')
                    console.log(data)
                    instructions3.innerHTML = data.drinks[0].strInstructions

                    ingredients3.innerHTML = '';
                    for (let i = 1; data.drinks[0][`strIngredient${i}`] !== null; i++) {    //  iterates through ingredients and places into dom
                        const li = document.createElement('li');
                        li.innerText = data.drinks[0][`strIngredient${i}`]
                        ingredients3.appendChild(li)
                    }
                })
                .catch(err => {
                    console.log(`error ${err}`)
                })

            drink4 = data.drinks[3]
            pic4.src = drink4.strDrinkThumb
            drinkName4.innerHTML = drink4.strDrink
            
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink4.idDrink}`) // Gets long description of drink for instructions
                .then(res => res.json())
                .then(data => {
                    console.log('long fetch:')
                    console.log(data)
                    instructions4.innerHTML = data.drinks[0].strInstructions
                    
                    ingredients4.innerHTML = '';
                    for (let i = 1; data.drinks[0][`strIngredient${i}`] !== null; i++) {    //  iterates through ingredients and places into dom
                        const li = document.createElement('li');
                        li.innerText = data.drinks[0][`strIngredient${i}`]
                        ingredients4.appendChild(li)
                    }
                })
                .catch(err => {
                    console.log(`error ${err}`)
                })
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}


